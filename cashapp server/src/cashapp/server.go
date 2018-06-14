package main

import (
	"encoding/json"
	"fmt"
	"github.com/codegangsta/negroni"
	"github.com/go-redis/redis"
	"github.com/gorilla/mux"
	"github.com/unrolled/render"
	"log"
	"net/http"
)

var sentinel1 = "13.56.115.44:26379"
var sentinel2 = "13.56.59.241:26379"
var sentinel3 = "13.56.77.81:26379"
var sentinel4 = "13.57.198.213:26379"
var sentinel5 = "18.144.43.209:26379"
// NewServer configures and returns a Server.
func NewServer() *negroni.Negroni {
	formatter := render.New(render.Options{
		IndentJSON: true,
	})
	n := negroni.Classic()
	mx := mux.NewRouter()
	initRoutes(mx, formatter)
	n.UseHandler(mx)
	return n
}

// API Routes
func initRoutes(mx *mux.Router, formatter *render.Render) {
	mx.HandleFunc("/redis_get", redisGet(formatter)).Methods("POST")
	mx.HandleFunc("/redis_set", redisSet(formatter)).Methods("POST")
	mx.HandleFunc("/flushDB", flush(formatter)).Methods("POST")
}

func redisGet(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {

		decoder := json.NewDecoder(req.Body)
		var t redis_get_req
		var resp redis_resp
		err := decoder.Decode(&t)
		if err != nil {
			panic(err)
		}
		defer req.Body.Close()
		log.Println(t.Key)

		//pool, err := radix.NewPool("tcp", "127.0.0.1:6379", 10)
		client := redis.NewFailoverClient(&redis.FailoverOptions{
			MasterName:    "mymaster",
			SentinelAddrs: []string{sentinel1,sentinel2,sentinel3,sentinel4,sentinel5},
			//PoolSize:      10,
			//MaxRetries:    3,
		})

		//client.FlushDB()

		ret, _ := client.HGetAll(t.Key).Result()
		fmt.Printf("%s\n", ret)
		log.Println(ret)
		resp.Value = ret
		resp.Key = t.Key
		// Return Order Status
		formatter.JSON(w, http.StatusOK, resp)
	}
}

func redisSet(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {

		decoder := json.NewDecoder(req.Body)
		var t redis_set_req
		err := decoder.Decode(&t)
		if err != nil {
			panic(err)
		}
		defer req.Body.Close()
		log.Println(t.Key)
		//session, err := mgo.Dial(mongodb_server)
		client := redis.NewFailoverClient(&redis.FailoverOptions{
			MasterName:    "mymaster",
			SentinelAddrs: []string{sentinel1,sentinel2,sentinel3,sentinel4,sentinel5},
			//PoolSize:      10,
			//MaxRetries:    3,
		})

		ret := client.HMSet(t.Key, t.Value)
		fmt.Printf("%s\n", ret)
		resp := fmt.Sprintf("%s", ret)
		// Return Order Status
		formatter.JSON(w, http.StatusOK, resp)
	}
}

func flush(formatter *render.Render) http.HandlerFunc {
	return func(w http.ResponseWriter, req *http.Request) {

		decoder := json.NewDecoder(req.Body)
		var t redis_set_req
		err := decoder.Decode(&t)
		if err != nil {
			panic(err)
		}
		defer req.Body.Close()
		log.Println(t.Key)
		//session, err := mgo.Dial(mongodb_server)
		client := redis.NewFailoverClient(&redis.FailoverOptions{
			MasterName:    "mymaster",
			SentinelAddrs: []string{sentinel1,sentinel2,sentinel3,sentinel4,sentinel5},
			//PoolSize:      10,
			//MaxRetries:    3,
		})

		ret := client.FlushDB().String()
		fmt.Printf("%s\n", ret)

		// Return Order Status
		formatter.JSON(w, http.StatusOK, ret)
	}
}
