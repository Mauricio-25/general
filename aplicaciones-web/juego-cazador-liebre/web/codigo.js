
let turno = 1;
let liebre = "p1";
let caz1 = "p10";
let caz2 = "p11";
let caz3 = "p8";

let contTurno = [];
contTurno = document.querySelectorAll(".cont-turno");

let teclasCaz = [];
teclasCaz = document.querySelectorAll(".teclasCaz");
let teclasLie = [];
teclasLie = document.querySelectorAll(".lie1 div div");
let e5caz = [];
e5caz = document.querySelectorAll(".e5caz")



let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
let p3 = document.querySelector(".p3");
let p4 = document.querySelector(".p4");
let p5 = document.querySelector(".p5");
let p6 = document.querySelector(".p6");
let p7 = document.querySelector(".p7");
let p8 = document.querySelector(".p8");
let p9 = document.querySelector(".p9");
let p10 = document.querySelector(".p10");
let p11 = document.querySelector(".p11");


let lieT1 = document.querySelector(".lie1 .e1 div");
let lieT2 = document.querySelector(".lie1 .e2 div");
let lieT3 = document.querySelector(".lie1 .e3 div");
let lieT4 = document.querySelector(".lie1 .e4 div");
let lieT6 = document.querySelector(".lie1 .e6 div");
let lieT7 = document.querySelector(".lie1 .e7 div");
let lieT8 = document.querySelector(".lie1 .e8 div");
let lieT9 = document.querySelector(".lie1 .e9 div");

let caz1T1 = document.querySelector(".caz1 .e1 div");
let caz1T2 = document.querySelector(".caz1 .e2 div");
let caz1T3 = document.querySelector(".caz1 .e3 div");
let caz1T4 = document.querySelector(".caz1 .e4 div");
let caz1T6 = document.querySelector(".caz1 .e6 div");
let caz1T7 = document.querySelector(".caz1 .e7 div");
let caz1T8 = document.querySelector(".caz1 .e8 div");
let caz1T9 = document.querySelector(".caz1 .e9 div");

let caz2T1 = document.querySelector(".caz2 .e1 div");
let caz2T2 = document.querySelector(".caz2 .e2 div");
let caz2T3 = document.querySelector(".caz2 .e3 div");
let caz2T4 = document.querySelector(".caz2 .e4 div");
let caz2T6 = document.querySelector(".caz2 .e6 div");
let caz2T7 = document.querySelector(".caz2 .e7 div");
let caz2T8 = document.querySelector(".caz2 .e8 div");
let caz2T9 = document.querySelector(".caz2 .e9 div");

let caz3T1 = document.querySelector(".caz3 .e1 div");
let caz3T2 = document.querySelector(".caz3 .e2 div");
let caz3T3 = document.querySelector(".caz3 .e3 div");
let caz3T4 = document.querySelector(".caz3 .e4 div");
let caz3T6 = document.querySelector(".caz3 .e6 div");
let caz3T7 = document.querySelector(".caz3 .e7 div");
let caz3T8 = document.querySelector(".caz3 .e8 div");
let caz3T9 = document.querySelector(".caz3 .e9 div");





mostrarTeclasCaz();




/* -------------------------------------------------------------------- FUNCIONES ---------------------------------------------------------------------- */

// Cazador 3
function movIzqCaz3() {

    if (caz3 == "p9") {
        p9.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--anaranjado)";
        p8.innerHTML = "3";
        caz3 = "p8";
    } else if (caz3 == "p10") {
        p10.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--anaranjado)";
        p9.innerHTML = "3";
        caz3 = "p9";
    } else if (caz3 == "p6") {
        p6.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--anaranjado)";
        p5.innerHTML = "3";
        caz3 = "p5";
    }  else if (caz3 == "p7") {
        p7.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "3";
        caz3 = "p6";
    } else if (caz3 == "p3") {
        p3.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "3";
        caz3 = "p2";
    }  else if (caz3 == "p4") {
        p4.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "3";
        caz3 = "p3";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movDerCaz3 () {
    if (caz3 == "p8") {
        p8.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--anaranjado)";
        p9.innerHTML = "3";
        caz3 = "p9";
    } else if (caz3 == "p9") {
        p9.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--anaranjado)";
        p10.innerHTML = "3";
        caz3 = "p10";
    } else if (caz3 == "p5") {
        p5.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "3";
        caz3 = "p6";
    } else if (caz3 == "p6") {
        p6.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--anaranjado)";
        p7.innerHTML = "3";
        caz3 = "p7";
    } else if (caz3 == "p2") {
        p2.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "3";
        caz3 = "p3";
    } else if (caz3 == "p3") {
        p3.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "3";
        caz3 = "p4";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movAbaCaz3 () {
    if (caz3 == "p8"){
        p8.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--anaranjado)";
        p5.innerHTML = "3";
        caz3 = "p5";
    } else if (caz3 == "p9"){
        p9.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "3";
        caz3 = "p6";
    } else if (caz3 == "p10"){
        p10.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--anaranjado)";
        p7.innerHTML = "3";
        caz3 = "p7";
    } else if (caz3 == "p5"){
        p5.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "3";
        caz3 = "p2";
    } else if (caz3 == "p6"){
        p6.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "3";
        caz3 = "p3";
    } else if (caz3 == "p7"){
        p7.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "3";
        caz3 = "p4";
    } else if (caz3 == "p3"){
        p3.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "3";
        caz3 = "p1";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movIzqAbaCaz3 () {
    if (caz3 == "p10"){
        p10.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "3";
        caz3 = "p6";
    } else if (caz3 == "p6"){
        p6.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "3";
        caz3 = "p2";
    } else if (caz3 == "p4"){
        p4.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "3";
        caz3 = "p1";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movDerAbaCaz3 () {
    if (caz3 == "p8"){
        p8.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "3";
        caz3 = "p6";
    } else if (caz3 == "p6"){
        p6.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "3";
        caz3 = "p4";
    } else if (caz3 == "p2"){
        p2.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "3";
        caz3 = "p1";
    }
    
    ocultarTeclasCaz();

    verResultados();

}



// Cazador 2
function movIzqCaz2() {
    if (caz2 == "p9") {
        p9.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--anaranjado)";
        p8.innerHTML = "2";
        caz2 = "p8";
    } else if (caz2 == "p10") {
        p10.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--anaranjado)";
        p9.innerHTML = "2";
        caz2 = "p9";
    } else if (caz2 == "p6") {
        p6.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--anaranjado)";
        p5.innerHTML = "2";
        caz2 = "p5";
    }  else if (caz2 == "p7") {
        p7.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "2";
        caz2 = "p6";
    } else if (caz2 == "p3") {
        p3.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "2";
        caz2 = "p2";
    }  else if (caz2 == "p4") {
        p4.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "2";
        caz2 = "p3";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movDerCaz2 () {
    if (caz2 == "p8") {
        p8.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--anaranjado)";
        p9.innerHTML = "2";
        caz2 = "p9";
    } else if (caz2 == "p9") {
        p9.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--anaranjado)";
        p10.innerHTML = "2";
        caz2 = "p10";
    } else if (caz2 == "p5") {
        p5.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "2";
        caz2 = "p6";
    } else if (caz2 == "p6") {
        p6.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--anaranjado)";
        p7.innerHTML = "2";
        caz2 = "p7";
    } else if (caz2 == "p2") {
        p2.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "2";
        caz2 = "p3";
    } else if (caz2 == "p3") {
        p3.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "2";
        caz2 = "p4";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movAbaCaz2 () {
    if (caz2 == "p8"){
        p8.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--anaranjado)";
        p5.innerHTML = "2";
        caz2 = "p5";
    } else if (caz2 == "p9"){
        p9.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "2";
        caz2 = "p6";
    } else if (caz2 == "p10"){
        p10.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--anaranjado)";
        p7.innerHTML = "2";
        caz2 = "p7";
    } else if (caz2 == "p5"){
        p5.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "2";
        caz2 = "p2";
    } else if (caz2 == "p6"){
        p6.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "2";
        caz2 = "p3";
    } else if (caz2 == "p7"){
        p7.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "2";
        caz2 = "p4";
    } else if (caz2 == "p3"){
        p3.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "2";
        caz2 = "p1";
    } else if (caz2 == "p11"){
        p11.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--anaranjado)";
        p9.innerHTML = "2";
        caz2 = "p9";
    } 

    ocultarTeclasCaz();

    verResultados();

}

function movIzqAbaCaz2 () {
    if (caz2 == "p10"){
        p10.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "2";
        caz2 = "p6";
    } else if (caz2 == "p6"){
        p6.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "2";
        caz2 = "p2";
    } else if (caz2 == "p4"){
        p4.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "2";
        caz2 = "p1";
    } else if (caz2 == "p11"){
        p11.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--anaranjado)";
        p8.innerHTML = "2";
        caz2 = "p8";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movDerAbaCaz2 () {
    if (caz2 == "p8"){
        p8.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "2";
        caz2 = "p6";
    } else if (caz2 == "p6"){
        p6.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "2";
        caz2 = "p4";
    } else if (caz2 == "p2"){
        p2.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "2";
        caz2 = "p1";
    } else if (caz2 == "p11"){
        p11.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--anaranjado)";
        p10.innerHTML = "2";
        caz2 = "p10";
    }
    
    ocultarTeclasCaz();

    verResultados();

}


// Cazador 1 

function movIzqCaz1() {
    if (caz1 == "p9") {
        p9.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--anaranjado)";
        p8.innerHTML = "1";
        caz1 = "p8";
    } else if (caz1 == "p10") {
        p10.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--anaranjado)";
        p9.innerHTML = "1";
        caz1 = "p9";
    } else if (caz1 == "p6") {
        p6.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--anaranjado)";
        p5.innerHTML = "1";
        caz1 = "p5";
    }  else if (caz1 == "p7") {
        p7.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "1";
        caz1 = "p6";
    } else if (caz1 == "p3") {
        p3.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "1";
        caz1 = "p2";
    }  else if (caz1 == "p4") {
        p4.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "1";
        caz1 = "p3";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movDerCaz1 () {
    if (caz1 == "p8") {
        p8.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--anaranjado)";
        p9.innerHTML = "1";
        caz1 = "p9";
    } else if (caz1 == "p9") {
        p9.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--anaranjado)";
        p10.innerHTML = "1";
        caz1 = "p10";
    } else if (caz1 == "p5") {
        p5.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "1";
        caz1 = "p6";
    } else if (caz1 == "p6") {
        p6.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--anaranjado)";
        p7.innerHTML = "1";
        caz1 = "p7";
    } else if (caz1 == "p2") {
        p2.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "1";
        caz1 = "p3";
    } else if (caz1 == "p3") {
        p3.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "1";
        caz1 = "p4";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movAbaCaz1 () {
    if (caz1 == "p8"){
        p8.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--anaranjado)";
        p5.innerHTML = "1";
        caz1 = "p5";
    } else if (caz1 == "p9"){
        p9.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "1";
        caz1 = "p6";
    } else if (caz1 == "p10"){
        p10.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--anaranjado)";
        p7.innerHTML = "1";
        caz1 = "p7";
    } else if (caz1 == "p5"){
        p5.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "1";
        caz1 = "p2";
    } else if (caz1 == "p6"){
        p6.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--anaranjado)";
        p3.innerHTML = "1";
        caz1 = "p3";
    } else if (caz1 == "p7"){
        p7.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "1";
        caz1 = "p4";
    } else if (caz1 == "p3"){
        p3.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "1";
        caz1 = "p1";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movIzqAbaCaz1 () {
    if (caz1 == "p10"){
        p10.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "1";
        caz1 = "p6";
    } else if (caz1 == "p6"){
        p6.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--anaranjado)";
        p2.innerHTML = "1";
        caz1 = "p2";
    } else if (caz1 == "p4"){
        p4.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "1";
        caz1 = "p1";
    }

    ocultarTeclasCaz();

    verResultados();

}

function movDerAbaCaz1 () {
    if (caz1 == "p8"){
        p8.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--anaranjado)";
        p6.innerHTML = "1";
        caz1 = "p6";
    } else if (caz1 == "p6"){
        p6.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--anaranjado)";
        p4.innerHTML = "1";
        caz1 = "p4";
    } else if (caz1 == "p2"){
        p2.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--anaranjado)";
        p1.innerHTML = "1";
        caz1 = "p1";
    }
    
    ocultarTeclasCaz();

    verResultados();

}


// Liebre

function movIzqLie() {
    if (liebre == "p9") {
        p9.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--amarillo)";
        liebre = "p8";
    } else if (liebre == "p10") {
        p10.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--amarillo)";
        liebre = "p9";
    } else if (liebre == "p6") {
        p6.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--amarillo)";
        liebre = "p5";
    }  else if (liebre == "p7") {
        p7.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p3") {
        p3.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--amarillo)";
        liebre = "p2";
    }  else if (liebre == "p4") {
        p4.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--amarillo)";
        liebre = "p3";
    }

    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();

    mostrarTeclasCaz();

}

function movDerLie () {
    if (liebre == "p8") {
        p8.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--amarillo)";
        liebre = "p9";
    } else if (liebre == "p9") {
        p9.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--amarillo)";
        liebre = "p10";
    } else if (liebre == "p5") {
        p5.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p6") {
        p6.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--amarillo)";
        liebre = "p7";
    } else if (liebre == "p2") {
        p2.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--amarillo)";
        liebre = "p3";
    } else if (liebre == "p3") {
        p3.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--amarillo)";
        liebre = "p4";
    }

    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();

    mostrarTeclasCaz();

}

function movAbaLie () {
    if (liebre == "p8"){
        p8.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--amarillo)";
        liebre = "p5";
    } else if (liebre == "p9"){
        p9.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p10"){
        p10.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--amarillo)";
        liebre = "p7";
    } else if (liebre == "p5"){
        p5.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--amarillo)";
        liebre = "p2";
    } else if (liebre == "p6"){
        p6.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--amarillo)";
        liebre = "p3";
    } else if (liebre == "p7"){
        p7.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--amarillo)";
        liebre = "p4";
    } else if (liebre == "p3"){
        p3.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--amarillo)";
        liebre = "p1";
    } else if (liebre == "p11"){
        p11.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--amarillo)";
        liebre = "p9";
    }
    
    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();

    mostrarTeclasCaz();

}

function movIzqAbaLie () {
    if (liebre == "p10"){
        p10.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p6"){
        p6.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--amarillo)";
        liebre = "p2";
    } else if (liebre == "p4"){
        p4.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--amarillo)";
        liebre = "p1";
    } else if (liebre == "p11"){
        p11.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--amarillo)";
        liebre = "p8";
    }

    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();

    mostrarTeclasCaz();

}

function movDerAbaLie () {
    if (liebre == "p8"){
        p8.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p6"){
        p6.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--amarillo)";
        liebre = "p4";
    } else if (liebre == "p2"){
        p2.style.backgroundColor = "#fff";
        p1.style.backgroundColor = "var(--amarillo)";
        liebre = "p1";
    } else if (liebre == "p11"){
        p10.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--amarillo)";
        liebre = "p10";
    }

    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();
    
    mostrarTeclasCaz();

}

function movArrLie () {
    if (liebre == "p1"){
        p1.style.backgroundColor = "#fff";
        p3.style.backgroundColor = "var(--amarillo)";
        liebre = "p3";
    } else if (liebre == "p2"){
        p2.style.backgroundColor = "#fff";
        p5.style.backgroundColor = "var(--amarillo)";
        liebre = "p5";
    } else if (liebre == "p3"){
        p3.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p4"){
        p4.style.backgroundColor = "#fff";
        p7.style.backgroundColor = "var(--amarillo)";
        liebre = "p7";
    } else if (liebre == "p5"){
        p5.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--amarillo)";
        liebre = "p8";
    } else if (liebre == "p6"){
        p6.style.backgroundColor = "#fff";
        p9.style.backgroundColor = "var(--amarillo)";
        liebre = "p9";
    } else if (liebre == "p7"){
        p7.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--amarillo)";
        liebre = "p10";
    } else if (liebre == "p9"){
        p9.style.backgroundColor = "#fff";
        p11.style.backgroundColor = "var(--amarillo)";
        liebre = "p11";
    }

    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();
    
    mostrarTeclasCaz();

}

function movIzqArrLie () {
    if (liebre == "p1"){
        p1.style.backgroundColor = "#fff";
        p2.style.backgroundColor = "var(--amarillo)";
        liebre = "p2";
    } else if (liebre == "p4"){
        p4.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p6"){
        p6.style.backgroundColor = "#fff";
        p8.style.backgroundColor = "var(--amarillo)";
        liebre = "p8";
    } else if (liebre == "p10"){
        p10.style.backgroundColor = "#fff";
        p11.style.backgroundColor = "var(--amarillo)";
        liebre = "p11";
    }

    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();
    
    mostrarTeclasCaz();

}

function movDerArrLie () {
    if (liebre == "p1"){
        p1.style.backgroundColor = "#fff";
        p4.style.backgroundColor = "var(--amarillo)";
        liebre = "p4";
    } else if (liebre == "p2"){
        p2.style.backgroundColor = "#fff";
        p6.style.backgroundColor = "var(--amarillo)";
        liebre = "p6";
    } else if (liebre == "p6"){
        p6.style.backgroundColor = "#fff";
        p10.style.backgroundColor = "var(--amarillo)";
        liebre = "p10";
    } else if (liebre == "p8"){
        p8.style.backgroundColor = "#fff";
        p11.style.backgroundColor = "var(--amarillo)";
        liebre = "p11";
    }

    turno++;

    for (i=0; i<contTurno.length; i++) {
        contTurno[i].innerHTML = "Turno: " + turno;
    }

    verResultados();
    
    mostrarTeclasCaz();

}






/* ------------------------------------------------------------- TECLAS ------------------------------------------------------ */  

function mostrarTeclasCaz() {
    for (i=0; i<teclasLie.length; i++) {
        teclasLie[i].style.display = "none";
    }
    for (i=0; i<teclasCaz.length; i++) {
        teclasCaz[i].style.display = "none";
    }
    for (i=0; i<e5caz.length; i++) {
        e5caz[i].style.display = "block";
    }
    //Caz1
    if (caz1 == "p2") {
        caz1T6.style.display = "block";
        caz1T9.style.display = "block";
        if (caz3 == "p1" || caz2 == "p1" || liebre == "p1") {
            caz1T9.style.display = "none";
        } if (caz3 == "p3" || caz2 == "p3" || liebre == "p3") {
            caz1T6.style.display = "none";
        }

    } else if (caz1 == "p3") {
        caz1T4.style.display = "block";
        caz1T6.style.display = "block";
        caz1T8.style.display = "block";
        if (caz3 == "p2" || caz2 == "p2" || liebre == "p2") {
            caz1T4.style.display = "none";
        } if (caz3 == "p4" || caz2 == "p4" || liebre == "p4") {
            caz1T6.style.display = "none";
        } if (caz3 == "p1" || caz2 == "p1" || liebre == "p1") {
            caz1T8.style.display = "none";
        }

    } else if (caz1 == "p4") {
        caz1T4.style.display = "block";
        caz1T7.style.display = "block";
        if (caz3 == "p3" || caz2 == "p3" || liebre == "p3") {
            caz1T4.style.display = "none";
        } if (caz3 == "p1" || caz2 == "p1" || liebre == "p1") {
            caz1T7.style.display = "none";
        }
    }
    else if (caz1 == "p5") {
        caz1T6.style.display = "block";
        caz1T8.style.display = "block";
        if (caz3 == "p2" || caz2 == "p2" || liebre == "p2") {
            caz1T8.style.display = "none";
        } if (caz3 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz1T6.style.display = "none";
        }
    }
    else if (caz1 == "p6") {
        caz1T4.style.display = "block";
        caz1T6.style.display = "block";
        caz1T7.style.display = "block";
        caz1T8.style.display = "block";
        caz1T9.style.display = "block";
        if (caz3 == "p5" || caz2 == "p5" || liebre == "p5") {
            caz1T4.style.display = "none";
        } if (caz3 == "p7" || caz2 == "p7" || liebre == "p7") {
            caz1T6.style.display = "none";
        } if (caz3 == "p2" || caz2 == "p2" || liebre == "p2") {
            caz1T7.style.display = "none";
        } if (caz3 == "p3" || caz2 == "p3" || liebre == "p3") {
            caz1T8.style.display = "none";
        } if (caz3 == "p4" || caz2 == "p4" || liebre == "p4") {
            caz1T9.style.display = "none";
        }
    }
    else if (caz1 == "p7") {
        caz1T4.style.display = "block";
        caz1T8.style.display = "block";
        if (caz3 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz1T4.style.display = "none";
        } if (caz3 == "p4" || caz2 == "p4" || liebre == "p4") {
            caz1T8.style.display = "none";
        }
    }
    else if (caz1 == "p8") {
        caz1T6.style.display = "block";
        caz1T8.style.display = "block";
        caz1T9.style.display = "block";
        if (caz3 == "p9" || caz2 == "p9" || liebre == "p9") {
            caz1T6.style.display = "none";
        } if (caz3 == "p5" || caz2 == "p5" || liebre == "p5") {
            caz1T8.style.display = "none";
        } if (caz3 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz1T9.style.display = "none";
        }
    }
    else if (caz1 == "p9") {
        caz1T4.style.display = "block";
        caz1T6.style.display = "block";
        caz1T8.style.display = "block";
        if (caz3 == "p8" || caz2 == "p8" || liebre == "p8") {
            caz1T4.style.display = "none";
        } if (caz3 == "p10" || caz2 == "p10" || liebre == "p10") {
            caz1T6.style.display = "none";
        } if (caz3 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz1T8.style.display = "none";
        }
    }
    else if (caz1 == "p10") {
        caz1T4.style.display = "block";
        caz1T7.style.display = "block";
        caz1T8.style.display = "block";
        if (caz3 == "p9" || caz2 == "p9" || liebre == "p9") {
            caz1T4.style.display = "none";
        } if (caz3 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz1T7.style.display = "none";
        } if (caz3 == "p7" || caz2 == "p7" || liebre == "p7") {
            caz1T8.style.display = "none";
        }
    }

    //Caz 2
    if (caz2 == "p2") {
        caz2T6.style.display = "block";
        caz2T9.style.display = "block";
        if (caz1 == "p1" || caz3 == "p1" || liebre == "p1") {
            caz2T9.style.display = "none";
        } if (caz1 == "p3" || caz3 == "p3" || liebre == "p3") {
            caz2T6.style.display = "none";
        }

    } else if (caz2 == "p3") {
        caz2T4.style.display = "block";
        caz2T6.style.display = "block";
        caz2T8.style.display = "block";
        if (caz3 == "p2" || caz1 == "p2" || liebre == "p2") {
            caz2T4.style.display = "none";
        } if (caz3 == "p4" || caz1 == "p4" || liebre == "p4") {
            caz2T6.style.display = "none";
        } if (caz3 == "p1" || caz1 == "p1" || liebre == "p1") {
            caz2T8.style.display = "none";
        }
    } else if (caz2 == "p4") {
        caz2T4.style.display = "block";
        caz2T7.style.display = "block";
        if (caz3 == "p3" || caz1 == "p3" || liebre == "p3") {
            caz2T4.style.display = "none";
        } if (caz3 == "p1" || caz1 == "p1" || liebre == "p1") {
            caz2T7.style.display = "none";
        }
    }
    else if (caz2 == "p5") {
        caz2T6.style.display = "block";
        caz2T8.style.display = "block";
        if (caz3 == "p2" || caz1 == "p2" || liebre == "p2") {
            caz2T8.style.display = "none";
        } if (caz3 == "p6" || caz1 == "p6" || liebre == "p6") {
            caz2T6.style.display = "none";
        }
    }
    else if (caz2 == "p6") {
        caz2T4.style.display = "block";
        caz2T6.style.display = "block";
        caz2T7.style.display = "block";
        caz2T8.style.display = "block";
        caz2T9.style.display = "block";
        if (caz3 == "p5" || caz1 == "p5" || liebre == "p5") {
            caz2T4.style.display = "none";
        } if (caz3 == "p7" || caz1 == "p7" || liebre == "p7") {
            caz2T6.style.display = "none";
        } if (caz3 == "p2" || caz1 == "p2" || liebre == "p2") {
            caz2T7.style.display = "none";
        } if (caz3 == "p3" || caz1 == "p3" || liebre == "p3") {
            caz2T8.style.display = "none";
        } if (caz3 == "p4" || caz1 == "p4" || liebre == "p4") {
            caz2T9.style.display = "none";
        }
    }
    else if (caz2 == "p7") {
        caz2T4.style.display = "block";
        caz2T8.style.display = "block";
        if (caz3 == "p6" || caz1 == "p6" || liebre == "p6") {
            caz2T4.style.display = "none";
        } if (caz3 == "p4" || caz1 == "p4" || liebre == "p4") {
            caz2T8.style.display = "none";
        }
    }
    else if (caz2 == "p8") {
        caz2T6.style.display = "block";
        caz2T8.style.display = "block";
        caz2T9.style.display = "block";
        if (caz3 == "p9" || caz1 == "p9" || liebre == "p9") {
            caz2T6.style.display = "none";
        } if (caz3 == "p5" || caz1 == "p5" || liebre == "p5") {
            caz2T8.style.display = "none";
        } if (caz3 == "p6" || caz1 == "p6" || liebre == "p6") {
            caz2T9.style.display = "none";
        }
    }
    else if (caz2 == "p9") {
        caz2T4.style.display = "block";
        caz2T6.style.display = "block";
        caz2T8.style.display = "block";
        if (caz3 == "p8" || caz1 == "p8" || liebre == "p8") {
            caz2T4.style.display = "none";
        } if (caz3 == "p10" || caz1 == "p10" || liebre == "p10") {
            caz2T6.style.display = "none";
        } if (caz3 == "p6" || caz1 == "p6" || liebre == "p6") {
            caz2T8.style.display = "none";
        }
    }
    else if (caz2 == "p10") {
        caz2T4.style.display = "block";
        caz2T7.style.display = "block";
        caz2T8.style.display = "block";
        if (caz3 == "p9" || caz1 == "p9" || liebre == "p9") {
            caz2T4.style.display = "none";
        } if (caz3 == "p6" || caz1 == "p6" || liebre == "p6") {
            caz2T7.style.display = "none";
        } if (caz3 == "p7" || caz1 == "p7" || liebre == "p7") {
            caz2T8.style.display = "none";
        }
    }
    else if (caz2 == "p11") {
        caz2T7.style.display = "block";
        caz2T8.style.display = "block";
        caz2T9.style.display = "block";
        if (caz3 == "p8" || caz1 == "p8" || liebre == "p8") {
            caz2T7.style.display = "none";
        } if (caz3 == "p9" || caz1 == "p9" || liebre == "p9") {
            caz2T8.style.display = "none";
        } if (caz3 == "p10" || caz1 == "p10" || liebre == "p10") {
            caz2T9.style.display = "none";
        }
    }

    // Caz3
    if (caz3 == "p2") {
        caz3T6.style.display = "block";
        caz3T9.style.display = "block";
        if (caz1 == "p1" || caz2 == "p1" || liebre == "p1") {
            caz3T9.style.display = "none";
        } if (caz1 == "p3" || caz2 == "p3" || liebre == "p3") {
            caz3T6.style.display = "none";
        }

    } else if (caz3 == "p3") {
        caz3T4.style.display = "block";
        caz3T6.style.display = "block";
        caz3T8.style.display = "block";
        if (caz1 == "p2" || caz2 == "p2" || liebre == "p2") {
            caz3T4.style.display = "none";
        } if (caz1 == "p4" || caz2 == "p4" || liebre == "p4") {
            caz3T6.style.display = "none";
        } if (caz1 == "p1" || caz2 == "p1" || liebre == "p1") {
            caz3T8.style.display = "none";
        }
    } else if (caz3 == "p4") {
        caz3T4.style.display = "block";
        caz3T7.style.display = "block";
        if (caz1 == "p3" || caz2 == "p3" || liebre == "p3") {
            caz3T4.style.display = "none";
        } if (caz1 == "p1" || caz2 == "p1" || liebre == "p1") {
            caz3T7.style.display = "none";
        }
    }
    else if (caz3 == "p5") {
        caz3T6.style.display = "block";
        caz3T8.style.display = "block";
        if (caz1 == "p2" || caz2 == "p2" || liebre == "p2") {
            caz3T8.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz3T6.style.display = "none";
        }
    }
    else if (caz3 == "p6") {
        caz3T4.style.display = "block";
        caz3T6.style.display = "block";
        caz3T7.style.display = "block";
        caz3T8.style.display = "block";
        caz3T9.style.display = "block";
        if (caz1 == "p5" || caz2 == "p5" || liebre == "p5") {
            caz3T4.style.display = "none";
        } if (caz1 == "p7" || caz2 == "p7" || liebre == "p7") {
            caz3T6.style.display = "none";
        } if (caz1 == "p2" || caz2 == "p2" || liebre == "p2") {
            caz3T7.style.display = "none";
        } if (caz1 == "p3" || caz2 == "p3" || liebre == "p3") {
            caz3T8.style.display = "none";
        } if (caz1 == "p4" || caz2 == "p4" || liebre == "p4") {
            caz3T9.style.display = "none";
        }
    }
    else if (caz3 == "p7") {
        caz3T4.style.display = "block";
        caz3T8.style.display = "block";
        if (caz1 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz3T4.style.display = "none";
        } if (caz1 == "p4" || caz2 == "p4" || liebre == "p4") {
            caz3T8.style.display = "none";
        }
    }
    else if (caz3 == "p8") {
        caz3T6.style.display = "block";
        caz3T8.style.display = "block";
        caz3T9.style.display = "block";
        if (caz1 == "p9" || caz2 == "p9" || liebre == "p9") {
            caz3T6.style.display = "none";
        } if (caz1 == "p5" || caz2 == "p5" || liebre == "p5") {
            caz3T8.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz3T9.style.display = "none";
        }
    }
    else if (caz3 == "p9") {
        caz3T4.style.display = "block";
        caz3T6.style.display = "block";
        caz3T8.style.display = "block";
        if (caz1 == "p8" || caz2 == "p8" || liebre == "p8") {
            caz3T4.style.display = "none";
        } if (caz1 == "p10" || caz2 == "p10" || liebre == "p10") {
            caz3T6.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz3T8.style.display = "none";
        }
    }
    else if (caz3 == "p10") {
        caz3T4.style.display = "block";
        caz3T7.style.display = "block";
        caz3T8.style.display = "block";
        if (caz1 == "p9" || caz2 == "p9" || liebre == "p9") {
            caz3T4.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || liebre == "p6") {
            caz3T7.style.display = "none";
        } if (caz1 == "p7" || caz2 == "p7" || liebre == "p7") {
            caz3T8.style.display = "none";
        }
    }
}

function ocultarTeclasCaz() {
    for (i=0; i<teclasCaz.length; i++) {
        teclasCaz[i].style.display = "none";
    }
    for (i=0; i<teclasLie.length; i++) {
        teclasLie[i].style.display = "none";
    }
    for (i=0; i<e5caz.length; i++) {
        e5caz[i].style.display = "none";
    }
    if (liebre == "p1") {
        lieT1.style.display = "block";
        lieT2.style.display = "block";
        lieT3.style.display = "block";
        if (caz1 == "p2" || caz2 == "p2" || caz3 == "p2") {
            lieT1.style.display = "none";
        } if (caz1 == "p3" || caz2 == "p3" || caz3 == "p3") {
            lieT2.style.display = "none";
        } if (caz1 == "p4" || caz2 == "p4" || caz3 == "p4") {
            lieT3.style.display = "none";
        }
    } else if (liebre == "p2") {
        lieT2.style.display = "block";
        lieT3.style.display = "block";
        lieT6.style.display = "block";
        lieT9.style.display = "block";
        if (caz1 == "p5" || caz2 == "p5" || caz3 == "p5") {
            lieT2.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT3.style.display = "none";
        } if (caz1 == "p3" || caz2 == "p3" || caz3 == "p3") {
            lieT6.style.display = "none";
        } if (caz1 == "p1" || caz2 == "p1" || caz3 == "p1") {
            lieT9.style.display = "none";
        }

    } else if (liebre == "p3") {
        lieT2.style.display = "block";
        lieT4.style.display = "block";
        lieT6.style.display = "block";
        lieT8.style.display = "block";
        if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT2.style.display = "none";
        } if (caz1 == "p2" || caz2 == "p2" || caz3 == "p2") {
            lieT4.style.display = "none";
        } if (caz1 == "p4" || caz2 == "p4" || caz3 == "p4") {
            lieT6.style.display = "none";
        } if (caz1 == "p1" || caz2 == "p1" || caz3 == "p1") {
            lieT8.style.display = "none";
        }

    } else if (liebre == "p4") {
        lieT1.style.display = "block";
        lieT2.style.display = "block";
        lieT4.style.display = "block";
        lieT7.style.display = "block";
        if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT1.style.display = "none";
        } if (caz1 == "p7" || caz2 == "p7" || caz3 == "p7") {
            lieT2.style.display = "none";
        } if (caz1 == "p3" || caz2 == "p3" || caz3 == "p3") {
            lieT4.style.display = "none";
        } if (caz1 == "p1" || caz2 == "p1" || caz3 == "p1") {
            lieT7.style.display = "none";
        }
    }
    else if (liebre == "p5") {
        lieT2.style.display = "block";
        lieT6.style.display = "block";
        lieT8.style.display = "block";
        if (caz1 == "p8" || caz2 == "p8" || caz3 == "p8") {
            lieT2.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT6.style.display = "none";
        } if (caz1 == "p2" || caz2 == "p2" || caz3 == "p2") {
            lieT8.style.display = "none";
        }
    }
    else if (liebre == "p6") {
        lieT1.style.display = "block";
        lieT2.style.display = "block";
        lieT3.style.display = "block";
        lieT4.style.display = "block";
        lieT6.style.display = "block";
        lieT7.style.display = "block";
        lieT8.style.display = "block";
        lieT9.style.display = "block";
        if (caz1 == "p8" || caz2 == "p8" || caz3 == "p8") {
            lieT1.style.display = "none";
        } if (caz1 == "p9" || caz2 == "p9" || caz3 == "p9") {
            lieT2.style.display = "none";
        } if (caz1 == "p10" || caz2 == "p10" || caz3 == "p10") {
            lieT3.style.display = "none";
        } if (caz1 == "p5" || caz2 == "p5" || caz3 == "p5") {
            lieT4.style.display = "none";
        } if (caz1 == "p7" || caz2 == "p7" || caz3 == "p7") {
            lieT6.style.display = "none";
        } if (caz1 == "p2" || caz2 == "p2" || caz3 == "p2") {
            lieT7.style.display = "none";
        } if (caz1 == "p3" || caz2 == "p3" || caz3 == "p3") {
            lieT8.style.display = "none";
        } if (caz1 == "p4" || caz2 == "p4" || caz3 == "p4") {
            lieT9.style.display = "none";
        }
    }
    else if (liebre == "p7") {
        lieT2.style.display = "block";
        lieT4.style.display = "block";
        lieT8.style.display = "block";
        if (caz1 == "p10" || caz2 == "p10" || caz3 == "p10") {
            lieT2.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT4.style.display = "none";
        } if (caz1 == "p4" || caz2 == "p4" || caz3 == "p4") {
            lieT8.style.display = "none";
        }
    }
    else if (liebre == "p8") {
        lieT3.style.display = "block";
        lieT6.style.display = "block";
        lieT8.style.display = "block";
        lieT9.style.display = "block";
        if (caz1 == "p11" || caz2 == "p11" || caz3 == "p11") {
            lieT3.style.display = "none";
        } if (caz1 == "p9" || caz2 == "p9" || caz3 == "p9") {
            lieT6.style.display = "none";
        } if (caz1 == "p5" || caz2 == "p5" || caz3 == "p5") {
            lieT8.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT9.style.display = "none";
        }
    }
    else if (liebre == "p9") {
        lieT2.style.display = "block";
        lieT4.style.display = "block";
        lieT6.style.display = "block";
        lieT8.style.display = "block";
        if (caz1 == "p11" || caz2 == "p11" || caz3 == "p11") {
            lieT2.style.display = "none";
        } if (caz1 == "p8" || caz2 == "p8" || caz3 == "p8") {
            lieT4.style.display = "none";
        } if (caz1 == "p10" || caz2 == "p10" || caz3 == "p10") {
            lieT6.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT8.style.display = "none";
        }
    }
    else if (liebre == "p10") {
        lieT1.style.display = "block";
        lieT4.style.display = "block";
        lieT7.style.display = "block";
        lieT8.style.display = "block";
        if (caz1 == "p11" || caz2 == "p11" || caz3 == "p11") {
            lieT1.style.display = "none";
        } if (caz1 == "p9" || caz2 == "p9" || caz3 == "p9") {
            lieT4.style.display = "none";
        } if (caz1 == "p6" || caz2 == "p6" || caz3 == "p6") {
            lieT7.style.display = "none";
        } if (caz1 == "p7" || caz2 == "p7" || caz3 == "p7") {
            lieT8.style.display = "none";
        }
    }
    else if (liebre == "p11") {
        lieT7.style.display = "block";
        lieT8.style.display = "block";
        lieT9.style.display = "block";
        if (caz1 == "p8" || caz2 == "p8" || caz3 == "p8") {
            lieT7.style.display = "none";
        } if (caz1 == "p9" || caz2 == "p9" || caz3 == "p9") {
            lieT8.style.display = "none";
        } if (caz1 == "p10" || caz2 == "p10" || caz3 == "p10") {
            lieT9.style.display = "none";
        }
    }
}







function verResultados() {
    if (turno == 10 || liebre == "p11") {
        winLiebre();
    } else if (lieT1.style.display == "none" && lieT2.style.display == "none" && lieT3.style.display == "none" && lieT4.style.display == "none" && lieT6.style.display == "none" && lieT7.style.display == "none" && lieT8.style.display == "none" && lieT9.style.display == "none") {
        winCazador();
    }
}



function winLiebre () {
    let contLie = document.querySelector(".cont-lie");
    let contLieHijo = document.querySelector(".cont-lie div");

    contLie.style.display = "flex";
    contLieHijo.style.transform = "translateY(25%)";
}
function winCazador () {
    let contCaz = document.querySelector(".cont-caz");
    let contCazHijo = document.querySelector(".cont-caz div");

    contCaz.style.display = "flex";
    contCazHijo.style.transform = "translateY(25%)";
}