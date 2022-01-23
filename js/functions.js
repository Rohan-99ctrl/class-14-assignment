/**
 * data send to LS
 * @param {*} key 
 * @param {*} arrData 
 */


 function dataSent(key, arrData){

    let data = JSON.stringify(arrData);
    localStorage.setItem(key, data);

}


/**
 * data get from LS
 * @param {*} key 
 * @returns 
 */


function dataGet(key){

    let get = localStorage.getItem(key);

    if(get){
        return JSON.parse(get);
    }else{
        return false;
    }

}







