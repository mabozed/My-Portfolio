//Navigation bar effects on scroll
window.addEventListener('scroll',function(){
    const header =this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
//Portfolio section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnmoreBtns = document.querySelectorAll('.learn-more-btn');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

var modal = function(modalClick){
    serviceModals[modalClick].classList.add('active');
}
learnmoreBtns.forEach((learnmoreBtn,i) => {
    learnmoreBtn.addEventListener('click',() => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener('click',() => {
        serviceModals.forEach((modalView)=> {
            modalView.classList.remove('active');
        });
    });
});


  // filter
  let $btns = $('.img-gallery .sortBtn .filter-btn');
  $btns.click(function(e) {
      $('.img-gallery .sortBtn .filter-btn').removeClass('active');
      e.target.classList.add('active');
      let selector = $(e.target).attr('data-filter');
      $('.img-gallery .grid').isotope
      ({
          filter:selector
      })
      return false;
  })
  $('.image-popup').magnificPopup
  ({
      type: 'image',
      gallery: { enabled: true}
  })
  
  // owl carousel
  $('.testimonial-slider').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});


//Website dark/light theme
const themeBtn =document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeBtn.classList.toggle('sun');

  localStorage.setItem('saved-theme', getCurrentTheme());
  localStorage.setItem('saved-icon', getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains('sun') ? 'sun' : 'moon';

const savedTheme = localStorage.getItem('saved-theme');
const savedIcon = localStorage.getItem('saved-icon');

if(savedTheme) {
  document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
  themeBtn.classList[savedIcon === 'sun' ? 'add' : 'remove']('sun');
}


//Scroll to top button
const scrollTopBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll',function(){
  scrollTopBtn.classList.toggle('active', this.window.scrollY > 500);
});

scrollTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


//Navigation menu items active on page scroll
window.addEventListener("scroll" , () => {
  const sections = document.querySelectorAll('section');
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
    }
    else {
      document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
    }
  });
});
//Responsive navigation menu toggle
const menuBtn =document.querySelector('.nav-menu-btn');
const closeBtn =document.querySelector('.nav-close-btn');
const navigation =document.querySelector('.navigation');
const navItem =document.querySelectorAll('.nav-items a');

menuBtn.addEventListener('click', () => {
  navigation.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  navigation.classList.remove('active')
});

navItem.forEach((navItem) => {
  navItem.addEventListener('click' , () => {
    navigation.classList.remove('active');
  });
});

//Scroll reveal animations





// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


