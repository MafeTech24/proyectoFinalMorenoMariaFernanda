let fragMasc = document.getElementById("frag-masc1")
fragMasc.innerHTML = `<p class="texto">Descubre nuestra selección de perfumes masculinos diseñados para destacar la fuerza, elegancia y autenticidad del hombre moderno.
Desde notas frescas y cítricas hasta aromas intensos y amaderados, cada fragancia transmite personalidad y carácter.
Trabajamos con marcas nacionales e importadas que garantizan calidad, duración y estilo.
Encuentra el aroma perfecto para cada ocasión y deja una impresión que perdure.</p>`

const tarjetasMasc = []
let fraganciasMasculinas = document.getElementById("frag-masc")
fraganciasMasculinas.className = "fraganciasMasc"
fetch("../baseDatos/fragMasc.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((masculino) => {
            const tarjetaMs = document.createElement("section")
            tarjetaMs.className = "tarjeta"
            tarjetaMs.innerHTML = `<img src=${masculino.img} class="imagen">
                                 <h4>${masculino.marca}</h4>
                                 <h5>${masculino.nombre}</h5>
                                 <p id="precio">$${masculino.precio}</p>
                                 <button class="agrega1" id=${masculino.codigo}>Agregar al Carrito</button>
                                 <button class="agregaC"><a href="../html/carrito.html">Ir al Carrito</a></button>`
            fraganciasMasculinas.appendChild(tarjetaMs)
            tarjetaMs.className = "tarjeta"
        })
        añadirAlCarritoMs (data)
    })

function añadirAlCarritoMs (data) {
    agregaCarritoMs = document.querySelectorAll(".agrega1")
    agregaCarritoMs.forEach (button => {
        button.onclick = (e) => {
            const mascCodigo = e.currentTarget.id
            const agregarProdMs = data.find (masculino => masculino.codigo === mascCodigo)
            tarjetasMasc.push(agregarProdMs)
            console.log(tarjetasMasc)
            localStorage.setItem("tarjetasMasc", JSON.stringify(tarjetasMasc))
            alertAgregado()
        }
    })
}

/***** Producto Agregado con Exito *******/
const alertAgregado = () => {
    Swal.fire({                
        title: "Producto Agregado con ÉXITO",
        icon: "success",
        background: "rgb(238, 250, 248)"
      });
};

/***** Acceso al Formulario para Iniciar Sesión */                     
const loguin = document.getElementById("loginIcon")
loguin.addEventListener("click", iniciarSesion)
function iniciarSesion() {
    Swal.fire({
        title: 'Iniciar sesión',
        html:
          '<input id="usuario" class="swal2-input" placeholder="Usuario">' +
            '<input id="clave" type="password" class="swal2-input" placeholder="Contraseña">',            
        showCancelButton: true,
        confirmButtonText: 'Ingresar',
        preConfirm: () => {
          const usuario = document.getElementById('usuario').value;
          const clave = document.getElementById('clave').value;
          if (!usuario || !clave) {
            Swal.showValidationMessage('Completa ambos campos');
          }
          return { usuario, clave };
        }
      });
}
/****** Acceso al Formulario para Registrarse y Crear Nueva Cuenta *****/
const registrarse = document.getElementById("registrarse")
registrarse.addEventListener("click", registrar)
function registrar() {    
    Swal.fire({
        title: 'Registro de Cuenta Nueva',
        html:
          '<input id="nombre" class="swal2-input" placeholder="Nombre">' +
          '<input id="apellido" class="swal2-input" placeholder="Apellido">' +
          '<input id="email" type="email" class="swal2-input" placeholder="Correo electrónico">' +
          '<input id="telefono" class="swal2-input" placeholder="Teléfono">' +
          '<input id="password" type="password" class="swal2-input" placeholder="Contraseña">',          
        confirmButtonText: 'Registrarse',
        showCancelButton: true,
        preConfirm: () => {
          const nombre = document.getElementById('nombre').value;
          const apellido = document.getElementById('apellido').value;
          const email = document.getElementById('email').value;
          const telefono = document.getElementById('telefono').value;
          const password = document.getElementById('password').value;
          
      
          if (!nombre || !apellido || !email || !telefono || !password) {
            Swal.showValidationMessage('Por favor, completa todos los campos');
            return false;
          }
      
          return { nombre, apellido, email, telefono, password };
        }
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Se ha Registrado con Éxito!",
                icon: "success",
                confirmButtonText: "Ingresar"
              });
        }
      });
      

    }

