const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const residence = document.getElementById("residence");
const gpsAddress = document.getElementById("gps_address");
const occupation = document.getElementById("occupation");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirm_password");

const confirmRegisteration = document.getElementById("confirm_registeration");

const emailError = document.getElementById("email_error");
// const passwordError = document.getElementById("password_error");

const submitBtn = document.querySelector(".btn");

const spinner = document.querySelector('.spinner');

firstName.addEventListener('input', () => {
    confirmRegisteration.textContent='';
    confirmRegisteration.style.display='none';
})
lastName.addEventListener('input', () => {
    confirmRegisteration.textContent='';
    confirmRegisteration.style.display='none';
})
email.addEventListener('input', () => {
    emailError.textContent='';
    confirmRegisteration.textContent='';
    confirmRegisteration.style.display='none';
})
phone.addEventListener('input', () => {
    confirmRegisteration.textContent='';
    confirmRegisteration.style.display='none';
})
residence.addEventListener('input', () => {
    confirmRegisteration.textContent='';
    confirmRegisteration.style.display='none';
})
gpsAddress.addEventListener('input', () => {
    confirmRegisteration.textContent='';
    confirmRegisteration.style.display='none';
})
occupation.addEventListener('input', () => {
    confirmRegisteration.textContent='';
    confirmRegisteration.style.display='none';
})

// password.addEventListener('input', () => {
//     passwordError.textContent='';
    // confirmRegisteration.textContent='';
    // confirmRegisteration.style.display='none';
// })

// confirmPassword.addEventListener('input', () => {
//     passwordError.textContent='';
//     confirmRegisteration.textContent='';
    // confirmRegisteration.style.display='none';
// })

document.querySelector('.register-form').addEventListener('submit', function(e) {
    e.preventDefault()

    // if(password.value !== confirmPassword.value){
    //     passwordError.textContent='Passwords do not match';
    //     return;
    // }

    const userData={
        first_name: firstName.value.charAt(0).toUpperCase() + firstName.value.slice(1).toLowerCase(),
        last_name: lastName.value.charAt(0).toUpperCase() + lastName.value.slice(1).toLowerCase(),
        email: email.value,
        phone: phone.value,
        residence: residence.value,
        gps_address: gpsAddress.value,
        occupation: occupation.value.charAt(0).toUpperCase() + occupation.value.slice(1).toLowerCase(),
        // password: 'ILoveDjango',
        };

   registerMember(userData);

   spinner.style.display='block';
   submitBtn.disabled=true;
   if(submitBtn.disabled===true){
      submitBtn.style.opacity='50%';
   }
})

function registerMember(userData){
    fetch('https://chc-ridge-obuasi-back.onrender.com/core/members/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if(!response.ok){
            return response.json().then(error =>{
                if(error.email){
                    emailError.textContent=error.email;
                    window.location.href="#email_error";
                }
                // if(error.password){
                //   passwordError.textContent=error.password;
                //   window.location.href="#password_error";
                // }
                spinner.style.display='none';
                submitBtn.disabled=false;
                if(submitBtn.disabled===false){
                    submitBtn.style.opacity='100%';
                }
            })
        }
        else{
            confirmRegisteration.textContent='Member registered successfully';
            confirmRegisteration.style.display='block';
            window.location.href="#confirm_registeration";
            
            spinner.style.display='none';
            submitBtn.disabled=false;
            if(submitBtn.disabled===false){
                submitBtn.style.opacity='100%';
            }
        }
        return response.json();
    })
    .catch(error => {
        return error;
   })
}