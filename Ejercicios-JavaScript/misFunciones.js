/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const alturaMaxima = canvas.height;
    const anchoMax = canvas.width
    const paso = 20;
    let ejeX = -24;
    let ejeY = -14;


    //Lineas Verticales
    for (let i=paso; i<anchoMax; i+=paso) {
        ctx.beginPath();
        ctx.moveTo(i, 0)
        ctx.lineTo(i, alturaMaxima);
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle="blue";
        ctx.fillText(ejeX, i, alturaMaxima/2)
        ctx.closePath();
        ejeX++;
    }

    //Lineas Horizontales
    for (let i = paso; i<alturaMaxima; i += paso){
        ctx.beginPath();
        ctx.moveTo(0, i)
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "green";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle="blue";
        ctx.fillText(ejeY, anchoMax/2, i)
        ctx.closePath();
        ejeY++;
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMaxima/2)
    ctx.lineTo(anchoMax, alturaMaxima/2);
    ctx.strokeStyle = "#6b0a0a";
    ctx.stroke();
    ctx.closePath();

    //EJE Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0)
    ctx.lineTo(anchoMax/2, alturaMaxima);
    ctx.strokeStyle = "#6b0a0a";
    ctx.stroke();
    ctx.closePath();

}

let dibujarImagen = (posx, posy) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    console.log(posx, posy);

    if (posx < 0 || posy < 0 || posx > canvas.width || posy > canvas.height){
        abrirDialog();
    }
    else {
        let img;
        img = new Image();
        img.src = "images/auto.png";

        img.onload =  function () {
            ctx.drawImage(img, posx, posy);
        }
    }
}

let abrirDialog = () =>{
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

let cerrarDialog = () =>{
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

var x = 0;
var dx = 2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";
    img.onload =  function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x += dx;

    if (x >= canvas.width){
        x = 0;
    }
}

let animarAutoRequest = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img;
    img = new Image();
    img.src = "images/auto.png";
    img.onload =  function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
        requestAnimationFrame(animarAutoRequest)
    }

    if (x >= canvas.width){
        x = 0;
    }
    x += dx;
}

let animarNuevo = () => {
    requestAnimationFrame(animarAutoRequest)
}