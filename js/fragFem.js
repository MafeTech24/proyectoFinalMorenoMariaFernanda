let descripcion = document.getElementById("descripcion")
descripcion.innerHTML = `<p class="texto">Sumérgete en el universo de la elegancia y la sensualidad con nuestra exclusiva colección de perfumes femeninos.
Desde aromas suaves y florales hasta notas intensas y sofisticadas, cada fragancia está pensada para resaltar tu esencia en cada momento del día.
Trabajamos con marcas nacionales e importadas reconocidas por su calidad y distinción.
Encuentra el perfume ideal que hable por ti… porque cada mujer merece dejar una huella inolvidable.</p>`

const tarjetasFem = []
let fraganciasFemeninas = document.getElementById("frag-fem")
fraganciasFemeninas.className = "fraganciasFem"
fetch("../baseDatos/fragFem.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((femenino) => {
            const tarjeta = document.createElement("section")
            tarjeta.className = "tarjeta"
            tarjeta.innerHTML = `<img src=${femenino.img} class="imagen">
                                 <h5>${femenino.marca}</h5>
                                 <h6>${femenino.nombre}</h6>
                                 <p id="precio">$${femenino.precio}</p>                                 
                                 <button class="agrega" id=${femenino.codigo}>Agregar al Carrito</button>
                                 <button class="agregaC"><a href="../html/carrito.html">Ir al Carrito</a></button>`
            fraganciasFemeninas.appendChild(tarjeta)
            tarjeta.className = "tarjeta"
        })
        añadirAlCarrito(data)
    })

function añadirAlCarrito (data) {
    agregaCarrito = document.querySelectorAll(".agrega")
    agregaCarrito.forEach (button => {
        button.onclick = (e) => {
            const femCodigo = e.currentTarget.id
            const agregarProd = data.find (femenino => femenino.codigo === femCodigo)
            tarjetasFem.push(agregarProd)
            console.log(tarjetasFem)
            localStorage.setItem("tarjetasFem", JSON.stringify(tarjetasFem)) 
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

