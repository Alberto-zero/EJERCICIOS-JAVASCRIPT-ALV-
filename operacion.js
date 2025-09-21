//ejercicio 1
function interes(){
    let capital = parseFloat(document.getElementById("capital").value);
    const tasa = 0.2;
    //validar que el capital sea un numero y no sea negativo o nulo
    if(isNaN(capital) || capital <= 0){
        alert("El capital debe ser un numero positivo");
        return;
    }else{
        let interes = capital * tasa;
        let total = capital + interes;
        document.getElementById("resultado1").innerHTML = `La ganancia es: ${total}`;
    }
}

//ejercicio 2
function comision() {
      let sueldo = Number(document.getElementById("sueldoNeto").value);
      let v1 = Number(document.getElementById("venta1").value);
      let v2 = Number(document.getElementById("venta2").value);
      let v3 = Number(document.getElementById("venta3").value);
      //validar que el sueldo y las ventas  sean no negativos o nulos
      if (sueldo <=0 ||  v1 <=0  || v2 <= 0 || v3 <= 0) {
        alert("El sueldo y las ventas deben ser numeros positivos");
        return;
      }else{
        let comision = (v1 + v2 + v3) * 0.10;
        let total = sueldo + comision;
        document.getElementById("resultado2").innerText = "Comisión: " + comision + " | Total: " + total;
      }
}

//ejercicio 3
function descuento() {

    let precio = Number(document.getElementById("precio").value);
    //validar que el precio no sea negativo o nulo
    if (precio <= 0) {
        alert("El precio debe ser un numero positivo");
        return;
    }else{
        let descuento = precio * 0.15;
        let total = precio - descuento;
        document.getElementById("resultado3").innerText = "Descuento: " + descuento + " | Total a pagar: " + total;
    }
}    
//ejercicio 4
function calificacion(){
    let p1 = parseFloat(document.getElementById("parcial1").value);
    let p2 = parseFloat(document.getElementById("parcial2").value);
    let p3 = parseFloat(document.getElementById("parcial3").value);
    let ex = parseFloat(document.getElementById("examenFinal").value);
    let t = parseFloat(document.getElementById("trabajoFinal").value);
    //validar que las calificaciones no sean negativas o nulas y que no sean mayores a 10
    if(isNaN(p1) || isNaN(p2) || isNaN(p3) || isNaN(ex) || isNaN(t) || p1 < 0 || p2 < 0 || p3 < 0 || ex < 0 || t < 0 || p1 > 10 || p2 > 10 || p3 > 10 || ex > 10 || t > 10){
        alert("Las calificaciones deben ser numeros entre 0 y 10");
        return;
    }else{
        let promedioParciales = (p1 + p2 + p3) / 3;
        let promedioFinal = (promedioParciales * 0.55) + (ex * 0.30) + (t * 0.15);
        //redondear a 2 decimales
        document.getElementById("resultado4").innerHTML = `La calificación final es: ${promedioFinal.toFixed(2)}`;
    }
}

//ejercicio 5
function edadHoy(){
    let nacimiento = new Date(document.getElementById("nacimiento").value);
    let hoy = new Date();
    //validar que la fecha de nacimiento no sea mayor a la fecha actual y no nula
    if(isNaN(nacimiento.getTime()) || nacimiento > hoy){
        alert("La fecha de nacimiento no es válida");
        return;
    }else{
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        let mes = hoy.getMonth() - nacimiento.getMonth();
        //evaluar si ya paso su cumpleaños este año
        if(hoy.getMonth() < nacimiento.getMonth() || (hoy.getMonth() === nacimiento.getMonth() && hoy.getDate() < nacimiento.getDate())){
            edad--;
        }
        document.getElementById("resultado5").innerHTML = `Tu edad es: ${edad} años`;
    }
    
}

//ejercicio 6{
function convertir(){
    let numero=document.getElementById("number").value;
    //validar que la cadena no sea nula o vacia
    if(numero.trim() === ""){
        alert("La cadena no puede estar vacía");
        return;
    }else{
        //banco de palabras  y su valor numerico
        const numeros={
            "cero":0,
            "uno":1,
            "dos":2,
            "tres":3,
            "cuatro":4,
            "cinco":5,
            "seis":6,
            "siete":7,
            "ocho":8,
            "nueve":9,
            "diez":10,
        }
        let valor=numeros[numero.toLowerCase()];
        if(valor === undefined){
            document.getElementById("resultado6").innerHTML = "El valor numérico es:-1";
        }else{
            document.getElementById("resultado6").innerHTML = `El valor numérico es: ${valor}`;
        }

    }
}

//ejercicio 7
function horasExtras(){
    let horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
    let salarioHora = parseFloat(document.getElementById("salarioHora").value);
    //validar que las horas trabajadas y el salario por hora sean numeros y no sean negativos o nulos
    if(isNaN(horasTrabajadas) || isNaN(salarioHora) || horasTrabajadas <= 0 || salarioHora <= 0){
        alert("Las horas trabajadas y el salario por hora deben ser numeros positivos");
        return;
    }else{
        let salario;
        //si son mayores a 40 se el resto se le paga DOBLE
        if(horasTrabajadas > 40){
            let extras = horasTrabajadas - 40;
            salario = (40 * salarioHora) + (extras * salarioHora * 2);
            //si exceden 48 se le paga TRIPLE
            if(horasTrabajadas > 48){
                let extras = horasTrabajadas - 48;
                salario = (40 * salarioHora) + (8 * salarioHora * 2) + (extras * salarioHora * 3);
            }
        }else{
            salario = horasTrabajadas * salarioHora;
        }
        document.getElementById("resultado7").innerHTML = `El salario total es: ${salario}`;
    }
}

//ejercicio 8
function utilidades(){
    let salario = parseFloat(document.getElementById("salarioMensual").value);
    let antiguedad = parseFloat(document.getElementById("años").value);
    //validar que el salario y la antiguedad sean numeros y no sean negativos o nulos
    if(isNaN(salario) || isNaN(antiguedad) || salario <= 0 || antiguedad < 0){
        alert("El salario debe ser un numero positivo y la antiguedad no puede ser negativa");
        return;
    }else{
        let utilidades;
        if(antiguedad < 1){
            utilidades = salario * 0.05;
        }else if(antiguedad >= 1 && antiguedad < 2){
            utilidades = salario * 0.07;
        }else if(antiguedad >= 2 && antiguedad < 5){
            utilidades = salario * 0.10;
        }else if(antiguedad >= 5 && antiguedad < 10){
            utilidades = salario * 0.15;
        }else if(antiguedad >= 10){
            utilidades = salario * 0.20;
        }
        document.getElementById("resultado8").innerHTML = `Las utilidades son: ${utilidades} y el salario total es: ${salario + utilidades}`;
    }    

}

//ejercicio 9
function validar(){
    let nombre = document.getElementById("nombre").value;
    let pass = document.getElementById("password").value;
    let correo = document.getElementById("email").value;
    let cometario = document.getElementById("comentario").value;
    //validar que los campos no sean nulos o vacios
    if(nombre.trim() === "" || pass.trim() === "" || correo.trim() === "" || cometario.trim() === ""){  
    
        alert("Todos los campos son obligatorios");
        return false;
    }else{
        //validar que el correo tenga un formato valido
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(correo)){
            alert("El correo no es válido");
            return false;
        }
        //validar que la contraseña tenga al menos 6 caracteres una mayuscula y un numero
        const regexPass = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if(!regexPass.test(pass)){
            alert("La contraseña debe tener al menos 6 caracteres, una mayúscula y un número");
            return false;
        }
        //validar que el comentario no exceda los 50 caracteres
        if(cometario.length > 50){
            alert("El comentario no debe exceder los 50 caracteres");
            return false;
        }
        //validar el acepto de terminos y condiciones
        if(!document.getElementById("acepto").checked){
            alert("Debe aceptar los términos y condiciones");
            return false;
        }
        alert("Formulario enviado correctamente");
        return false; //evitar que se envie el formulario y recargue la pagina
    }

}

//ejercicio 10
function quitarScript(){
    let texto = document.getElementById("html").value;
    //validar que el texto no sea nulo o vacio
    if(texto.trim() === ""){
        alert("El campo no puede estar vacío");
        return;
    }else{
        //remplazar todas las ocurrencias de <script> y </script> por una cadena vacia
        let resultado = texto.replace(/<script[\s\S]*?<\/script>/gi, "");
        document.getElementById("resultado10").innerText = resultado;
    }
}