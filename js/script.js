/*--- Play/Pausa - Música ----*/
function togglePlayJazz() {
  var audio = document.getElementById('AudioJazz');

  if (audio.duration > 0 && !audio.paused) {

      document.getElementById('imgPlayJazz').src = "./css/img/play_musica.png";
      audio.pause();
  } else{
    document.getElementById('imgPlayJazz').src = "./css/img/pausa_musica.png";
      audio.play();
  }
  audio.onended = function() {
      document.getElementById('imgPlayJazz').src = "./css/img/play_musica.png";
  };
}

function togglePlaySolil() {
  var audio = document.getElementById('AudioSolil');

  if (audio.duration > 0 && !audio.paused) {

      document.getElementById('imgPlaySolil').src = "./css/img/play_musica.png";
      audio.pause();
  } else{
    document.getElementById('imgPlaySolil').src = "./css/img/pausa_musica.png";
      audio.play();
  }
  audio.onended = function() {
      document.getElementById('imgPlaySolil').src = "./css/img/play_musica.png";
  };
}
function togglePlayBass() {
  var audio = document.getElementById('AudioBass');

  if (audio.duration > 0 && !audio.paused) {

      document.getElementById('imgPlayBass').src = "./css/img/play_musica.png";
      audio.pause();
  } else{
    document.getElementById('imgPlayBass').src = "./css/img/pausa_musica.png";
      audio.play();
  }
  audio.onended = function() {
      document.getElementById('imgPlayBass').src = "./css/img/play_musica.png";
  };
}

/*----Modal PDFs----*/
window.onload = function(){

var modalJ = document.getElementById('modalJazz');
var modalSol = document.getElementById('modalSolil');
var modalSueno = document.getElementById('modalSueno');
var modalContacto = document.getElementById('modalContacto');
var modalApp = document.getElementById('modalApp');
var modalVideo = document.getElementById('modalVideo');
var btnJ = document.getElementById("imgPdfJazz");
var btnSol = document.getElementById("imgPdfSolil");
var btnSueno = document.getElementById("imgPdfSueno");
var btnContacto = document.getElementById("imgMailContacto");
var btnApp = document.getElementById("containerApp");
var btnTemp = document.getElementById("containerTemp");
var btnTokio = document.getElementById("containerTokio");
var btnDic13 = document.getElementById("containerDic13");


// Get the <span> element that closes the modal
var spanJ = document.getElementsByClassName("close")[0];

window.onclick = function(event) {
  if (event.target == btnTemp) {
      modalVideo.style.display = "block";
  };
  /*document.getElementById('embedVideo').src = "https://www.youtube.com/embed/ubvK5Z4ICJw";
  */
}
/*----Botones PDFs----*/
btnJ.onclick = function() {
    modalJ.style.display = "block";
}
btnSol.onclick = function() {
    modalSol.style.display = "block";
}
btnSueno.onclick = function() {
    modalSueno.style.display = "block";
}
btnContacto.onclick = function() {
    modalContacto.style.display = "block";
}
btnApp.onclick = function() {
    modalApp.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanJ.onclick = function() {
    modalJ.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalJ) {
        modalJ.style.display = "none";
    };
    if (event.target == modalSol) {
        modalSol.style.display = "none";
    };
    if (event.target == modalSueno) {
        modalSueno.style.display = "none";
    }
    if (event.target == modalContacto) {
        modalContacto.style.display = "none";
    }
    if (event.target == modalApp) {
        modalApp.style.display = "none";
    }
}
spanJ.onclick = function() {//lo dejo por si sí uso el tache
    modal.style.display = "none";
}
/*----Funciones Video----*/



}
