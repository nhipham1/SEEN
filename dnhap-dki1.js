const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
    item.addEventListener('click', function () {
        switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
    })
})

// let acc = [
//     {
//         id: 1,
//         email: "admin@gmail.com",
//         username: "admin",
//         password: "admin",
//     },
//     {
//         id: 2,
//         email: "admin2@gmail.com",
//         username: "admin2",
//         password: "admin2",
//     }
// ];
// localStorage.setItem("account", JSON.stringify(acc));

// function getValue () {
//     event?.preventDefault();
//     let email = document.getElementById("exampleInputEmail1").value
//     console.log(email)
//     let password = document.getElementById("exampleInputPassword1").value
//     console.log(password)
//     let confirmpassword = document.getElementById("exampleInputPassword2").value
//     console.log(confirmpassword)
//     let dataAcc = JSON.parse(localStorage.getItem("account"))
//     console.log(dataAcc)
//     let exists = false;
//     for(let i = 0; i < dataAcc.length; i++) {
//         if(email === dataacc[i].email){
//              return exists = true;
//         } 
//     }                              //"==" chỉ kiểm tra về dữ liệu
//     return exists;                                 //"===" kiểm tra dữ liệu + kiểu dữ liệu


// }
// function checkValue() {
//     if(getValue()){
//         alert("Email already exists")
//     } else {
//         alert("email ok")
//     }
// }


// getValue();

let dataAcc = JSON.parse(localStorage.getItem("account"))
console.log("🚀 ~ file: index.js:49 ~ dataAcc:", dataAcc)

function checkEmail(email, password, type) {
    console.log(checkEmail)
    let exists = false;

    for (let i = 0; i < dataAcc.length; i++)
        if (email === dataAcc[i].email) {
            if (type === 'login') {
                //neu loai la login, kiem tra ca password
                if (password === dataAcc[i].password) {
                    exists = true;
                }
            } else {
                //neu loai khong phai 'login', chi can kiem tra email
                exists = true;
            }
            return exists
        }
}

function handleRegister() {
    event?.preventDefault() // ngăn load trang web
    let valueEmail = document.getElementById('signup-email').value;
    let valuePassword = document.getElementById('signup-password').value;
    let valueConfPassword = document.getElementById('confirm-password').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail)) {
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Email already exists",
            });
        } else {
            if (valuePassword === valueConfPassword) {
                dataAcc.push(
                    { id: dataAcc.length + 1, email: valueEmail, password: valuePassword }
                )
                localStorage.setItem('account', JSON.stringify(dataAcc))
                Swal.fire({
                    position: "bottom-end",
                    icon: "success",
                    title: "Register success",
                    showConfirmButton: false,
                    timer: 1500
                }); // thông báo đăng ký thành công
                setTimeout(() => {
                    window.location.href = 'dnhap-dki1.html'
                }, 1500)// sau 1,5s sẽ chuyển sang trang chủ
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Confirm Password fail",
                });// xác nhận password sai
            }
        }
    } else {
        Swal.fire({
            icon: "warning",
            title: "Warning!",
            text: "Please enter your email and password",
        });
    }
}


function handleLogin() {
    event?.preventDefault()
    let valueEmail = document.getElementById('login-email').value;
    let valuePassword = document.getElementById('login-password').value;
    if (valueEmail !== '' && valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword.toString(), 'login')) {
            localStorage.setItem('isLogin', true) // lưu trạng thái đăng nhập là true
            Swal.fire({
                position: "bottom-end",
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 1500
            }); // thông báo đăng nhập thành công
            setTimeout(() => {
                window.location.href = 'index.html'
            }, 1500)// sau 1,5s sẽ chuyển sang trang chủ
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Account not found",
            });
        }
    } else {
        Swal.fire({
            icon: "warning",
            title: "Warning!",
            text: "Please enter email and password",
        });
    }
}


