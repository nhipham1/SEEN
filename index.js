document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelectorAll("button");
	var nut = nut[0];
	var menu = document.querySelectorAll(".menu");
	var menu = menu[0];
	var manhinhden = document.querySelectorAll(".manhinhden");
	var manhinhden = manhinhden[0];
	nut.onclick = function(){
		menu.classList.add('menuhienra');
		manhinhden.classList.add('manhinhdenhienra');
	}
	manhinhden.onclick = function(){
		manhinhden.classList.remove('manhinhdenhienra');
		menu.classList.remove('menuhienra');
	}
},false)

let data = [
    {
        id: 1,
        namePro: "croptop",
        image: "https://i.pinimg.com/originals/eb/a9/67/eba96785c5a65bc657e7b075fb689739.jpg",
        dateCreated: "10/11/2023",
        desc: "description",
        price: "23$"
    },
    {
        id: 2,
        namePro: "Ghế",
        // image: "https://i.pinimg.com/originals/6b/47/68/6b4768c2c2cdc6a0e12e67397631beff.jpg",
        image: "https://i.pinimg.com/originals/9c/fd/3c/9cfd3c6157afe40bebdc6cc86f699c9a.jpg",
        dateCreated: "03/11/2023",
        desc: "description",
        price: "1$"
    },
    {
        id: 3,
        namePro: "Đèn",
        image: "https://i.pinimg.com/originals/83/c7/ff/83c7ff5d929a0d1c9a7faa517fcdc856.jpg",
        dateCreated: "10/01/2023",
        desc: "description",
        price: "20$"
    },
    {
        id: 4,
        namePro: "Tủ",
        image: "https://i.pinimg.com/originals/a8/43/b5/a843b5497b2988fc4ab218d5577a4c69.jpg",
        dateCreated: "23/11/2023",
        desc: "description",
        price: "3$"
    },
    {
        id: 5,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/ad/51/41/ad51419441e645ba306a8eb8c74893c2.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "9$"
    },
    {
        id: 6,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/f4/07/b1/f407b1f0d48b7b06ce1da1ca1819fffb.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    }
    ,
    {
        id: 7,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/d5/2e/48/d52e489bb8385b376f93d6f82428fb43.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    },
    {
        id: 8,
        namePro: "Ghế",
        image: "https://i.pinimg.com/originals/62/30/87/623087de9864fefa7c0ebb11b543628c.jpg",
        dateCreated: "03/11/2023",
        desc: "description",
        price: "1$"
    },
    {
        id: 9,
        namePro: "Đèn",
        image: "https://i.pinimg.com/originals/14/54/41/145441e8f40bcef6190256d6fd548ed6.jpg",
        dateCreated: "10/01/2023",
        desc: "description",
        price: "20$"
    },
    {
        id: 10,
        namePro: "Tủ",
        image: "https://i.pinimg.com/originals/a8/43/b5/a843b5497b2988fc4ab218d5577a4c69.jpg",
        dateCreated: "23/11/2023",
        desc: "description",
        price: "3$"
    },
    {
        id: 11,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/ad/51/41/ad51419441e645ba306a8eb8c74893c2.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "9$"
    },
    {
        id: 12,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/0e/35/45/0e354568022aedc793215c8f1da95314.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    }
    ,
    {
        id: 13,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/9d/58/67/9d5867f8ac14fb9020c0678c465ab6b4.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    },
    {
        id: 14,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/ad/51/41/ad51419441e645ba306a8eb8c74893c2.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "9$"
    },
    {
        id: 15,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/88/19/c0/8819c09f35a82640af644d0d0689c1f3.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    }
    ,
    {
        id: 16,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/d5/2e/48/d52e489bb8385b376f93d6f82428fb43.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    },
    {
        id: 17,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/ad/51/41/ad51419441e645ba306a8eb8c74893c2.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "9$"
    },
    {
        id: 18,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/f4/07/b1/f407b1f0d48b7b06ce1da1ca1819fffb.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    }
    ,
    {
        id: ,
        namePro: "Laptop",
        image: "https://i.pinimg.com/originals/d5/2e/48/d52e489bb8385b376f93d6f82428fb43.jpg",
        dateCreated: "09/09/2023",
        desc: "description",
        price: "19$"
    }
];

let htmlProduct = "";

for (let i = 0; i < data.length; i++) {
    htmlProduct +=
    `
    <div class="card">
    <img class="img-pro" src="${data[i].image}"/>
    <div class="card-body">
            <h5 class="card-title">${data[i].namePro}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-body-secondary">Price: ${data[i].price}</small></p>
    </div>
    </div>

   
    `
}

document.getElementById("card-group").innerHTML = htmlProduct;

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
