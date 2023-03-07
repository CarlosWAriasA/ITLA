$(document).ready(function () {
  // VARIABLES
  let valueNombre = "";
  let valueProvincia = "";
  let valueCiudad = "";
  let valueSector = "";
  let valueCalle = "";
  let valueCarrera = "";
  let valueRadio1 = "";
  let valueRadio2 = "";
  let valueRadio3 = "";
  let valueRadio4 = "";
  let valueRadio5 = "";
  let txtRadio1 = "";
  let txtRadio2 = "";
  let txtRadio3 = "";
  let txtRadio4 = "";
  let txtRadio5 = "";
  toastr.options = {
    positionClass: "toast-top-center",
    timeOut: "2500",
  };

  // EVENTOS
  $("#content-container").on(
    "click",
    "#container-form #btn-continuar",
    function () {
      Inscribir();
    }
  );

  $("#content-container").on(
    "click",
    "#container-form #btn-limpiar",
    function () {
      LimpiarCampos();
    }
  );

  $("#content-container").on(
    "click",
    "#container-inscripcion #btn-atras",
    function () {
      ObtenerCamposRadioCheck();
      GenerateHTMLForm();
    }
  );

  $("#content-container").on(
    "click",
    "#container-inscripcion #btn-continuar",
    function () {
      ObtenerCamposRadioCheck();
      GenerateHTMLConfirmation();
    }
  );

  $("#content-container").on(
    "click",
    "#container-confirmacion #btn-atras",
    function () {
      GenerateHTMLInscripcion();
    }
  );

  $("#content-container").on(
    "click",
    "#container-confirmacion #btn-finalizar",
    function () {
      $.confirm({
        title: "Estas seguro que deseas finalizar con esta inscripcion?",
        content: "",
        buttons: {
          cancel: {
            text: "Cancelar",
            btnClass: "btn btn-danger",
            action: function () {},
          },
          confirm: {
            text: "Aceptar",
            btnClass: "btn btn-success",
            action: function () {
              LimpiarCampos();
              GenerateHTMLForm();
            },
          },
        },
      });
    }
  );

  // FUNCIONES
  function Inscribir() {
    if (ValidarCampos()) {
      GenerateHTMLInscripcion();
      toastr.success("Informacion validada correctamente", "Notificacion");
    } else {
      toastr.error("Todos los campos son requeridos", "Ha ocurrido un error");
    }
  }

  function MateriasYHorarios(carrera) {
    let materiasYHorario;

    if (carrera == "software") {
      materiasYHorario = [
        {
          materia: "Introduccion a la Elaboracion de Algoritmos",
          name: "algoritmos",
          horario1: {
            id: "lunes-14:00-18:00",
            horario: "Lunes 14:00 - 18:00",
            valor: "Lunes-1",
          },
          horario2: {
            id: "miercoles-14:00-18:00",
            horario: "Miercoles 14:00 - 18:00",
            valor: "Miercoles-1",
          },
          horario3: {
            id: "viernes-14:00-18:00",
            horario: "Viernes 14:00 - 18:00",
            valor: "Viernes-1",
          },
        },
        {
          materia: "Fundamentos de Programacion",
          name: "fundamentos",
          horario1: {
            id: "lunes-18:00-22:00",
            horario: "Lunes 18:00 - 22:00",
            valor: "Lunes-1",
          },
          horario2: {
            id: "miercoles-18:00-22:00",
            horario: "Miercoles 18:00 - 22:00",
            valor: "Miercoles-1",
          },
          horario3: {
            id: "viernes-18:00-22:00",
            horario: "Viernes 18:00 - 22:00",
            valor: "Viernes-1",
          },
        },
        {
          materia: "Programacion 1",
          name: "programacion1",
          horario1: {
            id: "lunes-8:00-12:00",
            horario: "Lunes 8:00 - 12:00",
            valor: "Lunes-1",
          },
          horario2: {
            id: "miercoles-8:00-12:00",
            horario: "Miercoles 8:00 - 12:00",
            valor: "Miercoles-1",
          },
          horario3: {
            id: "viernes-8:00-12:00",
            horario: "Viernes 18:00 - 22:00",
            valor: "Viernes-1",
          },
        },
        {
          materia: "Programacion 2",
          name: "programacion2",
          horario1: {
            id: "martes-14:00-18:00",
            horario: "Martes 14:00 - 18:00",
            valor: "Martes-1",
          },
          horario2: {
            id: "jueves-14:00-18:00",
            horario: "Jueves 14:00 - 18:00",
            valor: "Jueves-1",
          },
          horario3: {
            id: "sabado-14:00-18:00",
            horario: "Sabado 14:00 - 18:00",
            valor: "Sabado-1",
          },
        },
        {
          materia: "Programacion 3",
          name: "programacion3",
          horario1: {
            id: "martes-18:00-22:00",
            horario: "Martes 18:00 - 22:00",
            valor: "Martes-1",
          },
          horario2: {
            id: "jueves-18:00-22:00",
            horario: "Jueves 18:00 - 22:00",
            valor: "Jueves-1",
          },
          horario3: {
            id: "sabado-8:00-12:00",
            horario: "Sabado 8:00 - 12:00",
            valor: "Sabado-1",
          },
        },
      ];
    }
    if (carrera == "multimedia") {
      materiasYHorario = [
        {
          materia: "Introduccion a la Multimedia",
          name: "multimedia",
          horario1: {
            id: "lunes-14:00-17:00",
            horario: "Lunes 14:00 - 17:00",
            valor: "Lunes-2",
          },
          horario2: {
            id: "miercoles-14:00-17:00",
            horario: "Miercoles 14:00 - 17:00",
            valor: "Miercoles-2",
          },
          horario3: {
            id: "viernes-14:00-17:00",
            horario: "Viernes 14:00 - 17:00",
            valor: "Viernes-2",
          },
        },
        {
          materia: "Diseño e Ilustracion",
          name: "ilustracion",
          horario1: {
            id: "lunes-18:00-21:00",
            horario: "Lunes 18:00 - 21:00",
            valor: "Lunes-2",
          },
          horario2: {
            id: "miercoles-18:00-21:00",
            horario: "Miercoles 18:00 - 21:00",
            valor: "Miercoles-2",
          },
          horario3: {
            id: "viernes-18:00-21:00",
            horario: "Viernes 18:00 - 21:00",
            valor: "Viernes-2",
          },
        },
        {
          materia: "Matematica Aplicada para Multimedia",
          name: "matematica",
          horario1: {
            id: "lunes-8:00-13:00",
            horario: "Lunes 8:00 - 13:00",
            valor: "Lunes-2",
          },
          horario2: {
            id: "miercoles-8:00-13:00",
            horario: "Miercoles 8:00 - 13:00",
            valor: "Miercoles-2",
          },
          horario3: {
            id: "viernes-8:00-13:00",
            horario: "Viernes 8:00 - 13:00",
            valor: "Viernes-2",
          },
        },
        {
          materia: "Grafico de Mapa de Bits",
          name: "graficos",
          horario1: {
            id: "martes-14:00-17:00",
            horario: "Martes 14:00 - 17:00",
            valor: "Martes-2",
          },
          horario2: {
            id: "jueves-14:00-17:00",
            horario: "Jueves 14:00 - 17:00",
            valor: "Jueves-2",
          },
          horario3: {
            id: "sabado-14:00-17:00",
            horario: "Sabado 14:00 - 17:00",
            valor: "Sabado-2",
          },
        },
        {
          materia: "Fotografia",
          name: "fotografia",
          horario1: {
            id: "martes-18:00-21:00",
            horario: "Martes 18:00 - 21:00",
            valor: "Martes-2",
          },
          horario2: {
            id: "jueves-18:00-21:00",
            horario: "Jueves 18:00 - 21:00",
            valor: "Jueves-2",
          },
          horario3: {
            id: "sabado-8:00-11:00",
            horario: "Sabado 8:00 - 11:00",
            valor: "Sabado-2",
          },
        },
      ];
    }
    if (carrera == "ciberseguridad") {
      materiasYHorario = [
        {
          materia: "Introduccion a la Ciberseguridad",
          name: "ciberseguridad",
          horario1: {
            id: "lunes-14:00-17:00",
            horario: "Lunes 14:00 - 17:00",
            valor: "Lunes-3",
          },
          horario2: {
            id: "miercoles-14:00-17:00",
            horario: "Miercoles 14:00 - 17:00",
            valor: "Miercoles-3",
          },
          horario3: {
            id: "viernes-14:00-17:00",
            horario: "Viernes 14:00 - 17:00",
            valor: "Viernes-3",
          },
        },
        {
          materia: "Sistemas Operativos",
          name: "sistemas",
          horario1: {
            id: "lunes-18:00-21:00",
            horario: "Lunes 18:00 - 21:00",
            valor: "Lunes-3",
          },
          horario2: {
            id: "miercoles-18:00-21:00",
            horario: "Miercoles 18:00 - 21:00",
            valor: "Miercoles-3",
          },
          horario3: {
            id: "viernes-18:00-21:00",
            horario: "Viernes 18:00 - 21:00",
            valor: "Viernes-3",
          },
        },
        {
          materia: "Calculo Diferencial",
          name: "calculo",
          horario1: {
            id: "lunes-8:00-13:00",
            horario: "Lunes 8:00 - 13:00",
            valor: "Lunes-3",
          },
          horario2: {
            id: "miercoles-8:00-13:00",
            horario: "Miercoles 8:00 - 13:00",
            valor: "Miercoles-3",
          },
          horario3: {
            id: "viernes-8:00-13:00",
            horario: "Viernes 8:00 - 13:00",
            valor: "Viernes-3",
          },
        },
        {
          materia: "Fundamentos de Seguridad",
          name: "seguridad",
          horario1: {
            id: "martes-14:00-17:00",
            horario: "Martes 14:00 - 17:00",
            valor: "Martes-3",
          },
          horario2: {
            id: "jueves-14:00-17:00",
            horario: "Jueves 14:00 - 17:00",
            valor: "Jueves-3",
          },
          horario3: {
            id: "sabado-14:00-17:00",
            horario: "Sabado 14:00 - 17:00",
            valor: "Sabado-3",
          },
        },
        {
          materia: "Aspectos legales de la Ciberseguridad",
          name: "aspectos-legales",
          horario1: {
            id: "martes-18:00-21:00",
            horario: "Martes 18:00 - 21:00",
            valor: "Martes-3",
          },
          horario2: {
            id: "jueves-18:00-21:00",
            horario: "Jueves 18:00 - 21:00",
            valor: "Jueves-3",
          },
          horario3: {
            id: "sabado-8:00-11:00",
            horario: "Sabado 8:00 - 11:00",
            valor: "Sabado-3",
          },
        },
      ];
    }

    return materiasYHorario;
  }

  function GenerateHTMLForm() {
    const htmlForm = ` 
    <div id="container-form" class="col-12 col-sm-12 col-md-8 offset-md-2">
        <div class="card">
          <div class="card-header bg-dark">
            <h5 class="text-center text-light">Datos Personales</h5>
          </div>

          <div class="card-body">

            <div class="mt-3 d-flex align-items-center">
                <label for="nombre" class="fw-bold mx-1">Nombre:</label>
                <input type="text" class="form-control me-1" id="nombre">
            </div>

            <div class="mt-3 d-flex align-items-center">
                <label for="provincia" class="fw-bold mx-1">Provincia:</label>
                <input type="text" class="form-control me-1" id="provincia">
            </div>

            <div class="mt-3 d-flex align-items-center">
                <label for="ciudad" class="fw-bold mx-1">Ciudad:</label>
                <input type="text" class="form-control me-1" id="ciudad">
            </div>

            <div class="mt-3 d-flex align-items-center">
                <label for="sector" class="fw-bold mx-1">Sector:</label>
                <input type="text" class="form-control me-1" id="sector">
            </div>

            <div class="mt-3 d-flex align-items-center">
                <label for="calle" class="fw-bold mx-1">Calle:</label>
                <input type="text" class="form-control me-1" id="calle">
            </div>

            <div class="mt-3 d-flex align-items-center">
                <label for="carrera" class="form-label fw-bold mx-1"
                  >Carrera:</label
                >
                <select class="form-select" id="carrera">
                  <option value="">Selecione una opcion</option>
                  <option value="software">Software</option>
                  <option value="multimedia">Multimedia</option>
                  <option value="ciberseguridad">Ciberseguridad</option>
                </select>
            </div>

            <div class="mt-3">
                <button
                  id="btn-continuar"
                  type="button"
                  class="btn btn-primary float-end"
                >
                  continuar
                </button>
                <button
                  id="btn-limpiar"
                  type="button"
                  class="btn btn-warning float-end me-2"
                >
                  Limpiar
                </button>
              </div>
          </div>
        </div>
      </div>
    `;

    $("#content-container").html(htmlForm);

    $("#nombre").val(valueNombre);
    $("#provincia").val(valueProvincia);
    $("#ciudad").val(valueCiudad);
    $("#sector").val(valueSector);
    $("#calle").val(valueCalle);
    $("#carrera").val(valueCarrera);
  }

  function GenerateHTMLInscripcion() {
    let materiasYHorarios = MateriasYHorarios(valueCarrera);
    htmlInscripcion = `
    <div id="container-inscripcion" class="col-12 col-sm-12 col-md-8 offset-md-2">
        <div class="card">
          <div class="card-header bg-dark">
            <h5 class="text-center text-light">Seleccion de Materia</h5>
          </div>

          <div class="card-body">

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    ${materiasYHorarios[0].materia}
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div id="radio-container-1" class="mb-3">

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[0].name}"
                          id="${materiasYHorarios[0].horario1.id}"
                          value="${materiasYHorarios[0].horario1.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[0].horario1.id}"
                          >${materiasYHorarios[0].horario1.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[0].name}"
                          id="${materiasYHorarios[0].horario2.id}"
                          value="${materiasYHorarios[0].horario2.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[0].horario2.id}"
                          >${materiasYHorarios[0].horario2.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[0].name}"
                          id="${materiasYHorarios[0].horario3.id}"
                          value="${materiasYHorarios[0].horario3.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[0].horario3.id}"
                          >${materiasYHorarios[0].horario3.horario}</label
                        >
                      </div>

                    </div>

                  </div>

                </div>

              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    ${materiasYHorarios[1].materia}
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div id="radio-container-2" class="mb-3">

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[1].name}"
                          id="${materiasYHorarios[1].horario1.id}"
                          value="${materiasYHorarios[1].horario1.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[1].horario1.id}"
                          >${materiasYHorarios[1].horario1.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[1].name}"
                          id="${materiasYHorarios[1].horario2.id}"
                          value="${materiasYHorarios[1].horario2.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[1].horario2.id}"
                          >${materiasYHorarios[1].horario2.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[1].name}"
                          id="${materiasYHorarios[1].horario3.id}"
                          value="${materiasYHorarios[1].horario3.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[1].horario3.id}"
                          >${materiasYHorarios[1].horario3.horario}</label
                        >
                      </div>

                    </div>

                  </div>

                </div>

              </div>
              <div class="accordion-item">

                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    ${materiasYHorarios[2].materia}
                  </button>
                </h2>

                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div id="radio-container-3" class="mb-3">

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[2].name}"
                          id="${materiasYHorarios[2].horario1.id}"
                          value="${materiasYHorarios[2].horario1.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[2].horario1.id}"
                          >${materiasYHorarios[2].horario1.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[2].name}"
                          id="${materiasYHorarios[2].horario2.id}"
                          value="${materiasYHorarios[2].horario2.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[2].horario2.id}"
                          >${materiasYHorarios[2].horario2.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[2].name}"
                          id="${materiasYHorarios[2].horario3.id}"
                          value="${materiasYHorarios[2].horario3.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[2].horario3.id}"
                          >${materiasYHorarios[2].horario3.horario}</label
                        >
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="accordion-item">
                
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    ${materiasYHorarios[3].materia}
                  </button>
                </h2>

                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div id="radio-container-4" class="mb-3">

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[3].name}"
                          id="${materiasYHorarios[3].horario1.id}"
                          value="${materiasYHorarios[3].horario1.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[3].horario1.id}"
                          >${materiasYHorarios[3].horario1.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[3].name}"
                          id="${materiasYHorarios[3].horario2.id}"
                          value="${materiasYHorarios[3].horario2.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[3].horario2.id}"
                          >${materiasYHorarios[3].horario2.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[3].name}"
                          id="${materiasYHorarios[3].horario3.id}"
                          value="${materiasYHorarios[3].horario3.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[3].horario3.id}"
                          >${materiasYHorarios[3].horario3.horario}</label
                        >
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class="accordion-item">

                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    ${materiasYHorarios[4].materia}
                  </button>
                </h2>

                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div class="accordion-body">

                    <div id="radio-container-5" class="mb-3">

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[4].name}"
                          id="${materiasYHorarios[4].horario1.id}"
                          value="${materiasYHorarios[4].horario1.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[4].horario1.id}"
                          >${materiasYHorarios[4].horario1.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[4].name}"
                          id="${materiasYHorarios[4].horario2.id}"
                          value="${materiasYHorarios[4].horario2.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[4].horario2.id}"
                          >${materiasYHorarios[4].horario2.horario}</label
                        >
                      </div>

                      <div class="form-check form-check-inline">
                        <input
                          type="radio"
                          class="form-check-input"
                          name="${materiasYHorarios[4].name}"
                          id="${materiasYHorarios[4].horario3.id}"
                          value="${materiasYHorarios[4].horario3.valor}"
                        />
                        <label class="form-check-label" for="${materiasYHorarios[4].horario3.id}"
                          >${materiasYHorarios[4].horario3.horario}</label
                        >
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>
            
            <div class="mt-3">
                <button
                  id="btn-continuar"
                  type="button"
                  class="btn btn-success float-end"
                >
                  Continuar
                </button>
                <button
                  id="btn-atras"
                  type="button"
                  class="btn btn-primary float-end me-2"
                >
                  Volver Atras
                </button>
              </div>
          </div>
        </div>
      </div>
    `;

    $("#content-container").html(htmlInscripcion);
    checkRadioButtons("#radio-container-1", valueRadio1);
    checkRadioButtons("#radio-container-2", valueRadio2);
    checkRadioButtons("#radio-container-3", valueRadio3);
    checkRadioButtons("#radio-container-4", valueRadio4);
    checkRadioButtons("#radio-container-5", valueRadio5);
  }

  function GenerateHTMLConfirmation() {
    let materias = MateriasYHorarios(valueCarrera);
    let htmlConfirmation = "";
    htmlConfirmation = `
    <div id="container-confirmacion" class="col-12 col-sm-12 col-md-8 offset-md-2">
      <div class="card">
        <div class="card-header bg-success">
          <h1 class="text-center text-light fs-3">Confirmacion</h1>
        </div>

        <div class="card-body">

          <div class="card">

            <div class="card-header bg-primary">
              <h5 class="text-light">Datos Personales</h5>
            </div>

            <div class="card-body p-0">

              <div class="d-flex border border-1 ">
                <p class="mx-2 fw-bold mt-2">Nombre: </p><p class="mt-2">${valueNombre}</p>
              </div>

              <div class="d-flex border border-1 bg-secondary bg-opacity-10">
                <p class="mx-2 fw-bold mt-2">Provincia: </p><p class="mt-2">${FirstLetterToUpperCase(
                  valueProvincia
                )}</p>
              </div>

              <div class="d-flex border border-1">
                <p class="mx-2 fw-bold mt-2">Ciudad: </p><p class="mt-2">${FirstLetterToUpperCase(
                  valueCiudad
                )}</p>
              </div>

              <div class="d-flex border border-1 bg-secondary bg-opacity-10">
                <p class="mx-2 fw-bold mt-2">Sector: </p><p class="mt-2">${FirstLetterToUpperCase(
                  valueSector
                )}</p>
              </div>

              <div class="d-flex border border-1">
                <p class="mx-2 fw-bold mt-2">Calle: </p><p class="mt-2">${FirstLetterToUpperCase(
                  valueCalle
                )}</p>
              </div>

              <div class="d-flex border border-1 bg-secondary bg-opacity-10">
                <p class="mx-2 fw-bold mt-2">Carrera: </p><p class="mt-2">${FirstLetterToUpperCase(
                  valueCarrera
                )}</p>
              </div>

              <table class="table table-dark table-striped-columns">
                <thead class="bg-secondary">
                  <tr>
                    <th scope="col" class="text-center">Asignatura</th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miercoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                    <th scope="col">Sabado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">${materias[0].materia}</th>
                    <td id="asignatura1-lunes"></td>
                    <td id="asignatura1-martes"></td>
                    <td id="asignatura1-miercoles"></td>
                    <td id="asignatura1-jueves"></td>
                    <td id="asignatura1-viernes"></td>
                    <td id="asignatura1-sabado"></td>
                  </tr>
                  <tr>
                    <th scope="row">${materias[1].materia}</th>
                    <td id="asignatura2-lunes"></td>
                    <td id="asignatura2-martes"></td>
                    <td id="asignatura2-miercoles"></td>
                    <td id="asignatura2-jueves"></td>
                    <td id="asignatura2-viernes"></td>
                    <td id="asignatura2-sabado"></td>
                  </tr>
                  <tr>
                    <th scope="row">${materias[2].materia}</th>
                    <td id="asignatura3-lunes"></td>
                    <td id="asignatura3-martes"></td>
                    <td id="asignatura3-miercoles"></td>
                    <td id="asignatura3-jueves"></td>
                    <td id="asignatura3-viernes"></td>
                    <td id="asignatura3-sabado"></td>
                  </tr>
                  <tr>
                    <th scope="row">${materias[3].materia}</th>
                    <td id="asignatura4-lunes"></td>
                    <td id="asignatura4-martes"></td>
                    <td id="asignatura4-miercoles"></td>
                    <td id="asignatura4-jueves"></td>
                    <td id="asignatura4-viernes"></td>
                    <td id="asignatura4-sabado"></td>
                  </tr>
                  <tr>
                    <th scope="row">${materias[4].materia}</th>
                    <td id="asignatura5-lunes"></td>
                    <td id="asignatura5-martes"></td>
                    <td id="asignatura5-miercoles"></td>
                    <td id="asignatura5-jueves"></td>
                    <td id="asignatura5-viernes"></td>
                    <td id="asignatura5-sabado"></td>
                  </tr>
                </tbody>
              </table>

            </div>

            
          </div>
          <div class="mt-3">
              <button
                id="btn-finalizar"
                type="button"
                class="btn btn-success float-end"
              >
                Finalizar
              </button>
              <button
                id="btn-atras"
                type="button"
                class="btn btn-primary float-end me-2"
              >
                Volver Atras
              </button>
            </div>

        </div>

      </div>

    </div> 
    `;

    $("#content-container").html(htmlConfirmation);

    PonerMateria(txtRadio1, 1);
    PonerMateria(txtRadio2, 2);
    PonerMateria(txtRadio3, 3);
    PonerMateria(txtRadio4, 4);
    PonerMateria(txtRadio5, 5);
  }

  function PonerMateria(value, num) {
    let day = value.split(" ")[0];
    let days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    for (let i = 0; i < days.length; i++) {
      if (day == days[i]) {
        $(`#content-container #asignatura${num}-${days[i].toLowerCase()}`).text(
          value
        );
      }
    }
  }

  function FirstLetterToUpperCase(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  function checkRadioButtons(container, value) {
    if (value != "" && value != null && value != undefined) {
      $(`${container} input[type='radio'][value=${value}]`).prop(
        "checked",
        true
      );
    }
  }

  function ObtenerCamposRadioCheck() {
    valueRadio1 = $("#radio-container-1 input[type='radio']:checked").val();
    txtRadio1 = $("#radio-container-1 input[type='radio']:checked")
      .next("label")
      .text();

    valueRadio2 = $("#radio-container-2 input[type='radio']:checked").val();
    txtRadio2 = $("#radio-container-2 input[type='radio']:checked")
      .next("label")
      .text();

    valueRadio3 = $("#radio-container-3 input[type='radio']:checked").val();
    txtRadio3 = $("#radio-container-3 input[type='radio']:checked")
      .next("label")
      .text();

    valueRadio4 = $("#radio-container-4 input[type='radio']:checked").val();
    txtRadio4 = $("#radio-container-4 input[type='radio']:checked")
      .next("label")
      .text();

    valueRadio5 = $("#radio-container-5 input[type='radio']:checked").val();
    txtRadio5 = $("#radio-container-5 input[type='radio']:checked")
      .next("label")
      .text();
  }

  function ValidarCampos() {
    valueNombre = $("#nombre").val();
    valueProvincia = $("#provincia").val();
    valueCiudad = $("#ciudad").val();
    valueSector = $("#sector").val();
    valueCalle = $("#calle").val();
    valueCarrera = $("#carrera").val();
    let isValid = true;

    isValid = ValidarInput("#nombre", valueNombre, isValid);
    isValid = ValidarInput("#provincia", valueProvincia, isValid);
    isValid = ValidarInput("#ciudad", valueCiudad, isValid);
    isValid = ValidarInput("#sector", valueSector, isValid);
    isValid = ValidarInput("#calle", valueCalle, isValid);
    isValid = ValidarInput("#carrera", valueCarrera, isValid);
    isValid = ValidarInput("#carrera", valueCarrera, isValid);

    return isValid;
  }

  function LimpiarCampos() {
    $("#nombre")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success")
      .focus();

    $("#provincia")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");

    $("#ciudad")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");

    $("#sector")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");

    $("#calle").val("").removeClass("input-error").removeClass("input-success");

    $("#carrera")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");

    valueNombre = "";
    valueProvincia = "";
    valueCiudad = "";
    valueSector = "";
    valueCalle = "";
    valueCarrera = "";
    valueRadio1 = "";
    valueRadio2 = "";
    valueRadio3 = "";
    valueRadio4 = "";
    valueRadio5 = "";
    txtRadio1 = "";
    txtRadio2 = "";
    txtRadio3 = "";
    txtRadio4 = "";
    txtRadio5 = "";
  }

  function ValidarInput(id, value, isValid) {
    if (value == "" || value == null || value == undefined) {
      $(id).addClass("input-error");
      $(id).removeClass("input-success");
      isValid = false;
    } else {
      $(id).addClass("input-success");
      $(id).removeClass("input-error");
      if (!isValid) {
        return false;
      }
      return true;
    }
  }
});
