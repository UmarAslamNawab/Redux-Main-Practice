export function addNumber(number){          // this '(number)' is coming from mathReducer
    return{     
        type:"ADD",
        payload:number
    }
}

export function subtractNumber(number){   // this '(number)' is coming from mathReducer
    return{
        type:"SUBTRACT",
        payload:number
    }
}