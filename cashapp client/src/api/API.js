const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3000'
 
const headers = {
    'Accept': 'application/json'
};
export const getRelevantProjects=(payload)=>
fetch(`${api}/post/selfprojects`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        //body: JSON.stringify(payload)
    }).then(result => {
        console.log(result);
        return result.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });

    export const getselfProjects=(payload)=>
fetch(`${api}/post/selfprojects`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        //body: JSON.stringify(payload)
    }).then(result => {
        console.log(result);
        return result.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });

    export const getbids=()=>
fetch(`${api}/bids/getbids`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        //body: JSON.stringify(payload)
    }).then(proj => {
        console.log(proj);
        return proj.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });

    export const getOpenProjects=(payload)=>
fetch(`${api}/post/openprojects`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },credentials:'include',
        //body: JSON.stringify(payload)
    }).then(result => {
        console.log(result);
        return result.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });

    export const getOpenProjects2=(payload)=>
    fetch(`${api}/post/openprojects2`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'GET',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },credentials:'include',
            //body: JSON.stringify(payload)
        }).then(result => {
            console.log(result);
            return result.json();      // res.status is passed from nodejs to confirm that
        }).catch(error => {
            console.log("This is  fucking error");
            return error;
        });

        export const getAssignedProjects=(payload)=>
fetch(`${api}/post/assignedprojects`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },credentials:'include',
        //body: JSON.stringify(payload)
    }).then(result => {
        console.log(result);
        return result.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });
    
    
    export const getProfileImage=()=>
fetch(`${api}/profile/getprofileimage`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        //body: JSON.stringify()
    }).then(result => {
        return result.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });

    export const getProfileDetails=()=>
    fetch(`${api}/profile/userdetails`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'GET',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },credentials:'include',
            //body: JSON.stringify()
        }).then(result => {
            return result.json();      // res.status is passed from nodejs to confirm that
        }).catch(error => {
            console.log("This is  fucking error");
            return error;
        });

        export const getProjectDetails=(userdata)=>
    fetch(`${api}/post/projectdetails`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },credentials:'include',
            body: JSON.stringify(userdata)
        }).then(proj => {
            return proj.json();      // res.status is passed from nodejs to confirm that
        }).catch(error => {
            console.log("This is  fucking error");
            return error;
        });



        //post bid api
        export const postBid = (payload) =>    //payload contains the credentials of login.
        fetch(`${api}/bids/projectbid`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },
            credentials:'include',
            body: JSON.stringify(payload)
        }).then(result => {
            return result.json();      // res.status is passed from nodejs to confirm that
                                    // if there are corret credentials 
        })
            .catch(error => {
                console.log("This is error");
                return error;
            });

            export const getBidData=(userdata)=>
    fetch(`${api}/bids/getBidData`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },credentials:'include',
            body: JSON.stringify(userdata)
        }).then(proj => {
            return proj.json();      // res.status is passed from nodejs to confirm that
        }).catch(error => {
            console.log("This is  fucking error");
            return error;
        });

    //assign Project

    export const AssignProject = (payload) =>    //payload contains the credentials of login.
        fetch(`${api}/bids/assignproject`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },
            credentials:'include',
            body: JSON.stringify(payload)
        }).then(insertedbid => {
            return insertedbid.json();      // res.status is passed from nodejs to confirm that
                                    // if there are corret credentials 
        })
            .catch(error => {
                console.log("This is error");
                return error;
            });

            export const addmoney = (payload) =>    //payload contains the credentials of login.
        fetch(`http://localhost:3002/account/addmoney`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },
            credentials:'include',
            body: JSON.stringify(payload)
        }).then(result => {
            return result.json();      // res.status is passed from nodejs to confirm that
                                    // if there are corret credentials 
        })
            .catch(error => {
                console.log("This is error");
                return error;
            });

            export const paymoney = (payload) =>    //payload contains the credentials of login.
        fetch(`http://localhost:3002/account/paymoney`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },
            credentials:'include',
            body: JSON.stringify(payload)
        }).then(result => {
            return result.json();      // res.status is passed from nodejs to confirm that
                                    // if there are corret credentials 
        })
            .catch(error => {
                console.log("This is error");
                return error;
            });

            export const deductmoney = (payload) =>    //payload contains the credentials of login.
        fetch(`http://localhost:3002/account/deductmoney`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },
            credentials:'include',
            body: JSON.stringify(payload)
        }).then(result => {
            return result.json();      // res.status is passed from nodejs to confirm that
                                    // if there are corret credentials 
        })
            .catch(error => {
                console.log("This is error");
                return error;
            });

            export const getBalance=()=>
fetch(`http://localhost:3002/account/getBalance`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        //body: JSON.stringify()
    }).then(bal => {
        return bal.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });

        export const findProject=(payload)=>
        fetch(`${api}/post/particularprojects`, {     // ${api}/users/doLogin` this contains the address of the backend server.
                method: 'POST',
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'   //json data is passed from react to node.
                },credentials:'include',
                body: JSON.stringify(payload)
            }).then(proj => {
                return proj.json();
                console.log(proj);      // res.status is passed from nodejs to confirm that
            })
            .catch(error => {
                console.log("This is  fucking error");
                return error;
            });


export const doLogin = (payload) =>    //payload contains the credentials of login.
    fetch(`${api}/users/login`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(result => {
        return result.json();      // res.status is passed from nodejs to confirm that
                                // if there are corret credentials 
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const logout = (payload) =>    //payload contains the credentials of login.
fetch(`${api}/users/logout`, {     // ${api}/users/doLogin` this contains the address of the backend server.
    method: 'POST',
    headers: {
        ...headers,
        'Content-Type': 'application/json'   //json data is passed from react to node.
    },
    credentials:'include',
    body: JSON.stringify(payload)
}).then(result => {
    return result.json();      // res.status is passed from nodejs to confirm that
                            // if there are corret credentials 
})
    .catch(error => {
        console.log("This is error");
        return error;
    });
    export const checklogin=()=>
fetch(`${api}/users/checklogin`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        //body: JSON.stringify()
    }).then(bal => {
        return bal.json();      // res.status is passed from nodejs to confirm that
    }).catch(error => {
        console.log("This is  fucking error");
        return error;
    });


    export const doSignup = (payload) =>    //payload contains the credentials of login.
    fetch(`${api}/users/signup`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(result => {
        return result.json();      // res.status is passed from nodejs to confirm that
                                // if there are corret credentials 
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });


        export const doPost = (payload) =>    //payload contains the credentials of login.
    fetch(`${api}/post/project_post`, {     // ${api}/users/doLogin` this contains the address of the backend server.
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'   //json data is passed from react to node.
        },
        credentials:'include',
        body: JSON.stringify(payload)
    }).then(result => {
        return result.json();      // res.status is passed from nodejs to confirm that
                                // if there are corret credentials 
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

        export const doUpdateProfile = (payload) =>    //payload contains the credentials of login.
        fetch(`${api}/profile/updateprofile`, {     // ${api}/users/doLogin` this contains the address of the backend server.
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'   //json data is passed from react to node.
            },
            credentials:'include',
            body: JSON.stringify(payload)
        }).then(result => {
            return result.json();      // res.status is passed from nodejs to confirm that
                                    // if there are corret credentials 
        })
            .catch(error => {
                console.log("This is error");
                return error;
            });
