


const signin =  () => {

    let emailInput = document.querySelector("#emailForm").value
    let passwordInput = document.querySelector("#passwordForm").value


    const url = "https://6023a8436bf3e6001766b514.mockapi.io/login-app"

    fetch(url)

    .then((response) => response.json())
    .then((data) => { 
        console.log(data)
        
        // data.forEach((items) => {

        //     console.log(items);
            
        //     if (emailInput == items.email ){
        //         alert ("Berhasil")
        //     } else {
        //         console.log("gagal");
        //     }
        
        // });

        let cari = data.filter()

       



     })
    .catch(error => alert("Terjadi Kesalahan"))

}