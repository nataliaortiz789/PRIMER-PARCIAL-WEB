$("#selh1").click(function (event) {
  $("#contenedor").load("selecciones/partido.html");
});

$("#selh2").click(function (event) {
  $("#contenedor").load("selecciones/contacto.html");
});

$("#selh3").click(function (event) {
  $("#contenedor").load("selecciones/colombia.html");
});

var part = "";
$.getJSON("../json/partidos.json", function (datos) {
  $("#contenido").html("");
  $.each(datos["partidos"], function (idx, partido) {
    $("#contenido").append(
      "<tr>" +
        "<td>" +
        partido["fecha"] +
        "</td><td>" +
        partido["equipo1"] +
        "</td><td>" +
        partido.equipo2 +
        "</td>" +
        "</tr>"
    );
  });
});
