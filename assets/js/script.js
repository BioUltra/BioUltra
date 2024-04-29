
function toggle(){ 
    var nav = document.getElementById("nav")
    var blur = document.getElementById("blur")
    var nav1 = document.getElementById("navbar")
    blur.classList.toggle('active')
    nav1.classList.toggle('showagain')
    nav.classList.toggle('show');
 }


 function limparMain() {
    const mainElement = document.getElementById('main1');
    const mainElement2 = document.getElementById('main');
    mainElement2.classList.add('main3');
      mainElement.classList.add('main2');
   
    }
    
 function voltar() {
    const mainElement = document.getElementById('main1');
    const mainElement2 = document.getElementById('main');
    mainElement2.classList.remove('main3');
      mainElement.classList.remove('main2');
     
    }
    function login(){
        const form = document.getElementById('forma');

        form.classList.toggle("forms")
    }

    


  

