function openNav() {
    document.getElementById("mySidenav").style.width = "236px";
    document.getElementById("main").style.marginLeft = "236px";
    document.body.style.backgroundColor = "rgb(194, 151, 122)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("ativo");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

//BOTOES TRIMESTRE DE MATEMATICA
function openTri(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestre");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}

//BOTOES TRIMESTRE DE HUMANAS
function triHumanas(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestreHumanas");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}

//BOTOES TRIMESTRE DE NATUREZA
function triNatureza(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestreNatureza");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}

//BOTOES TRIMESTRE DE LINGUAGENS
function triLinguagens(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestreLinguagens");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}

//BOTOES TRIMESTRE DE DESENVOLVIMENTO
function triDesenvolvimento(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestreDesenvolvimento");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}

//BOTOES TRIMESTRE DE IMPLANTAÇÃO
function triImplantacao(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestreImplantacao");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}

//BOTOES TRIMESTRE DE MODELAGEM
function triModelagem(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestreModelagem");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}

//BOTOES TRIMESTRE DE BANCO DE DADOS
function triBanco(trimestreName) {
    var i;
    var x = document.getElementsByClassName("trimestreBanco");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(trimestreName).style.display = "block";
}