function val(form){

    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    let n=form.nom.value.trim()
    let m=form.em.value.trim()
    let p=form.pass.value.trim()
    let c=form.co.value.trim()

    if(n==="" || m==="" ||p==="" ||c==="" ){
        alert("Llene todos los campos")
        return false;
    }
    
     var cal= expReg.test(m)
     if(cal==false){
        alert("El correo ingresado no es valido")
        return false;
     }
     let uu = c.length
    
     if(uu>50){
        alert("Ha excedido el numero de caracteres permitidos para los comentarios")
        return false;
     }

     let pp=p.length
     if(pp<6){
        alert("Su contraseña debe tener minimo 6 caracteres")
     }

     let o
     let mi=0
     let ma=0
     let num=0
     for (let i = 0; i < pp; i++) {
       o = p.charAt(i).toUpperCase(); 
       if(p.charAt(i)===o){
            ma++;
       }
    }
    for (let i = 0; i < pp; i++) { 
        o= p.charAt(i).toLowerCase(); 
        if(p.charAt(i)===0){
             mi++;
        }
     }
    for (let i = 0; i < pp; i++) { 
        o= p.charAt(i); 
        if(NaN(o)){
             num++;
        }
    }
    if(ma==0){
        alert("Su contraseña debe tener minimo una mayuscula")
        return false;
    }
    if(mi==0){
        alert("Su contraseña debe tener minimo una minuscula")
        return false;
    }
    if(num==0){
        alert("Su contraseña debe tener minimo un digito")
        return false;
    }

}