import React, {Component}from "react";
import axios from "axios";
class money extends Component {
   state = {
      shopplist:[
      {date:"date1",bill:"bill1"},
      {date:"date3",bill:"bill3"},
      {date:"date2",bill:"bill2"}
   ]}
   
    async componentDidMount(){
      var result = await axios.get("http://localhost:8000/money");
      this.setState({shopplist:result.data});
   }
    
    
    render(){
         

       return (
         <table> 
          
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
      
         
         
       );
    }
 }
  
 export default money;