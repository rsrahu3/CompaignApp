import React from 'react';
import {connect} from 'react-redux';

 const SearchComponent = (props)=> {
      return (<div>
                  <div className="input-group add-on">
                  <input className="form-control" placeholder="Search by name" name="srch-term" id="srch-term" type="text" 
                  onChange={(e)=>{
                      props.filterByName(e.target.value);

                  }}/>
                  <div className="input-group-btn">
                  <button id="searchButton" className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                  </div>
                  </div>
              </div>)
}

const mapDispatchToProps = dispatch =>{
  return {
    filterByName: (data) => dispatch({ type: 'Filter_Data_By_Name' ,payload:{filterText:data}})
  };
}

export default connect(null,mapDispatchToProps)(SearchComponent);