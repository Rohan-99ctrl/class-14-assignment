// age calculator

const todayDate = document.querySelector('#todayDate');

const dateOfBirth = document.querySelector('#date2');

const calculate = document.querySelector('#calculate');
const reset = document.querySelector('#reset');

const alertMsg3 = document.querySelector('#alertMsg3');

const calculateAge = document.querySelector('#result1');
const calculateWeeks = document.querySelector('#result7');
const calculateDays = document.querySelector('#result2');
const calculateHours = document.querySelector('#result3');
const calculateMinutes = document.querySelector('#result4');
const calculateSeconds = document.querySelector('#result5');
const calculateMilliseconds = document.querySelector('#result6');



todayDate.onkeyup = () => {
    if(todayDate.value == ''){
        todayDate.style.border = '1px solid red';
    }else{
        todayDate.style.border = '1px solid rgb(0, 255, 0)';
    }
}




dateOfBirth.onkeyup = () => {
    if(dateOfBirth.value == ''){
        dateOfBirth.style.border = '1px solid red';
    }else{
        dateOfBirth.style.border = '1px solid rgb(0, 255, 0)';
    }
}




let date = new Date();

todayDate.value = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;

calculate.onclick = () => {



    if(dateOfBirth.value == ''){

        alertMsg3.innerHTML = `<p style="transition: all 0.7s;" class="alert alert-danger mt-5 text-center">All fields are required!!!</p>`;

        
        setTimeout(function(){

            alertMsg3.innerHTML = '';

        }, 3000);

    }else{


        
        let todaytime = new Date();
        let birthTime = new Date(dateOfBirth.value);
        let ageMilliseconds = Math.floor(todaytime.getTime() - birthTime.getTime());


        // let ageSeconds = Math.floor(ageMilliseconds/1000);
        // let ageMinutes = Math.floor(ageSeconds/60);
        // let ageHours = Math.floor(ageMinutes/60);
        // let ageDays = Math.floor(ageHours/24);
        // let total_months = Math.floor(ageDays/30);
        // let ageYears = Math.floor(total_months/12);
    
        // let ageMonths = total_months - (ageYears*12); 
        // let days = total_days - (ageYears*12*30) - (ageMonths*30);




        let ageSeconds =  Math.floor(ageMilliseconds/1000);
        let ageMinutes =  Math.floor(ageSeconds/60);
        let ageHours =  Math.floor(ageMinutes/60);
        let ageDays =  Math.floor(ageHours/24);
        let ageWeeks =  Math.floor(ageDays/7);
        let ageYears =  Math.floor(ageDays/30.417/12);
        let ageMonths =  Math.floor((ageDays/30.417) - (ageYears*12));

        let dayCal = Math.floor(ageDays - (ageYears*12*30.417) - (ageMonths*30.417));

        console.log(ageMonths);


        calculateAge.value = `${ageYears} Years & ${ageMonths} Months, ${dayCal} Days`;
        calculateWeeks.value = `${ageWeeks} Weeks`;
        calculateDays.value = `${ageDays} Days`;
        calculateHours.value = `${ageHours} Hours`;
        calculateMinutes.value = `${ageMinutes} Minutes`;
        calculateSeconds.value = `${ageSeconds}  Seconds`;
        calculateMilliseconds.value = `${ageMilliseconds}  Milliseconds`;

    }

}



reset.onclick = () => {

    dateOfBirth.value = '';

    calculateAge.value = '';
    calculateDays.value = '';
    calculateWeeks.value = '';
    calculateHours.value = '';
    calculateMinutes.value = '';
    calculateSeconds.value = ``;
    calculateMilliseconds.value = ``;

}




// Product with LS

const productInput = document.querySelector('#productInput');
const createPd = document.querySelector('#createPd');
const pList = document.querySelector('#pList');


productInput.addEventListener( 'submit', function(e){

    e.preventDefault();

    let pdName = this.querySelector('input[name="pdName"]');
    let pdDetails = this.querySelector('#pdDetails');
    let pdRprice = this.querySelector('input[name="pdRPrice"]');
    let pdSprice = this.querySelector('input[name="pdSPrice"]');
    let pdPhoto = this.querySelector('input[name="pdPhoto"]');

    let productArray;

    if( dataGet('createProducts') ){
        productArray = dataGet('createProducts');
    }else{
        productArray = [];
    }

    productArray.push({
        pName       : pdName.value,
        pDetails    : pdDetails.value,
        pRprice     : pdRprice.value,
        pSprice     : pdSprice.value,
        pPhoto      : pdPhoto.value
    });

    dataSent('createProducts', productArray);

    allProducts();

    pdName.value = '';
    pdDetails.value = '';
    pdRprice.value = '';
    pdSprice.value = '';
    pdPhoto.value = '';

} );

allProducts();

function allProducts(){

    let productShow = dataGet('createProducts');

    let dataDisplay = '';

    productShow.map((show) => {

        dataDisplay += `
        
            <div class="col-md-3 text-center productWrapper overflow-hidden">
                <img src="${show.pPhoto}" alt="product">
                <h3 class="mt-3">${show.pName}</h3>
                <p>${show.pDetails}</p>
                <h4 class="mb-4"><span style="color: red;font-size: 20px;" id="rgPrice">$${show.pRprice}</span> <span style="color: rgb(0, 255, 0);font-size: 25px;" id="slprice">$${show.pSprice}</span></h4>
                <input type="submit" value="Add to cart" class="btn btn-danger w-100 mb-3">
            </div>
        
        `;

    });

    pList.innerHTML = dataDisplay;

}






// Team member with LS



const teamSubmit = document.querySelector('#teamInput');
const uploadTeam = document.querySelector('#uploadTeam');


teamSubmit.addEventListener('submit', function(e){

    e.preventDefault();

    let tName = this.querySelector('input[name="devName"]');
    let tPosition = this.querySelector('input[name="devPosition"]');
    let tDetails = this.querySelector('#devDetails');
    let tfbLink = this.querySelector('input[name="fbLink"]');
    let ttwLink = this.querySelector('input[name="twLink"]');
    let tinstaLink = this.querySelector('input[name="instaLink"]');
    let photo = this.querySelector('input[name="photo"]');

    let developers;

    if( dataGet('devsData') ){
        developers = dataGet('devsData');
    }else{
        developers = [];
    }

    developers.push({
        tName           : tName.value,
        tPosition       : tPosition.value,
        tDetails        : tDetails.value,
        tfbLink         : tfbLink.value,
        ttwLink         : ttwLink.value,
        tinstaLink      : tinstaLink.value,
        photo           : photo.value
    });

    dataSent('devsData', developers);

    allDevelopers();

    tName.value = '';
    tPosition.value = '';
    tDetails.value = '';
    tfbLink.value = '';
    ttwLink.value = '';
    tinstaLink.value = '';
    photo.value = '';

});


allDevelopers();


function allDevelopers(){

    let devsShow = dataGet('devsData');

    let teamDataDisplay = '';

    devsShow.map((showVal) => {

        teamDataDisplay += `
        
        <div class="col-md-4 teamWrapper">
            <img class="mb-3" src="${showVal.photo}" alt="profile">
            <h5 class="mb-2">${showVal.tName}</h5>
            <h6 class="mb-2">${showVal.tPosition}</h6>
            <p>${showVal.tDetails}</p>
            <ul class="socialLiinks">
                <li>
                    <a href="${showVal.tfbLink}"><i class="fab fa-facebook-square"></i></a>
                </li>
                <li>
                    <a href="${showVal.ttwLink}"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="${showVal.tinstaLink}"><i class="fab fa-instagram"></i></a>
                </li>
            </ul>
            <button class="btn btn-danger w-100">READ MORE</button>
        </div>
        
        `;

    });

    
    uploadTeam.innerHTML = teamDataDisplay;

}





