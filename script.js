/* =================================
   ENERGY COFFEE
   JAVASCRIPT PRINCIPAL
================================= */


/* MENSAJE DEL PRODUCTO */

function mostrarProducto() {

    alert(
        "☕ Energy Coffee\n\n" +
        "Café energético para estudiantes y jóvenes.\n" +
        "Precio: $2.50"
    );

}


/* EJEMPLO DE JAVASCRIPT */

function saludar() {

    alert(
        "¡Bienvenido a Energy Coffee!\n\n" +
        "Este mensaje fue creado utilizando JavaScript."
    );

}


/* JQUERY */

$(document).ready(function() {

    $("#botonJquery").click(function() {

        $("#mensaje").slideToggle(500);

    });

});


/* CUESTIONARIO */

const quiz = document.getElementById("quiz");

if (quiz) {

    quiz.addEventListener("submit", function(event) {

        event.preventDefault();

        let puntos = 0;

        const respuestas = {

            p1: "c",
            p2: "a",
            p3: "a",
            p4: "a",
            p5: "a",
            p6: "a",
            p7: "b",
            p8: "a"

        };


        for (let pregunta in respuestas) {

            const seleccionada =
                document.querySelector(
                    'input[name="' +
                    pregunta +
                    '"]:checked'
                );


            if (
                seleccionada &&
                seleccionada.value === respuestas[pregunta]
            ) {

                puntos++;

            }

        }


        const resultado =
            document.getElementById("resultado");


        resultado.style.display = "block";


        if (puntos === 8) {

            resultado.innerHTML =
                "🎉 ¡Excelente! Obtuviste " +
                puntos +
                " de 8 respuestas correctas.";

        }

        else if (puntos >= 6) {

            resultado.innerHTML =
                "👏 ¡Muy bien! Obtuviste " +
                puntos +
                " de 8 respuestas correctas.";

        }

        else if (puntos >= 4) {

            resultado.innerHTML =
                "👍 Buen trabajo. Obtuviste " +
                puntos +
                " de 8 respuestas correctas. " +
                "Puedes repasar nuevamente los temas.";

        }

        else {

            resultado.innerHTML =
                "📚 Obtuviste " +
                puntos +
                " de 8 respuestas correctas. " +
                "Te recomendamos estudiar nuevamente.";

        }


        window.scrollTo({
            top: resultado.offsetTop,
            behavior: "smooth"
        });

    });

}