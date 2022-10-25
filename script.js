var menu_celular = document.querySelector('.menu-celular')
var menu_h = document.querySelector('.menu-h')

function aparecerMenu(){
    if (menu_celular.style.display == 'none'){
        menu_h.innerHTML = 'close'
        menu_celular.style.display = 'block'
    } else{
        menu_h.innerHTML = 'menu'
        menu_celular.style.display = 'none'
    }
}


function ajeitarMenu(){
    if (window.innerWidth >= 865){
        menu_celular.style.display = 'none'
        menu_h.style.display = 'none'
    } else{
        menu_celular.style.display = 'none'
        menu_h.style.display = 'block'
        menu_h.innerHTML = 'menu'
    }
}

function subirMenu(){
    if (menu_celular.style.display == 'block'){
        menu_celular.style.display = 'none'
        menu_h.innerHTML = 'menu'
    }
}
