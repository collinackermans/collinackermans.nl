$(window).scroll(function() {
    if ($(window).scrollTop() > 1) {
        $('header').addClass('scrolled');
        $('.scrolltotop').addClass('active');
        $('.goback').addClass('active');
        console.log('scrolled');
    } else {
        $('header').removeClass('scrolled');
        $('.scrolltotop').removeClass('active');
        $('.goback').removeClass('active');
        console.log('unscrolled');
    }
});

$('.scrolltotop').click(function(){
        $("html, body").animate({ scrollTop: 0 });
});


document.addEventListener("DOMContentLoaded", function() {
    function filterSelection(c) {
      let elements = document.getElementsByClassName("thumb");
      let filter = c === "all" ? "" : c;
  
      for (let element of elements) {
        element.classList.remove("show");
        if (element.className.indexOf(filter) > -1) {
          element.classList.add("show");
        }
      }
    }
  
    // Add active class to the current button (highlight it)
    document.getElementsByClassName("skills-choice-wrapper")[0].addEventListener("click", function(e) {
      if (e.target.classList.contains("thumb")) {
        let currentActive = this.querySelector(".active");
        if (currentActive) {
          currentActive.classList.remove("active");
        }
        e.target.classList.add("active");
      }
    });
  
    // Make filterSelection available globally so it can be called from HTML
    window.filterSelection = filterSelection;
  });
  

document.addEventListener("DOMContentLoaded", function() {
    // Function to scroll to the contact section
    function scrollToContact() {
        const contactSection = document.getElementById("contact-section");
        contactSection.scrollIntoView({ behavior: "smooth" });
    }

    // Attach click event to all elements with the class "contact"
    const contactButtons = document.querySelectorAll(".contact");
    contactButtons.forEach(function(contactButton) {
        contactButton.addEventListener("click", scrollToContact);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Function to scroll to the about_me section
    function scrollToAboutMe() {
        const aboutMeSection = document.getElementById("about_me");
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }

    // Attach click event to all elements with the class "overmij"
    const aboutMeButtons = document.querySelectorAll(".overmij");
    aboutMeButtons.forEach(function(aboutMeButton) {
        aboutMeButton.addEventListener("click", scrollToAboutMe);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Function to scroll to the contact section
    function scrollToProjects() {
        const projectSection = document.getElementById("my_work");
        projectSection.scrollIntoView({ behavior: "smooth" });
    }

    // Attach click event to the button
    const projectButton = document.querySelector(".mijnwerk");
    projectButton.addEventListener("click", scrollToProjects);
});




$(document).ready(function() {
    // Function to handle click event for skill buttons
    $(".skill-btn").click(function() {
        // Remove active class from all buttons
        $(".skill-btn").removeClass("active");
        // Add active class to the clicked button
        $(this).addClass("active");
    });
});