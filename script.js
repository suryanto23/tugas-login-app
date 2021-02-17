


const register = async () => {

    let emailInput = document.querySelector("#emailForm").value
    let passwordInput = document.querySelector("#passwordForm").value
    let nameInput = document.querySelector("#nameForm").value


    // console.log(emailInput);
    // console.log(passwordInput);
    // console.log(nameInput);

    let data = {
        email : emailInput,
        password : passwordInput,
        name : nameInput, 
    }

    let dataJSON = JSON.stringify(data)


    const url = "https://6023a8436bf3e6001766b514.mockapi.io/login-app"
    const option = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : dataJSON
    }

    let API = await fetch (url , option)













};