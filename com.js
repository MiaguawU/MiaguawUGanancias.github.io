
function cal(form){
    let cf
    let p1x
    let p1
    let p2
    let p3
    let c1=form.c1.value.trim()
    let c2=form.c2.value.trim()
    let c3=form.c3.value.trim()
    let xf=form.xf.value.trim()
    let tf=form.tf.value.trim()


    if(c1===""|| isNaN(c1) || c2===""|| isNaN(c2)  || c3===""|| isNaN(c3)  
        || xf===""|| isNaN(xf)  || tf===""|| isNaN(tf)  ){
        alert("Por favor ingrese una calificación valida")
        return false;
    }
    if(c1>10||c2>10||c3>10||xf>10||tf>10|| c1<0|| c2<0 || c3<0|| xf<0|| tf<0){
        alert("Por favor ingrese una calificación su máximo sea 10 y su mínimo sea 0")
        return false;
    }

    p1x= (Number(c1) + Number(c2) + Number(c3))/3
    p1= (p1x*0.55)
    p2= (xf*0.3)
    p3= (tf*0.15)

    cf = Number(p1) + Number(p2)+ Number(p3) 

    
    alert("Calificación final: "+cf)
}
function co(form){
    let sf
    let s=form.sueldo.value.trim()
    let c=form.comi.value.trim()

    if(s===""|| isNaN(s) || s<=0){
        alert("Por favor ingrese un sueldo valido")
        return false;
    }
    if(c===""|| isNaN(c) || c<=0){
        alert("Por favor ingrese un valor valido")
        return false;
    }

    sf = Number(s) + Number(c*(s*0.1) )    
    

    alert("Cantidad final: "+sf)
}
function ti(form){
    let sf
    let s=form.di.value.trim()

    if(s===""|| isNaN(s) || s<=0){
        alert("Por favor ingrese un valor valido")
        return false;
    }

    sf = Number(s) - Number(s*0.15)    
    

    alert("Total a pagar: "+sf)
}
function ban(form){
    let capf

    let cap1=form.capital1.value.trim()

    if(cap1===""|| isNaN(cap1) || cap1<=0){
        alert("Por favor ingrese un valor valido")
        return false;
    }

    let t1=form.tiempo1.value
    let t2=form.tiempo2.value
    if(t1==="Ninguno" || t2==="Ninguno"){
        alert("Por favor, seleccione una medida de tiempo")
        return false;
    }

    let inter = form.interes.value.trim()

    if(inter===""|| isNaN(inter)|| inter<=0|| inter>100){
        alert("Ingrese un interes valido")
        return false;
    }

    let t=form.tiempo.value.trim()

    if(t===""|| isNaN(t) || t<=0){
        alert("Por favor ingrese un valor valido")
        return false;
    }

    if(inter<=100 && inter>1){
        inter=inter/100
    }
    if(t1==="Anio" && t2==="Mes2" && t<12){
    
            alert("No es posible hacer una iversion en el tiempo indicado")
            return false
    
    
    }
    if(t1==="Anio" && t2==="Mes2" && t>12){
        
        t=t/12
    }
    


    let base = 1+inter
    capf= cap1* Math.pow (base, t)

    alert("El capital final es: "+ capf)

}