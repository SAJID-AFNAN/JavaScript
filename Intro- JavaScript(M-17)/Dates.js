const myDate = new Date()
console.log(typeof myDate);     //object

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// const myCreatedDate = new Date(2031, 6, 23)   //year, month, date
// const myCreatedDate = new Date(2031, 6, 23, 6 ,3 , 55)   //year, month, date, hour, minute, seconds
// const myCreatedDate = new Date("2024-01-03")        //yyyy-dd-mm
// const myCreatedDate = new Date("01-05-2024")        //mm-dd-yyyy
// console.log(myCreatedDate.toLocaleString());

const myTime = Date.now()
// console.log(myTime);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/ 1000));

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long"
})