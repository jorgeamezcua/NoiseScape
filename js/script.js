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

var modalYo = document.getElementById('modalYo');
var modalJ = document.getElementById('modalJazz');
var modalSol = document.getElementById('modalSolil');
var modalSueno = document.getElementById('modalSueno');
var modalContacto = document.getElementById('modalContacto');
var modalApp = document.getElementById('modalApp');
var modalVideo = document.getElementById('modalVideo');
var btnYo = document.getElementById("containerIng");
var btnJ = document.getElementById("imgPdfJazz");
var btnSol = document.getElementById("imgPdfSolil");
var btnSueno = document.getElementById("imgPdfSueno");
var btnContacto = document.getElementById("imgMailContacto");
var btnApp = document.getElementById("containerApp");
var btnNoise = document.getElementById("containerNoise");
var btnTemp = document.getElementById("containerTemp");
var btnTokio = document.getElementById("containerTokio");
var btnDic13 = document.getElementById("containerDic13");


// Get the <span> element that closes the modal
var spanJ = document.getElementsByClassName("close")[0];

/*----Botones----*/
btnYo.onclick = function() {
    modalYo.style.display = "block";
}
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
btnNoise.onclick = function() {
    modalNoise.style.display = "block";
  }
btnTemp.onclick = function() {
    modalTemp.style.display = "block";
  }
btnTokio.onclick = function() {
    modalTokio.style.display = "block";
  }
btnDic13.onclick = function() {
    modalDic13.style.display = "block";
  }
// When the user clicks on <span> (x), close the modal
spanJ.onclick = function() {
    modalJ.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalYo) {
      modalYo.style.display = "none";
  };
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
    if (event.target == modalNoise) {
        modalNoise.style.display = "none";
    }
    if (event.target == modalTemp) {
        modalTemp.style.display = "none";
    }
    if (event.target == modalTokio) {
        modalTokio.style.display = "none";
    }
    if (event.target == modalDic13) {
        modalDic13.style.display = "none";
    }
}
spanJ.onclick = function() {//lo dejo por si sí uso el tache
    modal.style.display = "none";
}

/*----Permahover----*/

$(".animacion").one("mouseover", function() {
  $('.animacion').addClass('permahover');
});
$(".audio").one("mouseover", function() {
  $('.audio').addClass('permahover');
});
$(".musica").one("mouseover", function() {
  $('.musica').addClass('permahover');
});
$(".video").one("mouseover", function() {
  $(".video").addClass('permahover');
});
$(".guion").one("mouseover", function() {
  $('.guion').addClass('permahover');
});
$(".yo").one("mouseover", function() {
  $('.yo').addClass('permahover');
});

}
