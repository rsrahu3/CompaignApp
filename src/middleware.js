export function itemsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch({'type':"Initialize_Store",'payload':{data:items}}))
            .catch(() => { throw Error(response.statusText);});
    };
}



