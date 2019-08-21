import React from 'react';
import ReactDOM  from 'react-dom';
import App from './components/App.jsx'
import {Provider,connect} from 'react-redux';
import initializeStore from './configureStore.js'
let obj = window;
window.startApp = (data)=>{
    if(data){
        if(!obj.userData){
            obj.userData = [...data];
        }
        else {
            obj.userData = [...obj.userData,...data];
        }
        data = obj.userData;
    }
    let initialData = data?{"data":data,"tableData":data,"staticData":true}:null;
    let store = initializeStore(initialData);
ReactDOM.render(<Provider store={store}><App data={data}/></Provider>, document.getElementById('root'));
}
