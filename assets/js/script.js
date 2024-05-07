const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");


function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}
  function openMobileNavbar() {
    navbar.classList.add("opened");
    navbarToggle.setAttribute("aria-expanded", "true");
  }
  navbarToggle.addEventListener("click", () => {
    if (navbar.classList.contains("opened")) {
      closeMobileNavbar();
    } else {
      openMobileNavbar();
    }
  });
  
  const navbarMenu = navbar.querySelector("#navbar-menu");
  const navbarLinksContainer = navbar.querySelector(".navbar-links");
  
  navbarLinksContainer.addEventListener("click", (clickEvent) => {
    clickEvent.stopPropagation();
  });
  
  navbarMenu.addEventListener("click", closeMobileNavbar);
  
  


 function limparMain() {
    const mainElement = document.getElementById('main1');
    const mainElement1 = document.getElementById('main2');
    
   
      mainElement.classList.add('opened');
      mainElement1.classList.add('opened');
   
    }
    
 function voltar() {
    const mainElement = document.getElementById('main1');
    const mainElement2 = document.getElementById('main1');
    mainElement2.classList.remove('opened');
      mainElement.classList.remove('opened');
     
    }

    


  

