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

        let ageMilliseconds = Math.floor(Math.abs(todaytime.getTime() - birthTime.getTime()));
        let ageSeconds =  Math.floor(Math.abs(ageMilliseconds/1000));
        let ageMinutes =  Math.floor(Math.abs(ageSeconds/60));
        let ageHours =  Math.floor(Math.abs(ageMinutes/60));
        let ageDays =  Math.floor(Math.abs(ageHours/24));
        let ageWeeks =  Math.floor(Math.abs(ageDays/7));
        let ageYears =  Math.floor(Math.abs((ageDays/30.42/12)));
        let ageMonths =  Math.floor(Math.abs((ageDays/30.42) - (ageYears*12)));


        console.log(ageMonths);


        calculateAge.value = `${ageYears} Years & ${ageMonths + 1} Months`;
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
    calculateHours.value = '';
    calculateMinutes.value = '';
    calculateSeconds.value = ``;
    calculateMilliseconds.value = ``;

}




// Product with LS


const addProduct = document.querySelector('#addProduct');
const displayForm = document.querySelector('.showCard');
const closeCard = document.querySelector('#closeCard');

const pdName = document.querySelector('#pdName');
const pdDetails = document.querySelector('#pdDetails');
const pdRPrice = document.querySelector('#pdRPrice');
const pdSPrice = document.querySelector('#pdSPrice');
const createPd = document.querySelector('#createPd');

const pList = document.querySelector('#pList');

// const productData = [
//     {
//         pImage      : './img/product.jpg',
//         pNam        : 'Bags',
//         pDetails    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, obcaecati!',
//         pPrice      : 300,
//         sPrice      : 290,    
//     },

//     {
//         pImage      : './img/product.jpg',
//         pNam        : 'Bags',
//         pDetails    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, obcaecati!',
//         pPrice      : 200,
//         sPrice      : 190,    
//     },

//     {
//         pImage      : './img/product.jpg',
//         pNam        : 'Bags',
//         pDetails    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, obcaecati!',
//         pPrice      : 400,
//         sPrice      : 390,    
//     },

//     {
//         pImage      : './img/product.jpg',
//         pNam        : 'Bags',
//         pDetails    : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, obcaecati!',
//         pPrice      : 100,
//         sPrice      : 90,    
//     }
// ];


// dataSent('products', productData);


let productShow = dataGet('products');

productShow.map((show) => {

    pList.innerHTML += `
    
        <div class="col-md-3 text-center productWrapper overflow-hidden">
            <img src="${show.pImage}" alt="product">
            <h3 class="mt-3">${show.pNam}</h3>
            <p>${show.pDetails}</p>
            <h4 class="mb-4"><span style="color: red;font-size: 20px;" id="rgPrice">$${show.pPrice}</span> <span style="color: rgb(0, 255, 0);font-size: 25px;" id="slprice">$${show.sPrice}</span></h4>
            <input type="submit" value="Add to cart" class="btn btn-danger w-50 mb-3 float-start">
            <input type="submit" value="Buy Now" class="btn btn-success w-50 float-end">
        </div>
    
    `;

});



addProduct.addEventListener('click', function(){

    displayForm.style.display = 'block';



});


closeCard.addEventListener('click', function(){

    displayForm.style.display = 'none';

});



// Team member with LS



// const teamData = [
//     {
//         nam         : 'Toha Munshi',
//         skill       : 'CEO',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/boy2.png'
//     },

//     {
//         nam         : 'SM Abdullah',
//         skill       : 'SOFTWARE ENGINEER',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/boy3.png'
//     },

//     {
//         nam         : 'Mitu Farzana',
//         skill       : 'CONTENT WRITER',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/girl.png'
//     },

//     {
//         nam         : 'Mostofa Kamal',
//         skill       : 'VIDEO EDITOR',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/boy3.png'
//     },

//     {
//         nam         : 'BM Saifullah',
//         skill       : 'MARKETING DIRECTOR',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/boy2.png'
//     },

//     {
//         nam         : 'Sheikh Ataur',
//         skill       : 'GRAPHICS DESIGNER',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/boy3.png'
//     },

//     {
//         nam         : 'Tofayel Sheikh',
//         skill       : 'VIDEO EDITOR',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/boy2.png'
//     },

//     {
//         nam         : 'Farhan Sheikh',
//         skill       : 'WEB DEVELOPER',
//         details     : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam.',
//         photo       : './img/boy3.png'
//     }
// ];

// teamDataSent('teamData', teamData);

const uploadTeam = document.querySelector('#uploadTeam');

let getValFromLS = teamDataGet('teamData');


getValFromLS.map((showVal) => {

    uploadTeam.innerHTML += `
    
    <div class="col-md-3 teamWrapper">
        <img class="mb-3" src="./img/boy3.png" alt="profile">
        <h5 class="mb-2">ROHAN MOSTOFA</h5>
        <h6 class="mb-2">MARKETING DIRECTOR</h6>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, quisquam?</p>
        <ul class="socialLiinks">
            <li>
                <a href="#"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>
        <button class="btn btn-danger w-100">READ MORE</button>
    </div>
    
    `;

});





