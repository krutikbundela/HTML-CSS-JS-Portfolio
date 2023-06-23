
// ====================================
// creating a Sticky navbar component
// =====================================

//hero sec nu refrence lidhu
const heroSection2 = document.querySelector(".sec-hero");



const observer =new IntersectionObserver((enteries) =>{
const ent = enteries[0];

  !ent.isIntersecting
    ? document.body.classList.add("sticky")
    : document.body.classList.remove("sticky");
},{root:null,threshold:0});

observer.observe(heroSection2);



// ====================================
// creating a portfolio tabbed component
// =====================================


const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    //to find out number data attribute

    const btn_num = p_btn_clicked.dataset.btnNum; 
    
    
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => curElem.classList.add("p-img-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-img-not-active"));

} );




// ====================================
// creating lazy loading
// =====================================

const imgRef = document.querySelector("img[data-src]");

const lazyImg = (enteries) => {
  const[entry] = enteries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = imgRef.dataset.src; 
};

const imgObserver = new IntersectionObserver(lazyImg,{
  roll:null,
  threshold: 0
});

imgObserver.observe(imgRef);
 


