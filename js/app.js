// $(document).ready(function() {

//     // hamburger menu toggle
//     $('.nav-toggle').click(function() {
//       $('.main-nav').toggleClass('is-open');
//       $('.hamburger').toggleClass('is-open');
//     })
  
//   })

      const navtoggle=document.querySelector('.nav-toggle');
      const mainnav=document.querySelector('.main-nav');
      const hamburger=document.querySelector('.hamburger');
      navtoggle.addEventListener('click',()=>{
         
        mainnav.classList.toggle('is-open');
        hamburger.classList.toggle('is-open');
      });

  