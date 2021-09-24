// Buy ticket
const buyBtns = document.querySelectorAll(".place-buy-btn");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".modal-close");
const modal = document.querySelector(".modal");

buyBtns.forEach(function(buyBtn){
    buyBtn.onclick = function(){
        document.querySelector(".modal").style.display = "flex";
    }
})

closeModalBtn.onclick = function(){
    document.querySelector(".modal").style.display = "none";
}

modal.onclick = function(){
    document.querySelector(".modal").style.display = "none";
}

modalContainer.onclick = function(event){
    event.stopImmediatePropagation();
}

// Mobile menu btn
const headerElement = document.querySelector("#header");
const menuMobile = headerElement.querySelector(".mobile-menu-btn");
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');


menuMobile.onclick = function(){
    var isClose = headerElement.clientHeight === 46;
    if(isClose){
        header.style.height = "auto";
    }else{
        header.style.height = "46px";
    }
}

menuItems.forEach(function(item){
    item.onclick = function(e){
        if(!item.nextElementSibling){
            headerElement.style.height = "46px";
        }else{
            e.preventDefault();
        }
    }
})