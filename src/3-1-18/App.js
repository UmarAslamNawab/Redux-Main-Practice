import React,{ Component } from 'react'
import store from './reducers/index';
import './App.css'
import Button from'../React-Bootstrap-with-Material-Design-4.1.0/src/components/Button'

class App extends Component{
    render(){
        return(
            <div className="App">
            <h1>{store.getState()}</h1>
            <Button outline onClick={()=>store.dispatch({ type : 'Increment'})}>Increment</Button>
            <button onClick={()=>store.dispatch({ type : 'Decrement'})}>Decrement</button>                        
                    
             </div>
        )
    }
}

export default App;
