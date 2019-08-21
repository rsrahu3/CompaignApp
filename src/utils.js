let utils = {
    'convertDateFormat':  (date)=>{
        let dateArr = date.split("/");
        return dateArr[2]+"-"+dateArr[0]+"-"+dateArr[1];
    }
}

export default utils;

