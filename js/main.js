/***** Breve Descripción de la Empresa *******/
let presentacion = document.getElementById("presentación")
presentacion.innerHTML = `<p class="texto">Somos una distribuidora especializada en perfumes nacionales e importados, ofreciendo una amplia selección de fragancias femeninas, masculinas y unisex.
Trabajamos con marcas reconocidas y aromas exclusivos para satisfacer todos los gustos, desde lo clásico hasta lo más moderno.
Ya sea para uso personal, regalo o negocio, aquí encontrarás calidad, autenticidad y excelentes precios.
Descubre tu próxima fragancia con nosotros y déjate envolver por el arte del buen perfume.</p>
                          <img class="portada" src=./assets/portada2.webp>`


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