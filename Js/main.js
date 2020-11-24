const showMenu =(tooggleId,navId)=>{
    const toggle=document.getElementById(tooggleId);
    const nav=document.getElementById(navId)

    if(toggle && nav){
toggle.addEventListener('click',()=>{
    console.log("BUtoonclicked")
    nav.classList.toggle('show')
})
    }
}
showMenu('nav-toggle','nav__menu')


// remove menubar
const navLink=document.querySelectorAll('.nav__link');
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    //remove menu  mobile
    const navMenu=document.getElementById('nav__menu')
 navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))




//counter 
let nCount = selector => {
    $(selector).each(function () {
      $(this)
        .animate({
          Counter: $(this).text()
        }, {
          // A string or number determining how long the animation will run.
          duration: 4000,
          // A string indicating which easing function to use for the transition.
          easing: "swing",
          /**
           * A function to be called for each animated property of each animated element. 
           * This function provides an opportunity to
           *  modify the Tween object to change the value of the property before it is set.
           */
          step: function (value) {
            $(this).text(Math.ceil(value));
          }
        });
    });
  };

  let a = 0;
  $(window).scroll(function () {
    // The .offset() method allows us to retrieve the current position of an element  relative to the document
    let oTop = $(".numbers").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() >= oTop) {
      a++;
      nCount(".rect > h1");
    }
  });

/**
 *
 *  sticky navigation
 *
 */

window.addEventListener("scroll",function(){
    var navbar=document.querySelector("nav");
    navbar.classList.toggle("sticky",window.scrollY > 0);
})