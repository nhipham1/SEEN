// document.addEventListener("DOMContentLoaded", function () {
//     var nut = document.querySelectorAll("button");
//     var nut = nut[0];
//     var menu = document.querySelectorAll(".menu");
//     var menu = menu[0];
//     var manhinhden = document.querySelectorAll(".manhinhden");
//     var manhinhden = manhinhden[0];
//     nut.onclick = function () {
//         menu.classList.add('menuhienra');
//         manhinhden.classList.add('manhinhdenhienra');
//     }
//     manhinhden.onclick = function () {
//         manhinhden.classList.remove('manhinhdenhienra');
//         menu.classList.remove('menuhienra');
//     }
// }, false)
let htmlProduct = "";
var data =[];
fetch('https://api.myjson.online/v1/records/66712e0a-04de-44bc-8f37-4dbd638c21f0')
    .then((res) => res.json())
    .then((response) => {
        data = response.data
        for (let i = 0; i < response.data.length; i++) {
            htmlProduct +=
                `
            <div class="card">
            <img class="img-pro" src="${response.data[i].image}"/>
            <div class="card-body">
                    <h5 class="card-title">${response.data[i].namePro}</h5>
                    ${response.data[i].desc}
                    <p class="card-text price">Price: ${response.data[i].price}</p>
                <button class="button-28" role="button">Detail</button>    
            </div>
            </div>
            `
        }

        document.getElementById("card-group").innerHTML = htmlProduct;
    })





// function filterproduct(value){
//     let buttons = document.querySelectorAll(".selections");
//     buttons.forEach((button)) => {
//         if(value.toUpperCase() == button.innerText.toUpperCase()) {
//             button.classList.add("active");
//         } else {
//             button.classList.remove("active")
//         }
//     }
// });
// filterproduct();

// var windowW = window.innerWidth - 50;
// // 270 là chiều dài của tấm hình

// //Di chuyển đối tượng từ trái sang phải
// function moveRight(){
//     ("#divsanta").animate({left: "+="+windowW}, 15000, moveLeft)
// }

// //Di chuyển đối tượng từ phải sang trái
// function moveLeft(){
//     ("#divsanta").animate({left: "-="+windowW}, 15000, moveRight)
// }

// $(document).ready(function() {
//     //Bắt đầu chạy thôi :D
//     moveRight();
// });



//kiểm tra nếu isLogin dưới localStorage là true thì ẩn nút đăng nhập đăng ký và hiện nút logout
if (localStorage.getItem('isLogin') == 'true') {
    document.getElementById('login-register').classList.add('hidden-menu')// ẩn menu đăng nhập đăng ký
    document.getElementById('show-logout').classList.remove('btn-logout')// hiện nút đăng xuất
}


function handleLogout() {
    localStorage.setItem('isLogin', false) // lưu trang thái đăng nhập isLogin dưới localStorage lại thành false nghĩa là chưa đăng nhập
    window.location.reload() // load lại trang
}


let nameProduct = "đầm"
const test = () => {
    let getData = document.getElementById("search").value;
    const arr2 = data.filter((item) => {
        return item.namePro.toUpperCase().includes(getData.toUpperCase());
    })
    console.log("🚀 ~ arr2 ~ arr2:", arr2)

    

}

