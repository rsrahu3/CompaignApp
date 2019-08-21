export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch({'type':"Show_Hide_Loader",'payload':{show:true}});
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch({'type':"Show_Hide_Loader",'payload':{show:false}});
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch({'type':"Initialize_Store",'payload':{data:items}}))
            .catch(() => { throw Error(response.statusText);});
    };
}



