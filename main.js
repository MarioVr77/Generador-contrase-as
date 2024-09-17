/*variable */
/*existe leguanjes que son exigentes para el ; javascrip puede llevar punto y coma*
/*por convencion se asigna el ;*/
/*GENERADOR PROYECTO BASE*/
/*PALABRA RESERVADA VAR Y LET , VAR GENERABA COMPLICACIONES GENERABA AVERTURA*/
/*depptooll es f12 del navegador-consola del desarrollador*/
/*variables tipos numericas y variables tipos */
/*con llaves lleva un bloque de instrucciones*/
/*sin llaves solo una instruccion*/
/*codigo pre construido de javascript */
/*length trae todo el tamaño de la cadena*/

let numeroDigitado = document.getElementById('cantidad');/*limitacion */
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generar () {
    let numeroDigitado = parseInt (cantidad.value);
    // console.log(numeroDigitado);
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");    
    }
    let password = '';
    for (let i = 0; i< numeroDigitado; i++) {
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        // console.log(caracterAleatorio);
        
        password+=caracterAleatorio;
    }

    contrasena.value = password;
    // console.log('password generada: ' + password)

}


/*Agregar símbolos especiales cómo !@#$%^&*() a la cadena de caracteres para que se
creen contraseñas más seguras.
Limpiar el campo de la contraseña, agregando un nuevo botón de limpiar.
Implementar una validación que avise al usuario si la contraseña generada es fuerte o débil 
(por ejemplo, si no contiene un número, o una letra mayúscula) y que muestre un mensaje donde 
informe que la contraseña es débil.*/