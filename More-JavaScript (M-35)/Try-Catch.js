function checkage() {
    const ageField = document.getElementById('age')
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')

    try {
        // console.log(Bbaria);
        const age = parseInt(ageText)
        if (isNaN(age)) {
            // console.log('Are Not found', age, ageText)
            throw "Please enter a number"
        }
        else if (age < 18) {
            throw "Little person not allowed"
        }
        errorTag.innerHTML = ''
    }
    catch (err) {   //always handle error
        console.log('ERORR :', err)
        errorTag.innerHTML = 'Somthing Wrong, ' + err;
    }
    finally {     // always execute
        console.log('All done inside try catch')
    }
    console.log(111111);
}
