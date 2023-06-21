
infos = [];
infos = document.querySelectorAll('.info');

function abrir(posicion) {
    infos[posicion].style.display = "flex";
}

function cerrar() {
    for (i=0; i<infos.length; i++) {
        infos[i].style.display = "none";
    }
}

function decimales (numero, decimales) {
    let d = Math.pow(10, decimales);
    return Math.round(numero*d)/d;
}


// LAB2

function calcular2() {
    // Datos
    let indice = document.querySelector(".dato1");
    let y = document.querySelector(".dato2");
    let s = document.querySelector(".dato3");
    let yPrima = document.querySelector(".dato4");

    // Resultados
    let objFocal = document.querySelector(".res1");
    let objCurvatura = document.querySelector(".res2");
    let objPotencia = document.querySelector(".res3");
    let objTamañoImagen = document.querySelector(".res4");
    let objAumentoImagen = document.querySelector(".res5");
    let objCaracImagen = document.querySelector(".res6");

    indice = indice.value;
    y = y.value;
    s = s.value;
    yPrima = yPrima.value;

    let M = yPrima/y;
    let sPrima = s*M;
    let focal = Math.pow((1/s)+(1/sPrima),-1);
    let potencia = Math.pow((focal/100),-1)
    let R = (indice-1.0) * 2.0 * focal;

    objFocal.value = Math.round(focal*1000)/1000;
    objCurvatura.value = Math.round(R*1000)/1000;
    objPotencia.value = Math.round(potencia*1000)/1000;
    objTamañoImagen.value = Math.round(yPrima*1000)/1000;
    objAumentoImagen.value = Math.round(Math.abs(M)*1000)/1000;
    objCaracImagen.value = "invertida";
}

function limpiar2() {
    // Datos
    let indice = document.querySelector(".dato1");
    let y = document.querySelector(".dato2");
    let s = document.querySelector(".dato3");
    let yPrima = document.querySelector(".dato4");

    // Resultados
    let objFocal = document.querySelector(".res1");
    let objCurvatura = document.querySelector(".res2");
    let objPotencia = document.querySelector(".res3");
    let objTamañoImagen = document.querySelector(".res4");
    let objAumentoImagen = document.querySelector(".res5");
    let objCaracImagen = document.querySelector(".res6");


    indice.value = "";
    y.value = "";
    s.value = "";
    yPrima.value = "";

    objFocal.value = "";
    objCurvatura.value = "";
    objPotencia.value = "";
    objTamañoImagen.value = "";
    objAumentoImagen.value = "";
    objCaracImagen.value = "";
}


// LAB3

function calcular3() {
    // Datos
    let amperioRes = document.querySelector(".dato5");
    let amperioMot = document.querySelector(".dato6");
    let amperioBom1 = document.querySelector(".dato7");
    let amperioBom2 = document.querySelector(".dato8");

    // Resultados
    let objVoltajeBom1 = document.querySelector(".res7");
    let objCorrienteBom1 = document.querySelector(".res8");
    let objPotenciaBom1 = document.querySelector(".res9");
    let objVoltajeBom2 = document.querySelector(".res10");
    let objCorrienteBom2 = document.querySelector(".res11");
    let objPotenciaBom2 = document.querySelector(".res12");
    let objVoltajeMot = document.querySelector(".res13");
    let objCorrienteMot = document.querySelector(".res14");
    let objPotenciaMot = document.querySelector(".res15");
    let objVoltajeRes = document.querySelector(".res16");
    let objCorrienteRes = document.querySelector(".res17");
    let objPotenciaRes = document.querySelector(".res18");

    let v = 12.0;
    amperioRes = amperioRes.value;
    amperioMot = amperioMot.value;
    amperioBom1 = amperioBom1.value;
    amperioBom2 = amperioBom2.value;

    

    objVoltajeRes.value = v;
    objCorrienteRes.value = amperioRes;
    objPotenciaRes.value = Math.round(v*amperioRes*1000)/1000;
    objVoltajeMot.value = v;
    objCorrienteMot.value = amperioMot;
    objPotenciaMot.value = Math.round(v*amperioMot*1000)/1000;
    objVoltajeBom1.value = v;
    objCorrienteBom1.value = amperioBom1;
    objPotenciaBom1.value = Math.round(v*amperioBom1*1000)/1000;
    objVoltajeBom2.value = v;
    objCorrienteBom2.value = amperioBom2;
    objPotenciaBom2.value = Math.round(v*amperioBom2*1000)/1000;
}

function limpiar3() {
    // Datos
    let amperioRes = document.querySelector(".dato5");
    let amperioMot = document.querySelector(".dato6");
    let amperioBom1 = document.querySelector(".dato7");
    let amperioBom2 = document.querySelector(".dato8");

    // Resultados
    let objVoltajeRes = document.querySelector(".res7");
    let objCorrienteRes = document.querySelector(".res8");
    let objPotenciaRes = document.querySelector(".res9");
    let objVoltajeMot = document.querySelector(".res10");
    let objCorrienteMot = document.querySelector(".res11");
    let objPotenciaMot = document.querySelector(".res12");
    let objVoltajeBom1 = document.querySelector(".res13");
    let objCorrienteBom1 = document.querySelector(".res14");
    let objPotenciaBom1 = document.querySelector(".res15");
    let objVoltajeBom2 = document.querySelector(".res16");
    let objCorrienteBom2 = document.querySelector(".res17");
    let objPotenciaBom2 = document.querySelector(".res18");

    amperioRes.value = "";
    amperioMot.value = "";
    amperioBom1.value = "";
    amperioBom2.value = "";

    objVoltajeRes.value = "";
    objCorrienteRes.value = "";
    objPotenciaRes.value = "";
    objVoltajeMot.value = "";
    objCorrienteMot.value = "";
    objPotenciaMot.value = "";
    objVoltajeBom1.value = "";
    objCorrienteBom1.value = "";
    objPotenciaBom1.value = "";
    objVoltajeBom2.value = "";
    objCorrienteBom2.value = "";
    objPotenciaBom2.value = "";
}



// LAB 4

function calcular4 () {
    // Datos
    let v1 = document.querySelector(".dato9");
    let c1 = document.querySelector(".dato10");
    let v2 = document.querySelector(".dato11");
    let c2 = document.querySelector(".dato12");
    let v3 = document.querySelector(".dato13");
    let c3 = document.querySelector(".dato14");

    v1 = Math.abs(v1.value);
    c1 = Math.abs(c1.value);
    v2 = Math.abs(v2.value);
    c2 = Math.abs(c2.value);
    v3 = Math.abs(v3.value);
    c3 = Math.abs(c3.value);

    // Resultados
    let objR1 = document.querySelector(".res19");
    let objV1 = document.querySelector(".res20");
    let objC1 = document.querySelector(".res21");
    let objR2 = document.querySelector(".res22");
    let objV2 = document.querySelector(".res23");
    let objC2 = document.querySelector(".res24");
    let objR3 = document.querySelector(".res25");
    let objV3 = document.querySelector(".res26");
    let objC3 = document.querySelector(".res27");

    let a1 = c1/1000;
    let a2 = c2/1000;
    let a3 = c3/1000;
    
    let r1 = v1/a1;
    let r2 = v2/a2;
    let r3 = v3/a3;

    objR1.value = decimales(r1,1);
    objV1.value = decimales(v1,3);
    objC1.value = decimales(a1,6);
    objR2.value = decimales(r2,1);
    objV2.value = decimales(v2,3);
    objC2.value = decimales(a2,6);
    objR3.value = decimales(r3,1);
    objV3.value = decimales(v3,3);
    objC3.value = decimales(a3,6);
}

function limpiar4() {
    // Datos
    let v1 = document.querySelector(".dato9");
    let c1 = document.querySelector(".dato10");
    let v2 = document.querySelector(".dato11");
    let c2 = document.querySelector(".dato12");
    let v3 = document.querySelector(".dato13");
    let c3 = document.querySelector(".dato14");

    v1.value = "";
    c1.value = "";
    v2.value = "";
    c2.value = "";
    v3.value = "";
    c3.value = "";

    // Resultados
    let objR1 = document.querySelector(".res19");
    let objV1 = document.querySelector(".res20");
    let objC1 = document.querySelector(".res21");
    let objR2 = document.querySelector(".res22");
    let objV2 = document.querySelector(".res23");
    let objC2 = document.querySelector(".res24");
    let objR3 = document.querySelector(".res25");
    let objV3 = document.querySelector(".res26");
    let objC3 = document.querySelector(".res27");

    objR1.value = "";
    objV1.value = "";
    objC1.value = "";
    objR2.value = "";
    objV2.value = "";
    objC2.value = "";
    objR3.value = "";
    objV3.value = "";
    objC3.value = "";
}





// LAB7

function calcular7() {
    // Datos
    let r1 = document.querySelector(".dato15");
    let r2 = document.querySelector(".dato16");
    let r3 = document.querySelector(".dato17");
    let r4 = document.querySelector(".dato18");
    let r5 = document.querySelector(".dato19");
    let v = document.querySelector(".dato20");

    r1 = parseInt(r1.value);
    r2 = parseInt(r2.value);
    r3 = parseInt(r3.value);
    r4 = parseInt(r4.value);
    r5 = parseInt(r5.value);
    v = parseInt(v.value);

    // Resultados
    let objC1 = document.querySelector(".res28")
    let objP1 = document.querySelector(".res29")
    let objC2 = document.querySelector(".res30")
    let objP2 = document.querySelector(".res31")
    let objC3 = document.querySelector(".res32")
    let objP3 = document.querySelector(".res33")
    let objC4 = document.querySelector(".res34")
    let objP4 = document.querySelector(".res35")
    let objC5 = document.querySelector(".res36")
    let objP5 = document.querySelector(".res37")
    let objCG = document.querySelector(".res38")
    let objPG = document.querySelector(".res39")

    let i1 = v/r1;
    let i2 = v/r2;
    let i3 = v/r3;
    let r45 = r4+r5;
    let i45 = v/r45;
    let iG = i1 + i2 + i3 + i45;

    let p1 = r1*Math.pow(i1,2);
    let p2 = r2*Math.pow(i2,2);
    let p3 = r3*Math.pow(i3,2);
    let p4 = r4*Math.pow(i45,2);
    let p5 = r5*Math.pow(i45,2);
    let pG = v*iG;

    objC1.value = decimales(i1*1000,3);
    objP1.value = decimales(p1*1000,3);
    objC2.value = decimales(i2*1000,3);
    objP2.value = decimales(p2*1000,3);
    objC3.value = decimales(i3*1000,3);
    objP3.value = decimales(p3*1000,3);
    objC4.value = decimales(i45*1000,3);
    objP4.value = decimales(p4*1000,3);
    objC5.value = decimales(i45*1000,3);
    objP5.value = decimales(p5*1000,3);
    objCG.value = decimales(iG*1000,3);
    objPG.value = decimales(pG*1000,3);
}




// LAB7}8

function calcular8() {
    // Datos
    let r1 = document.querySelector(".dato21");
    let r2 = document.querySelector(".dato22");
    let r3 = document.querySelector(".dato23");
    let r4 = document.querySelector(".dato24");
    let r5 = document.querySelector(".dato25");
    let v = document.querySelector(".dato26");

    r1 = parseInt(r1.value);
    r2 = parseInt(r2.value);
    r3 = parseInt(r3.value);
    r4 = parseInt(r4.value);
    r5 = parseInt(r5.value);
    v = parseInt(v.value);

    // Resultados
    let objV1 = document.querySelector(".res40")
    let objP1 = document.querySelector(".res41")
    let objV2 = document.querySelector(".res42")
    let objP2 = document.querySelector(".res43")
    let objV3 = document.querySelector(".res44")
    let objP3 = document.querySelector(".res45")
    let objV4 = document.querySelector(".res46")
    let objP4 = document.querySelector(".res47")
    let objV5 = document.querySelector(".res48")
    let objP5 = document.querySelector(".res49")
    let objPG = document.querySelector(".res50")

    let i1 = v/r1;
    let i2 = v/r2;
    let i3 = v/r3;
    let r45 = r4+r5;
    let i45 = v/r45;
    let iG = i1 + i2 + i3 + i45;

    let p1 = r1*Math.pow(i1,2);
    let p2 = r2*Math.pow(i2,2);
    let p3 = r3*Math.pow(i3,2);
    let p4 = r4*Math.pow(i45,2);
    let p5 = r5*Math.pow(i45,2);
    let pG = v*iG;

    objV1.value = v;
    objP1.value = decimales(p1*1000,3);
    objV2.value = v;
    objP2.value = decimales(p2*1000,3);
    objV3.value = v;
    objP3.value = decimales(p3*1000,3);
    objV4.value = decimales(r4*i45,3);
    objP4.value = decimales(p4*1000,3);
    objV5.value = decimales(r5*i45,3);
    objP5.value = decimales(p5*1000,3);
    objPG.value = decimales(pG*1000,3);
}