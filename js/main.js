$("#selh1").click(function (event) {
    $("#contenedor").load("selecciones/partido.html");
});

$("#selh2").click(function (event) {
    $("#contenedor").load("selecciones/contacto.html");
});

$("#selh3").click(function (event) {
    $("#contenedor").load("selecciones/colombia.html");
});

const tabla = document.querySelector('#lista-usuarios');

function cargarUsuarios() {
    fetch("http://demo6497253.mockable.io/noticias")
        .then((respuesta) => respuesta.json())
        .then((usuarios) => {
            usuarios.forEach((usuario) => {
                const row = document.createElement("tr");
                row.innerHTML += `
                <h5>${json[i].descripcion}</h5>
                <p>${json[i].detalle}</p>
                <img src='${json[i].img}'></img></div><hr>`;
                tabla.appendChild(row);
            });
        }) // Aquí mostramos dicha información
        .catch((error) => console.log("Hubo un error : " + error.message));
}

cargarUsuarios();

