function val(form){
    let cf
    let hh
    let ss
    let x
    let y
    let s=form.s.value.trim()
    let ht=form.ht.value.trim()

    if(s===""|| isNaN(s) || s<=0){
        alert("Por favor ingrese un sueldo valido")
        return false;
    }
    if(ht===""|| isNaN(ht) || ht<=0 || ht>=100){
        alert("Por favor ingrese una caatidad de horas valida y/o realista")
        return false;
    }

    cf=ht*s

    if(ht>40 && ht<=48){
        hh=ht-40
        ss=hh*2*s
        x=s*40
        cf= Number(x)+Number(ss)
    }
    if(ht>40 && ht>48){
        hh=ht-48
        y=16*s
        ss=hh*3*s
        x=s*40
        cf=Number(x)+Number(ss)+Number(y)
    }

    alert("Cantidad final: "+cf)
}