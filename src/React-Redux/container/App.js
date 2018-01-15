import React,{ Component } from 'react' 
import { Main } from '../Main'
import { User } from '../User'
import { connect } from 'react-redux'
import { setName } from '../actions/userActions';

class App extends Component{
   constructor(){
       super();

       this.changeUserName=this.changeUserName.bind(this)
   }


changeUserName(newName){

}


    render(){
        return(
            <div className="container">
            <Main changeUserName={()=>this.props.setName("Umar Uni Nawab")}/> {/*this setName is coming from below mapDispatchToProps*/}
            <User username={this.props.user.name} />  {/*this .user is coming from mapStateToProps*/}
            </div>
        )
    }
} 

const mapStateToProps=(state)=>{         //mapStateToProps connects All the 'State(property)' in our react-redux (project) not npm of react-redux
    return {
        user:state.user,    // .user and .math is coming from store.js "combineReducers"
        math:state.math
    };
};

const mapDispatchToProps=(dispatch)=>{    //mapDispatchToProps connects All the actions in the react-redux (project) not npm react-redux
    return{
        // setName: (name) => {
        //     dispatch({
        //     type: "SET_NAME",
        //     payload: name
        //     }) }               
        
        
        //after creating the folder for all separate action,reducers and store
         setName:(name)=>{
             dispatch(setName(name))
         }    
    }
    }





export default connect(mapStateToProps,mapDispatchToProps, ) (App);