import React from 'react';
import utils from '../utils';
import {connect} from 'react-redux';

let TableComponent = ({data})=>{
  let CurrentDate = new Date().toISOString().split('T')[0];
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
                {data && data.map((item,index)=>{
                      return ( <tr key={item.id}>
                                  <td>{(item.userId)?item.name:'Unknown user'}</td>
                                  <td>{item.startDate}</td>
                                  <td>{item.endDate}</td>
                                  <td>{
                                    ((new Date(CurrentDate) >= new Date(utils.convertDateFormat(item.startDate))) && 
                                    (new Date(CurrentDate)<= new Date(utils.convertDateFormat(item.endDate))))?(<div><div className="circle_green"></div><div>Active</div></div>):(<div><div className="circle_red"></div><div>Inactive</div></div>)
                                    
                                    }
                                  </td>
                                  <td>${item.Budget}</td>
                                </tr>)
                                }
                              )
                  }
              </tbody>
            </table>
          </div>)
}

const mapStateToProps = state =>{
  return {
    data:state.tableData
  };
}

export default connect(mapStateToProps)(TableComponent);