function edad() {
    const nac = document.getElementById("dn").value;
    const fn = new Date(nac);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fn.getFullYear();
    const mes = hoy.getMonth() - fn.getMonth();
    const ao = fn.getFullYear();

    if(ao<1900){
        alert("Ingrese una fecha valida, (la persona mas vieja registrada ha tenido 122 años)")
        return;
    }
    

    if (fn > hoy) {
        alert( "La fecha es de un dia futuro, por favor ingrese una fecha valida");
        return;
    }

    if (mes < 0 || (mes === 0 && hoy.getDate() < fn.getDate())) {
        edad--;
    }

    if (isNaN(edad) || edad < 0) {
        alert( "Error en el cálculo de la edad (seleccione una fecha)");
        return false;
    }
    alert("Tu edad es: "+ edad)

    //document.getElementById("resultado").innerHTML = `Tu edad es: ${edad} años.`;
}