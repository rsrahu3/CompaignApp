import React from 'react';
import utils from '../utils';
import {connect} from 'react-redux';
class TableComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
       let CurrentDate = new Date().toISOString().split('T')[0];
        console.log("CurrentDate",CurrentDate)
        return (<div>
        <table className="table">
    <thead>
     <tr>
        <th>Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Active</th>
        <th>Budget</th>
      </tr>
    </thead>
    <tbody>

     {this.props.data && this.props.data.map((item,index)=>{
          return ( <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.startDate}</td>
       <td>{item.endDate}</td>
       <td>{
         ((new Date(CurrentDate) >= new Date(utils.convertDateFormat(item.startDate))) && 
         (new Date(CurrentDate)<= new Date(utils.convertDateFormat(item.endDate))))?(<div><div className="circle_green"></div><div>Active</div></div>):(<div><div className="circle_red"></div><div>Inactive</div></div>)
        
         }</td>
       <td>${item.Budget}</td>
      </tr>)
      })}
      
    </tbody>
  </table>
        </div>);
    }
}

const mapStateToProps = state =>{
  return {
    data:state.tableData
  };
}



export default connect(mapStateToProps)(TableComponent);