function letrasAnumeros() {
    let nuc = document.getElementById("nu").value;
    let cad = nuc.split(' ');
    let ncad = []; 
    let o;
    let om = 0; 
    let pp = cad.length;

    if (nuc === "") {
        alert("Ingrese la oración");
        return;
    }

    for (let i = 0; i < pp; i++) {
        o = cad[i];
        if (!isNaN(o)) { 
            om++;
        }
    }

    if (om >= 1) {
        alert("Escriba los números con letras");
        return false;
    }

    for (let i = 0; i < pp; i++) {
        o = cad[i].toLowerCase();
        if (o === "uno") {
            ncad[i] = '1';
        } 
        else if (o === "cero") {
            ncad[i] = '0';
        }
        else if (o === "dos") {
            ncad[i] = '2';
        } 
        else if (o === "tres") {
            ncad[i] = '3';
        } 
        else if (o === "cuatro") {
            ncad[i] = '4';
        } 
        else if (o === "cinco") {
            ncad[i] = '5';
        } 
        else if (o === "seis") {
            ncad[i] = '6';
        } 
        else if (o === "siete") {
            ncad[i] = '7';
        } 
        else if (o === "ocho") {
            ncad[i] = '8';
        } 
        else if (o === "nueve") {
            ncad[i] = '9';
        } 
        else {
            ncad[i] = '-1'; 
        }
    }

   
    alert("Números: " + ncad.join(', '));
}
