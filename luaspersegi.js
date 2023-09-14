var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".luas");
var Luas, Panjang, Lebar;

function myFunction(){
    Panjang = panjangInput.value;
    Lebar = lebarInput.value;
    Luas = Panjang * Lebar;
    alert("Luasnya adalah :" + Luas);
}