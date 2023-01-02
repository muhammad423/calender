const monthEl = document.querySelector('.date h1');
const fullDateEl = document.querySelector('.date p')
const dayEl = document.querySelector('.days')

const monthsIndx = new Date();
const lastDay = new Date(new Date().getFullYear(),new Date().getMonth() + 1 ,0).getDate();
const firstDay = new Date(new Date().getFullYear(),new Date().getMonth(), 1).getDay() -1;
console.log(firstDay)
const newMonth = monthsIndx.getMonth();
const FullDate = monthsIndx.toDateString();

const months =[
    "January",
    "February",
    "March",
    "April",
    " May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]
monthEl.textContent = months[newMonth]
fullDateEl.textContent = FullDate;

let days = "";

for(let i = firstDay; i > 0; i--){
    days += `<div class="empty"></div>`
}

for(let i = 1; i <= lastDay; i++){
    if(i === new Date().getDate()){
        days +=`<div class="today">${i}</div>`
    }else{ 
        days += `<div>${i}</div>`
    }
   
}

dayEl.innerHTML = days;

