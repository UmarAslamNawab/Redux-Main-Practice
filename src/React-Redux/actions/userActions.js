export function setName(name){
    
    // return dispatch =>{    //this is a asynchronous function means it displays the name after a specific functon is called(e.g setTimeout) after 2 seconds
    //   setTimeout(()=>{
    //    dispatch({  
    //     type:"SET_NAME",
    //     payload:name
    //    })
    //   },2000)
    // }

    //now understanding promises
    // resolve and reject are the two functions() which passes here as a argument      
    return{
        type:"SET_NAME",
        payload: new Promise( (resolve,reject) =>{
         setTimeout(()=>{
          resolve(name)   //so now resolve() has its value '(name)'  this name is coming from userReducer
         },2000)
        })
    }




}

export function setAge(age){       // this '(age)' is coming from userReducer
    return{
        type:"SET_AGE",
        payload:age
    }
}