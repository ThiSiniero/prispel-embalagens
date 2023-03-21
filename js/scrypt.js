window.sr = ScrollReveal({ reset : true });

let logo = document.querySelector('#logo');
let itens_navbar = document.querySelector('.nav_itens');
let top_page = document.querySelector('.top_page');


sr.reveal(logo, {   // efeito no logo
    //rotate: { x:0, y:80,z:0},
    duration: 2000,
    distance: '130px',
    origin: 'top',
 });

window.addEventListener("scroll", function(event) {   //esconder a navbar
            if(window.pageYOffset>500){
                itens_navbar.style.background = "rgb(68, 67, 67)";
                itens_navbar.style.marginTop = "0%";
                top_page.style. visibility = "hidden";
            }
            else{
                itens_navbar.style.background = "transparent";
                itens_navbar.style.marginTop = "8%";
                top_page.style. visibility = "visible";
            }
});

sr.reveal('.imgs_cxTypesL', {   // aparecer imagens dos tipos de caixa esquerda
    rotate: { x:0, y:80,z:0},
    duration: 3000,
   // distance: '100px',
   // origin: 'left'
});

sr.reveal('.imgs_cxTypesR', {   // aparecer imagens dos tipos de caixa direita
    // rotate: { x:0, y:80,z:0},
     duration: 2000,
     distance: '110px',
     origin: 'right'
 });
