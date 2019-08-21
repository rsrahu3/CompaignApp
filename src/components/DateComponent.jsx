import React from 'react';
import {connect} from 'react-redux';

const DateComponent =  ({startDate,dateObj,Focus,OnChange})=> {
    return (
            <div className="col-md-4">
                <input placeholder={dateObj.name} type="text" onChange={(e)=>{
                    OnChange(e,dateObj.name,startDate);
                    }
                } onFocus={(e)=>Focus(e)}  id="date"/> 
            </div>);
}

const mapStateToProps = (state) => {
    return {
        startDate:state.startDate
    };
};

const mapDispatchToProps = dispatch =>{
  return {
    Focus : (e)=>  e.target.type="date",
    OnChange:(e,name,startDate)=>{
                                    if(name == 'Start-Date'){
                                        dispatch({ type: 'Filter_Data_By_Start_Date' ,payload:{startDate:e.target.value}});
                                    }
                                    else{
                                        if(new Date(startDate)>new Date(e.target.value)){
                                            e.target.value = null;
                                            alert("Please Select Valid End Date");
                                        }
                                    else
                                        dispatch({ type: 'Filter_Data_By_End_Date' ,payload:{endDate:e.target.value}});
                                    }
                                }

         };
    }

export default connect(mapStateToProps,mapDispatchToProps)(DateComponent)
