// ====================================
// creating a Responsive navbar component
// =====================================

const mob_nav = document.querySelector(".mob-nav-btn");
const headerElem = document.querySelector(".header");

mob_nav.addEventListener('click',()=>{
  headerElem.classList.toggle("active");
});  





// Swiperjs

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
      delay: 1000,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



const myJsmedia = () =>{
  if (WindSize.matches) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      
    });
  }
  else{
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}



const WindSize = window.matchMedia("(max-width: 780px)");
//call listener function at run time
myJsmedia(WindSize);
//attach listener funcion on stage changes
WindSize.addEventListener('change',myJsmedia)



//Scroll to TOP

const footElem = document.querySelector(".footer");

const scroll = document.createElement("div"); //div banaaviu
scroll.classList.add("sc-style"); //div ni andrr class add kriyoo

scroll.innerHTML = `<ion-icon name="arrow-up-outline" class="sc-top"></ion-icon>`;

footElem.after(scroll); //footer element pachi scroll mukvaa nu



//hero sec nu refrence lidhu
const heroSection = document.querySelector(".sec-hero");


const scrollTop = () =>{
  heroSection.scrollIntoView({behavior: "smooth" });
};


scroll.addEventListener("click",scrollTop);


//smooth scrolling effect
// 

const portfolioSec = document.querySelector(".sec-port");
const contSec = document.querySelector(".sec-contact");


document.querySelector(".pf-link").addEventListener("click", () =>{
  portfolioSec.scrollIntoView({behavior:"smooth"});
});

document.querySelector(".hire-me").addEventListener("click", (e) =>{
  e.preventDefault(); //href ma khaali # hoi to eno meaning thaai top of the page so ene rokvaa maate
  contSec.scrollIntoView({behavior:"smooth"});
});
 

// Animate Number

const countNum = document.querySelectorAll(".count-num");
const speed = 500;

countNum.forEach((curElem) => {

  const updateNum = () =>{
    const targetNum = parseInt(curElem.dataset.number);
    // console.log(targetNum);
    const initNum = parseInt(curElem.innerText);
    //console.log(initNum);

    const incrementNum = Math.trunc(targetNum/speed);
    // console.log(incrementNum);

    if(initNum < targetNum){
      curElem.innerText = `${initNum + incrementNum}+`;

      setTimeout(updateNum,10);
    }

  };

  updateNum();//pelaa ahiya aavse pachi e function ne call krrsse

});




