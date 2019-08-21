import React from 'react';
import {connect} from 'react-redux';
class DateComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div className="col-md-4">
       <input placeholder={this.props.dateObj.name} type="text" onChange={(e)=>{
           if(this.props.dateObj.name == 'Start-Date'){
               this.props.filterByStartDate(e.target.value);
           }
           else{
               if(new Date(this.props.startDate)>new Date(e.target.value)){
                   e.target.value = null;
                   alert("Please Select Valid End Date");
               }
               else
               this.props.filterByEndDate(e.target.value);
           }
       }} onFocus={(e)=>{
           e.target.type="date";
       }}  id="date"/> 
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        startDate:state.startDate
        
    };
};

const mapDispatchToProps = dispatch =>{
  return {
    filterByStartDate: (date) => dispatch({ type: 'Filter_Data_By_Start_Date' ,payload:{startDate:date}}),
    filterByEndDate: (date) => dispatch({ type: 'Filter_Data_By_End_Date' ,payload:{endDate:date}}),
 
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(DateComponent)
