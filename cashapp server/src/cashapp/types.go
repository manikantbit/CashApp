package main

type redis_set_req struct {
	Key   string
	Value map[string]interface {}
}
type redis_get_req struct {
	Key string
}
type redis_resp struct {
	Key   string
	Value map[string]string
}
