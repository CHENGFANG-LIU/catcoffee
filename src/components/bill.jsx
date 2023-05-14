import React, {Component}from "react";
import axios from "axios";
class bill extends Component {
   state = {
      shopplist:[
      {date:"date1",bill:"bill1"},
      {date:"date3",bill:"bill3"},
      {date:"date2",bill:"bill2"}
   ]}
   
   async componentDidMount() {
    var url = `http://localhost:8000/money/${this.props.match.params.id}`;
    var result = await axios.get(url);
    this.setState({shopplist:result.data});
}
    
    
    render(){
         

       return (
         <div>
         <table border="4mm ridge rgba(211, 220, 50, .6);"> 
            <tr>
               <td>
                  消費日期
               </td>
               <td>
                  消費金額
               </td>
                     
            </tr>
            {
               this.state.shopplist.map((item)=>(
                 
                  
                  <tr>
                     <td>
                        {item.date}
                     </td>
                     <td>
                        {item.bill}
                     </td>
                  </tr>
               
      
      ))

         }  
         </table>
         </div>
         
         
       );
    }
 }
  
 export default bill;