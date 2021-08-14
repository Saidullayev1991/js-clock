let deg = 6;
const hr=document.querySelector('#hr');
const mn=document.querySelector('#mn');
const sc=document.querySelector('#sc');

setInterval(() =>{

    let date = new Date();
    let hh = date.getHours()*30;
    let mm = date.getMinutes()*deg;
    let ss = date.getSeconds()*deg;
    
    hr.style.transform=`rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform=`rotateZ(${(mm)}deg)`;
    sc.style.transform=`rotateZ(${(ss)}deg)`;
})

const dh=document.querySelector('#dh');
const dm=document.querySelector('#dm');
const ds=document.querySelector('#ds');
const wdn=document.querySelector('#wdn');
const dn=document.querySelector('#dn')
const monthName=document.querySelector('#monthName')

setInterval(()=>{
    let day = new Date();
    let hours=day.getHours();
    let minutes=day.getMinutes();
    let seconds=day.getSeconds();
    let WeekDay=getWeekDay(day);
    let dayNumber=day.getDate();
    let MonthName=getMonthName(day);
    if(hours<10){
        hours = '0'+hours;
    }
    if (minutes<10){
        minutes='0'+minutes;
    }
    if (seconds<10){
        seconds='0'+seconds;
    }
 
    dh.textContent=hours;
    dm.textContent=minutes;
    ds.textContent=seconds;
    wdn.textContent=WeekDay;
    dn.textContent=dayNumber;
    monthName.textContent=MonthName;
})
console.log(day);
function getWeekDay(day) {
    let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return days[day.getDay()];
  };

function getMonthName(day) {
    let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    return month[day.getMonth()];
  };
