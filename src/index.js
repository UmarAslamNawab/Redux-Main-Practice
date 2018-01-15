// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './reducers/index'
// import App from './myPractice/App';
// import store from './myPractice/reducers/index';


// const render = () => ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );

// render();
// store.subscribe(render)





//Redux Practice 1st Ex:


// import { createStore } from 'redux';

// const reducer=(state,action)=>{
//     switch(action.type){
//         case "ADD":
//         return state=state+action.payload
//         // break;
//         case "SUBSTRACT":
//         return state=state-action.payload
//         // break;
//         default:
//         return state;
//     }
//     // return state;
// }

// const store=createStore(reducer,1); //the "(reducer)" gives us a new state which we store in a variable called "store" and (1) in the (perameter) means the initial state

// store.subscribe(()=>{
//     console.log("Store Updated!...", store.getState())
// })


// store.dispatch({
//     type:"ADD",
//     payload:100
// });

// store.dispatch({
//     type:"ADD",
//     payload:22,
// })


// store.dispatch({
//     type:"SUBSTRACT",
//     payload:80,
// })





//2nd

// import { createStore } from 'redux';

// const initialState={
//     result:1,
//     lastValues:[]
// };

// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case "ADD":
//                  //state.result=state.result+action.payload //1 way
//                  //state.result+=action.payload //2nd way
//                  state={
//                      ...state,
//                      result: state.result + action.payload,
//                      lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]
//                  } //3rd way
//                 //state.lastValues.push(action.payload)  //wrong way to push values in lastValue[]j
//                  break;
//         case "SUBSTRACT":
//                  //state.result=state.result-action.payload //1 way
//                 //state.result-=action.payload //2nd way
//               state={
//                     ...state,
//                     result: state.result - action.payload,
//                     lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]

//                 }   //3rd way
//                 //state.lastValues.push(action.payload) //wrong way to push values in lastValue[]

//         break;
//         // default:
//         // return state;
//     }
//     return state;
// }

// const store=createStore(reducer); //the "(reducer)" gives us a new state which we store in a variable called "store" and (1) in the (perameter) means the initial state

// store.subscribe(()=>{
//     console.log("Store Updated!...",store.getState())
// })

// store.dispatch({
//     type:"ADD",
//     payload:100
// });

// store.dispatch({
//     type:"ADD",
//     payload:22,
// })


// store.dispatch({
//     type:"SUBSTRACT",
//     payload:80,
// })


//3rd example



// import { createStore ,combineReducers } from 'redux';

// // const initialState={
// //     result:1,
// //     lastValues:[]
// // };

// const mathReducer=(state={
//         result:1,
//         lastValues:[]
//         },action)=>{
//     switch(action.type){
//         case "ADD":
//                  //state.result=state.result+action.payload //1 way
//                  //state.result+=action.payload //2nd way
//                  state={
//                      ...state,
//                      result: state.result + action.payload,
//                      lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]
//                  } //3rd way
//                 //state.lastValues.push(action.payload)  //wrong way to push values in lastValue[]j
//                  break;
//         case "SUBSTRACT":
//                  //state.result=state.result-action.payload //1 way
//                 //state.result-=action.payload //2nd way
//               state={
//                     ...state,
//                     result: state.result - action.payload,
//                     lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]

//                 }   //3rd way
//                 //state.lastValues.push(action.payload) //wrong way to push values in lastValue[]

//         break;
//         // default:
//         // return state;
//     }
//     return state;
// }


// const userReducer=(state={
//                   name:"Umar Aslam Nawab",
//                   Age: 17
//                   },action)=>{
//     switch(action.type){
//         case "Set_Name":
         
//            state={
//                ...state,
//                name:action.payload
//            }
              
//                  break;
//         case "Set_Age":
 
//         state={
//             ...state,
//             age:action.payload
//         }
          
                
//                  break;
        
//     }
//     return state;
// }





// const store=createStore(combineReducers({mathReducer,userReducer})); //the "(reducer)" gives us a new state which we store in a variable called "store" and (1) in the (perameter) means the initial state

// store.subscribe(()=>{
//     console.log("Store Updated!...",store.getState())
// })

// store.dispatch({
//     type:"ADD",
//     payload:100
// });

// store.dispatch({
//     type:"ADD",
//     payload:22,
// })


// store.dispatch({
//     type:"SUBSTRACT",
//     payload:80,
// })




//4th Example Handling MiddleWare


// import { createStore ,combineReducers, applyMiddleware } from 'redux';
// import logger from "redux-logger"
// // const initialState={
// //     result:1,
// //     lastValues:[]
// // };

// const mathReducer=(state={
//         result:1,
//         lastValues:[]
//         },action)=>{
//     switch(action.type){
//         case "ADD":
//                  //state.result=state.result+action.payload //1 way
//                  //state.result+=action.payload //2nd way
//                  state={
//                      ...state,
//                      result: state.result + action.payload,
//                      lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]
//                  } //3rd way
//                 //state.lastValues.push(action.payload)  //wrong way to push values in lastValue[]j
//                  break;
//         case "SUBSTRACT":
//                  //state.result=state.result-action.payload //1 way
//                 //state.result-=action.payload //2nd way
//               state={
//                     ...state,
//                     result: state.result - action.payload,
//                     lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]

//                 }   //3rd way
//                 //state.lastValues.push(action.payload) //wrong way to push values in lastValue[]

//         break;
//         // default:
//         // return state;
//     }
//     return state;
// }


// const userReducer=(state={
//                   name:"Umar Aslam Nawab",
//                   Age: 17
//                   },action)=>{
//     switch(action.type){
//         case "Set_Name":
         
//            state={
//                ...state,
//                name:action.payload
//            }
              
//                  break;
//         case "Set_Age":
 
//         state={
//             ...state,
//             age:action.payload
//         }
          
                
//                  break;
        
//     }
//     return state;
// }

 

// //this is a MiddleWare
// const myLogger=(store) => (next) => (action) =>{
//     console.log("Middleware : ", action);
//     // next(action) //if you console this then no "Store Update" will provided
//     next(action)
// }

// const store=createStore(
//     combineReducers({mathReducer,userReducer}) ,
//      {} , 
//      applyMiddleware(myLogger ,logger)  //this logger is imported from redux-logger 
//     ); 

// store.subscribe(()=>{
//     console.log("Store Updated!...",store.getState())
// })

// store.dispatch({
//     type:"ADD",
//     payload:100
// });

// // store.dispatch({
// //     type:"ADD",
// //     payload:22,
// // })


// store.dispatch({
//     type:"SUBSTRACT",
//     payload:80,
// })



//5th example React and Redux


import {Provider} from 'react-redux'
import { render } from "react-dom"
import ReactDOM from 'react-dom';
import React from 'react'
import App from './React-Redux/container/App'
import store from './React-Redux/store'



 








render( 
<Provider store={store}>
<App /> 
</Provider> //the store in '{store}' is const which we implementd earlier const store=.....
,document.getElementById("root"));
//  render();
//  store.subscribe(render)

