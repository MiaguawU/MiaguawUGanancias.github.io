function tiempo() {
    let u
    let s = document.getElementById("s").value;
    let x=s
    
    const nac = document.getElementById("d1").value;
    const fn = new Date(nac);
    const hoy = new Date();

    let edad = hoy.getFullYear() - fn.getFullYear();
    const mes = hoy.getMonth() - fn.getMonth();
    const ao = fn.getFullYear();

    if(s===""|| isNaN(s) || s<=0){
        alert("Por favor ingrese un sueldo valido")
        return;
    }

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
        alert( "Error en el cálculo (seleccione una fecha)");
        return ;
    }
    if(edad===0){
        u= x*0.05;
    }
    if(edad>=1 && edad<2){
        u=x*0.07;
    }
    if(edad>=2 && edad<5){
        u=x*0.1;
    }
    if(edad>=5 && edad<10){
        u=x*0.15
    }
    if(edad>=10 ){
        u=x*0.2;
    }

    alert("La utilidad es: "+ u)

}