import React from 'react';
import {connect} from 'react-redux';

 const SearchComponent = ({filterByName})=> {
      return (<div>
                  <div className="input-group add-on">
                  <input className="form-control" placeholder="Search by name" name="srch-term" id="srch-term" type="text" 
                  onChange={(e)=>filterByName(e)}/>
                  <div className="input-group-btn">
                  <button id="searchButton" className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                  </div>
                  </div>
              </div>)
}

const mapDispatchToProps = dispatch =>{
  return {
    filterByName: (e)=>{
      dispatch({ type: 'Filter_Data_By_Name' ,payload:{filterText:e.target.value}})
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchComponent);