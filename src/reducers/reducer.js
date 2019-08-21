import utils from './../utils.js'
let reducer = (state={},action)=>{
    let stateObj = Object.assign({},state);
    let filteredData;
switch(action.type){
    case 'Initialize_Store':
    stateObj.data = action.payload.data;
    stateObj.tableData = action.payload.data;
    return stateObj;
    case 'Filter_Data_By_Name':
      stateObj.SerachTerm = action.payload.filterText;
      break;
    case 'Filter_Data_By_Start_Date':
      stateObj.startDate = action.payload.startDate;
      break;
    case 'Filter_Data_By_End_Date':
      stateObj.endDate = action.payload.endDate;
      break;
    case 'Show_Hide_Loader':
        stateObj.showLoader = action.payload.show;
        break;
    default:
        break;
    }
    // maintaing filter chaining 
    if(stateObj.startDate){
         filteredData = stateObj.data.filter((item)=>{
            return new Date(utils.convertDateFormat(item.startDate))>new Date(stateObj.startDate);;
        });
    }
    if(stateObj.endDate){
        if(!filteredData){
            filteredData = stateObj.data;
        }
         filteredData = filteredData.filter((item)=>{
            return new Date(utils.convertDateFormat(item.endDate))<new Date(stateObj.endDate);
        });
    }

    if(stateObj.SerachTerm){
         if(!filteredData){
            filteredData = stateObj.data;
        }
         filteredData = filteredData.filter((item)=>{
            return (item.name.toLowerCase().includes(stateObj.SerachTerm.toLowerCase()));
        });
    }

    stateObj.tableData = filteredData?filteredData:stateObj.data;
    return stateObj;

}

export default reducer;