import e from "cors";
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios";
class Login extends Component{
  
  state={
    phone:"0911111111"
  }

  
  
  todoItemTitleChange = (e) => {
    this.state.phone = e.target.value;
    this.setState({});
  }
  
  
  handleClick = (e) =>{
    console.log(this.state.phone);
    // var phomenumber=this.state.phone.slice(-1).pop();
    // console.log(phomenumber);
    window.location=`/bill/${this.state.phone}`;
  }
  
  

  render() { 
    return (
        <div>
        <h1>查詢消費紀錄請依照下列範例格式輸入電話並送出</h1>
        <input className="form-control" type="text" 
        onChange={this.todoItemTitleChange}
        id="Name" name="Name" value={this.state.phone} />
        
        
            

        <button onClick={this.handleClick}>送出</button>        
        {/* <a href={ `/bill/${this.state.guestslist.phone}` } >編輯</a>  */}
                           
            
        
         
       </div>
    );



    }
}


  
    

 
export default Login;