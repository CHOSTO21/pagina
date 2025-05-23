
var root = document.querySelector(':root ');
function saludar(){
    var name=document.getElementById("user-name").value;
    var elements=document.getElementsByClassName("first");
    for(let i=0; i< elements.length; i++){
    elements[i].style.backgroundColor="#ff1493";
    alert('se encontraron' + elements.lenght + 'elementos');}

} 

function reiniciar(){
   var elements=document.getElementsByClassName("first");
   elements[0].style.backgroundColor="red;"

}

function showConfirm(){
       var texto;
        if(confirm("selecciona un boton")){
            texto = "Haz precionado aceptar";
        }
        else{
            texto = "haz cancelado la accion";
        }
        document.getElementById("demo").innerHTML = texto;

}


function mostrarprompt(){
    let texto;
    let persona=prompt("Porfavor ingresa tu nombre", "Usuario");
    if(persona==null | persona == ""){
        texto="el Usuario cancelo el comando";
    }
    else{
        texto="Hola" + persona + "Como estas";
    }
    document.getElementById("demo").innerHTML=texto;
}

function getRoot(){
    var r = getComputedStyle(root);
    alert("El valor de --miColor" + r.getPropertyValue ('--miColor'));
}

function cambiarvalor(){
    root.style.setProperty('--miColor','purple');
}

function showimage(image){
    var newimage=document.createElement('img');
    newimage.src=image.src;
    newimage.removeAttribute('onclick');
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    modal.appendChild(newimage);
}

function togglemenu(){
    var button=document.querySelector('gg-menu-oreos');
    button.classList.toggle('gg-close');
    var menu=document.getElementsByClassName('js-menu');
    menu[0].classList.toggle("active");
}

function fixPhotoOnScroll (){
    var photo = document.getElementById("photo-profile");
    this.scrolly > 50 ? photo.style.marginTop=0: photo.style.marginTop=('-7rem');
}
window.addEventListener("scroll",fixPhotoOnScroll,false);

function genPDF(){
    var doc=new jsPDF();
    doc.save('MICV.pdf');
}