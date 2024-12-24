const getdata = new Promise((resolve, reject) => {

    const num = Math.random()*10; 
    console.log(num)
    if(num < 5){
        resolve(654993)
    }
    else{
        reject('No data available')  // One kind of error which find out by catch
    }
})

// console.log(getdata )   //Promise { 654993 }
getdata
    .then(data => console.log(data))      // resolve data come then
    .catch(err => console.error('Err : ',err))  // reject data come catch