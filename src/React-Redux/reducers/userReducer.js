
const userReducer=(state={
    name:"Umar Aslam Nawab",
    Age: 17
    },action)=>{
switch(action.type){
// case "SET_NAME": //we execute this before the promise npm but it a correct way without error just to show "SET_NAME_FULFIILED"

case "SET_NAME_FULFILLED" :  // we execute this after the promise npm just to show "SET_NAME_FULFIILED"
state={
 ...state,
 name:action.payload
}

//    break;  //dont use break; state if you this statement then the name is not going to changed
case "SET_AGE":

state={
...state,
// age:action.payload
}

  
//    break;   //dont use break; state if you this statement then the name is not going to be changed

}
return state;
}

export default userReducer