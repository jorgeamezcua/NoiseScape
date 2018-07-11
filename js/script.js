function togglePlayJazz() {
  var audio = document.getElementById('AudioJazz');
  var image = document.getElementById('imgPlayJazz')

  if (audio.duration > 0 && !audio.paused) {

      document.getElementById('imgPlayJazz').src = "./css/img/play_musica.png";
      audio.pause();
  } else{
    document.getElementById('imgPlayJazz').src = "./css/img/pausa_musica.png";
      audio.play();
  }
}

function togglePlaySolil() {
  var audio = document.getElementById('AudioSolil');
  var image = document.getElementById('imgPlaySolil')

  if (audio.duration > 0 && !audio.paused) {

      document.getElementById('imgPlaySolil').src = "./css/img/play_musica.png";
      audio.pause();
  } else{
    document.getElementById('imgPlaySolil').src = "./css/img/pausa_musica.png";
      audio.play();
  }
}
window.onload = function(){

var modalJ = document.getElementById('modalJazz');
var modalSol = document.getElementById('modalSolil');
var modalSueno = document.getElementById('modalSueno');
var btnJ = document.getElementById("imgPdfJazz");
var btnSol = document.getElementById("imgPdfSolil");
var btnSueno = document.getElementById("imgPdfSueno");
// Get the <span> element that closes the modal
var spanJ = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnJ.onclick = function() {
    modalJ.style.display = "block";
}
btnSol.onclick = function() {
    modalSol.style.display = "block";
}
btnSueno.onclick = function() {
    modalSueno.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
spanJ.onclick = function() {
    modalJ.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalJ) {
        modalJ.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modalSol) {
        modalSol.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modalSueno) {
        modalSueno.style.display = "none";
    }
}
}
