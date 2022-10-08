/** Codigo para el funcionamiento del menu en la version de mobile **/
//Variables
const img_menu = document.getElementById("img_menu");
const close = document.getElementById("close");
const sub_menu = document.getElementById("sub_menu");

img_menu.onclick = () =>{
    sub_menu.style.display = 'flex';
    
}
close.onclick = () =>{
    sub_menu.style.display = 'none';
}


/** Cierre del codigo del funcionamiento del menu */
