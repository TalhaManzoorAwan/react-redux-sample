import React, { Component } from 'react';
 import {connect} from 'react-redux'
import './App.css';

import MainPage from './components/Main-page/MainPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage username = {this.props.user.name}/>
  
      </div>

    );
  }
}

// export default App;


const mapStateToProps =  (state) =>{



  return{

    user : state.user,
    math : state.math
  }

}


const mapDispatchToProps =  (dispatch) =>{

   return{
  setName : (name)=>{
    dispatch({
         type: "SET_NAME",
         payload :  name
    });
  }

   }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);