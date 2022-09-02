window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
    let title = document.querySelector('#title');
    let rating = document.querySelector('#rating');
    let awards = document.querySelector('#awards');
    let release_date = document.querySelector('#release_date');
    let length = document.querySelector('#length');
    let genre_id = document.querySelector('#genre_id');
    let form = document.querySelector('#form');

    let errorTitle = document.querySelector('#errorTitle');
    let errorRating = document.querySelector('#errorRating');
    let errorAwards = document.querySelector('#errorAwards');
    let errorRelease_date = document.querySelector('#errorRelease_date');
    let errorLength = document.querySelector('#errorLength');
    let errorGenre_id = document.querySelector('#errorGenre_id');
    let errorForm = document.querySelector('#errorForm');

    regExAlpha = /^[a-zA-Z\sñáéíóúü ]*$/,

    title.addEventListener("blur", () => {
        switch (true) {
            case !title.value.trim():
                errorTitle.innerHTML = "Requerido";
                errorTitle.classList.add("is-invalid");
                title.classList.add("is-invalid");
                break;
            case !regExAlpha.test(title.value):
                errorTitle.innerHTML = "Nombre inválido";
                errorTitle.classList.add("is-invalid");
                title.classList.add("is-invalid");
                break;
            default:
                errorTitle.classList.remove("is-invalid");
                errorTitle.classList.add("is-valid");
                title.classList.remove("is-invalid");
                title.classList.add("is-valid");
                errorTitle.innerHTML = "";
                break;
        }
    });

    rating.addEventListener("blur", () => {
        switch (true) {
            case !rating.value.trim():
                errorRating.innerHTML = "Requerido";
                errorRating.classList.add("is-invalid");
                rating.classList.add("is-invalid");
                break;
            case isNaN(rating.value):
                errorRating.innerHTML = "Número inválido";
                errorRating.classList.add("is-invalid");
                rating.classList.add("is-invalid");
                break;
            case rating.value < 0 || rating.value > 10:
                errorRating.innerHTML = "Rango inválido";
                errorRating.classList.add("is-invalid");
                rating.classList.add("is-invalid");
                break;
            default:
                errorRating.classList.remove("is-invalid");
                errorRating.classList.add("is-valid");
                rating.classList.remove("is-invalid");
                rating.classList.add("is-valid");
                errorRating.innerHTML = "";
                break;
        }
    });

    awards.addEventListener("blur", () => {
        switch (true) {
            case !awards.value.trim():
                errorAwards.innerHTML = "Requerido";
                errorAwards.classList.add("is-invalid");
                awards.classList.add("is-invalid");
                break;
            case isNaN(awards.value):
                errorAwards.innerHTML = "Número inválido";
                errorAwards.classList.add("is-invalid");
                awards.classList.add("is-invalid");
                break;
            case awards.value < 0 || awards.value > 10:
                errorAwards.innerHTML = "Rango inválido";
                errorAwards.classList.add("is-invalid");
                awards.classList.add("is-invalid");
                break;
            default:
                errorAwards.classList.remove("is-invalid");
                errorAwards.classList.add("is-valid");
                awards.classList.remove("is-invalid");
                awards.classList.add("is-valid");
                errorAwards.innerHTML = "";
                break;
        }
    });

    release_date.addEventListener("blur", () => {
        switch (true) {
            case !release_date.value.trim():
                errorRelease_date.innerHTML = "Requerido";
                errorRelease_date.classList.add("is-invalid");
                release_date.classList.add("is-invalid");
                break;
            default:
                errorRelease_date.classList.remove("is-invalid");
                errorRelease_date.classList.add("is-valid");
                release_date.classList.remove("is-invalid");
                release_date.classList.add("is-valid");
                errorRelease_date.innerHTML = "";
                break;
        }
    });

    length.addEventListener("blur", () => {
        switch (true) {
            case !length.value.trim():
                errorLength.innerHTML = "Requerido";
                errorLength.classList.add("is-invalid");
                length.classList.add("is-invalid");
                break;
            case isNaN(length.value):
                errorLength.innerHTML = "Número inválido";
                errorLength.classList.add("is-invalid");
                length.classList.add("is-invalid");
                break;
            case length.value < 60 || length.value > 360:
                errorLength.innerHTML = "Rango inválido";
                errorLength.classList.add("is-invalid");
                length.classList.add("is-invalid");
                break;
            default:
                errorLength.classList.remove("is-invalid");
                errorLength.classList.add("is-valid");
                length.classList.remove("is-invalid");
                length.classList.add("is-valid");
                errorLength.innerHTML = "";
                break;
        }
    });

    genre_id.addEventListener("blur", () => {
        switch (true) {
            case !genre_id.value.trim():
                errorGenre_id.innerHTML = "Requerido";
                errorGenre_id.classList.add("is-invalid");
                genre_id.classList.add("is-invalid");
                break;
            case isNaN(genre_id.value):
                errorGenre_id.innerHTML = "Número inválido";
                errorGenre_id.classList.add("is-invalid");
                genre_id.classList.add("is-invalid");
                break;
            default:
                errorGenre_id.classList.remove("is-invalid");
                errorGenre_id.classList.add("is-valid");
                genre_id.classList.remove("is-invalid");
                genre_id.classList.add("is-valid");
                errorGenre_id.innerHTML = "";
                break;
        }
    });

    form.addEventListener("submit", function (event) {

        switch (true) {
            case !title.value.trim():
                errorTitle.innerHTML = "Requerido";
                errorTitle.classList.add("is-invalid");
                title.classList.add("is-invalid");
                break;
            case !regExAlpha.test(title.value):
                errorTitle.innerHTML = "Nombre inválido";
                errorTitle.classList.add("is-invalid");
                title.classList.add("is-invalid");
                break;
            default:
                errorTitle.classList.remove("is-invalid");
                errorTitle.classList.add("is-valid");
                title.classList.remove("is-invalid");
                title.classList.add("is-valid");
                errorTitle.innerHTML = "";
                break;
        }

switch (true) {
            case !rating.value.trim():
                errorRating.innerHTML = "Requerido";
                errorRating.classList.add("is-invalid");
                rating.classList.add("is-invalid");
                break;
            case isNaN(rating.value):
                errorRating.innerHTML = "Número inválido";
                errorRating.classList.add("is-invalid");
                rating.classList.add("is-invalid");
                break;
            case rating.value < 0 || rating.value > 10:
                errorRating.innerHTML = "Rango inválido";
                errorRating.classList.add("is-invalid");
                rating.classList.add("is-invalid");
                break;
            default:
                errorRating.classList.remove("is-invalid");
                errorRating.classList.add("is-valid");
                rating.classList.remove("is-invalid");
                rating.classList.add("is-valid");
                errorRating.innerHTML = "";
                break;
        }


switch (true) {
            case !awards.value.trim():
                errorAwards.innerHTML = "Requerido";
                errorAwards.classList.add("is-invalid");
                awards.classList.add("is-invalid");
                break;
            case isNaN(awards.value):
                errorAwards.innerHTML = "Número inválido";
                errorAwards.classList.add("is-invalid");
                awards.classList.add("is-invalid");
                break;
            case awards.value < 0 || awards.value > 10:
                errorAwards.innerHTML = "Rango inválido";
                errorAwards.classList.add("is-invalid");
                awards.classList.add("is-invalid");
                break;
            default:
                errorAwards.classList.remove("is-invalid");
                errorAwards.classList.add("is-valid");
                awards.classList.remove("is-invalid");
                awards.classList.add("is-valid");
                errorAwards.innerHTML = "";
                break;
        }

switch (true) {
            case !release_date.value.trim():
                errorRelease_date.innerHTML = "Requerido";
                errorRelease_date.classList.add("is-invalid");
                release_date.classList.add("is-invalid");
                break;
            default:
                errorRelease_date.classList.remove("is-invalid");
                errorRelease_date.classList.add("is-valid");
                release_date.classList.remove("is-invalid");
                release_date.classList.add("is-valid");
                errorRelease_date.innerHTML = "";
                break;
        }

switch (true) {
            case !length.value.trim():
                errorLength.innerHTML = "Requerido";
                errorLength.classList.add("is-invalid");
                length.classList.add("is-invalid");
                break;
            case isNaN(length.value):
                errorLength.innerHTML = "Número inválido";
                errorLength.classList.add("is-invalid");
                length.classList.add("is-invalid");
                break;
            case length.value < 60 || length.value > 360:
                errorLength.innerHTML = "Rango inválido";
                errorLength.classList.add("is-invalid");
                length.classList.add("is-invalid");
                break;
            default:
                errorLength.classList.remove("is-invalid");
                errorLength.classList.add("is-valid");
                length.classList.remove("is-invalid");
                length.classList.add("is-valid");
                errorLength.innerHTML = "";
                break;
        }

switch (true) {
            case !genre_id.value.trim():
                errorGenre_id.innerHTML = "Requerido";
                errorGenre_id.classList.add("is-invalid");
                genre_id.classList.add("is-invalid");
                break;
            case isNaN(genre_id.value):
                errorGenre_id.innerHTML = "Número inválido";
                errorGenre_id.classList.add("is-invalid");
                genre_id.classList.add("is-invalid");
                break;
            default:
                errorGenre_id.classList.remove("is-invalid");
                errorGenre_id.classList.add("is-valid");
                genre_id.classList.remove("is-invalid");
                genre_id.classList.add("is-valid");
                errorGenre_id.innerHTML = "";
                break;
        }

        event.preventDefault()
        let elementsForm = this.elements;
        let errores = false;
        errorForm.classList.remove("is-valid");
        console.log(elementsForm)


        for (let index = 0; index < elementsForm.length - 1; index++) {
            if (elementsForm[index].value == "" || elementsForm[index].classList.contains("is-invalid")) {
                elementsForm[index].classList.add("is-invalid");
                errorForm.innerHTML = "Hay errores en el formulario"
                errorForm.classList.add("is-invalid");
                errores = true;
            }
        }

        if (!errores) {
            alert("Validado!")
            form.submit()
        }
    })

}