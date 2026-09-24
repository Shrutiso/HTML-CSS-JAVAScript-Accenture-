let ch = 0;


const che = document.getElementById("quantityChips");


document.getElementById("ADDtocartChips").addEventListener("click", function () {
    ch++;
    che.textContent = ch;
});