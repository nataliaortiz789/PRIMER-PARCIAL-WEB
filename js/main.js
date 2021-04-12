$("#selh1").click(function (event) {
  $("#contenedor").load("selecciones/partido.html");
});

$("#selh2").click(function (event) {
  $("#contenedor").load("selecciones/contacto.html");
});

$("#selh3").click(function (event) {
  $("#contenedor").load("selecciones/colombia.html");
});

const tabla = document.querySelector('#lista-usuarios tbody');
function cargarUsuarios() {
  fetch("usuarios.json")
    .then((respuesta) => respuesta.json()) 
    .then((usuarios) => {
      usuarios.forEach((usuario) => {
        const row = document.createElement("tr");
        row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.company.name}</td>
                `;
        tabla.appendChild(row);
      });
    }) // Aquí mostramos dicha información
    .catch((error) => console.log("Hubo un error : " + error.message));
}

cargarUsuarios();

