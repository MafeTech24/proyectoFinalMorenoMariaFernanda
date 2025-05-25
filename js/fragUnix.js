let fragUnisex = document.getElementById("frag-unisex1")
fragUnisex.innerHTML = `<p class="texto">Explora el equilibrio perfecto entre lo masculino y lo femenino con nuestra colección de fragancias unisex.
Aromas versátiles, modernos y elegantes que se adaptan a cualquier estilo y personalidad.
Desde esencias frescas y cítricas hasta combinaciones amaderadas y especiadas, cada perfume es una invitación a romper estereotipos y expresar tu autenticidad.
Elige tu esencia sin etiquetas y haz que tu aroma hable por ti.</p>`

const tarjetasUnix = []
let fraganciasUnisexs = document.getElementById("frag-unisex")
fraganciasUnisexs.className = "fraganciasUnix"
fetch("../baseDatos/fragUni.json")
    .then(response => response.json())
    .then(data => {
        data.forEach((unisex) => {
            const tarjetasUnisx = document.createElement("section")
            tarjetasUnisx.className = "tarjeta"
            tarjetasUnisx.innerHTML = `<img src=${unisex.img} class="imagen">
                                 <h4>${unisex.marca}</h4>
                                 <h5>${unisex.nombre}</h5>
                                 <p id="precio">$${unisex.precio}</p>
                                 <button class="agrega2" id=${unisex.codigo}>Agregar al Carrito</button>
                                 <button class="agregaC"><a href="../html/carrito.html">Ir al Carrito</a></button>`
            fraganciasUnisexs.appendChild(tarjetasUnisx)
            tarjetasUnisx.className = "tarjeta"
        })
        añadirAlCarritoUnx (data)
    })

function añadirAlCarritoUnx (data) {
    agregaCarritoUnx = document.querySelectorAll(".agrega2")
    agregaCarritoUnx.forEach (button => {
        button.onclick = (e) => {
            const unixCodigo = e.currentTarget.id
            const agregarProdUnx = data.find (unisex => unisex.codigo === unixCodigo)
            tarjetasUnix.push(agregarProdUnx)
            console.log(tarjetasUnix)
            localStorage.setItem("tarjetasUnix", JSON.stringify(tarjetasUnix))
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

