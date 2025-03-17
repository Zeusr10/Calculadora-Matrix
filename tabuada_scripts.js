function Tabuada(){
    var num = window.document.getElementById('num')
    var end = window.document.getElementById('end')
    if(num.value.length == 0 || end.value.length == 0){
        window.alert('[ERRO] Confira os dados!')      
    }else {
    var n = Number(num.value);
    var e = Number(end.value);
    var r= '';
    x = 0
    var res = window.document.getElementById('resposta')
    res.innerHTML = `A tabuada do ${n} é: <br>`
    do{
        r = n * x
        res.innerHTML += `${n} X ${x}=  ${r}<br>`
        x++ 
    }while(x <=  e)
    
}}
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = index * fontSize;

        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });

    requestAnimationFrame(drawMatrix);
}

drawMatrix(); 