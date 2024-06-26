document.addEventListener('DOMContentLoaded', function(){

    fetch('../assets/navbar.html') // ".." significa irse un directorio atrás
    //se está llendo al archivo donde está el codigo de la barra de navegacion
    .then(response => {
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        //innerHTML agrega todo lo que dice un html a una etiqueta que yo defino
        //toca crear la etiqueta en el respectivo archivo al que queremos agregar
    })
    .catch(error => console.log('Error', error))
})