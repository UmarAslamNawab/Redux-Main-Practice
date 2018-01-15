
const mathReducer=(state={
    result:1,
    lastValues:[]
    },action)=>{
switch(action.type){
    case "ADD":
             //state.result=state.result+action.payload //1 way
             //state.result+=action.payload //2nd way
             state={
                 ...state,
                 result: state.result + action.payload,
                 lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]
             } //3rd way
            //state.lastValues.push(action.payload)  //wrong way to push values in lastValue[]
             break;
    case "SUBSTRACT":
             //state.result=state.result-action.payload //1 way
            //state.result-=action.payload //2nd way
          state={
                ...state,
                result: state.result - action.payload,
                lastValues:[...state.lastValues,action.payload] //right way to push values in lastValue[]

            }   //3rd way
            //state.lastValues.push(action.payload) //wrong way to push values in lastValue[]

    break;
    // default:
    // return state;
}
return state;
}

export default mathReducer