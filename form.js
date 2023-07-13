//Captura los elementos del formulario//
const form = document.querySelector('form');

//Escucha el evento en el formulario//
form.addEventListener('submit', handleEnviar);


//Función que indica que se debe hacer cuando se guarda el form//
function handleEnviar(e) {
    e.preventDefault(); //Evita que se ejecute acción por defecto del evento//
    
    const user = {
        name: "",
        email: "", 
        phone: "",
        message: "",
    };

const userInfo = new FormData(form);
user.name= userInfo.get('Nombre');
user.email= userInfo.get('E-mail');
user.phone= userInfo.get('Telefono');
user.message= userInfo.get ('Mensaje');

console.log(user);
}