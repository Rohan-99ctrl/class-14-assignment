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
    return JSON.parse(get);

}


// Team member with LS

/**
 * sent data
 * @param {*} keyOne 
 * @param {*} data 
 */

function teamDataSent(keyOne, data){

    let teamDataConvert = JSON.stringify(data);
    localStorage.setItem(keyOne, teamDataConvert);

}


/**
 * team data get
 * @param {*} keyTwo 
 * @returns 
 */


function teamDataGet(keyTwo){

    let teamDataGet = localStorage.getItem(keyTwo);
    return JSON.parse(teamDataGet);

}




