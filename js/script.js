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
var modalInsec = document.getElementById('modalInsec');
var modalContacto = document.getElementById('modalContacto');
var modalApp = document.getElementById('modalApp');
var modalVideo = document.getElementById('modalVideo');
var btnYo = document.getElementById("containerIng");
var btnJ = document.getElementById("imgPdfJazz");
var btnSol = document.getElementById("imgPdfSolil");
var btnSueno = document.getElementById("imgPdfSueno");
var btnInsec = document.getElementById("imgPdfInsec");
var btnContacto = document.getElementById("imgMailContacto");
var btnApp = document.getElementById("containerApp");
var btnNoise = document.getElementById("containerNoise");
var btnTemp = document.getElementById("containerTemp");
var btnTokio = document.getElementById("containerTokio");
var btnDic13 = document.getElementById("containerDic13");
var btnGen = document.getElementById("containerGenIntro");
var btnGen2 = document.getElementById("containerGenVid");

// Get the <span> element that closes the modal
var spanJ = document.getElementsByClassName("close")[0];

/*----Botones----*/
/*btnYo.onclick = function() {
  var iframe = document.getElementById("iframeYo");
  iframe.setAttribute( "src", "https://www.youtube.com//embed/cCb1HM0_CVs?rel=0&showinfo=0&autoplay=1" );
    modalYo.style.display = "block";
}*/
btnJ.onclick = function() {
    modalJ.style.display = "block";
}
btnSol.onclick = function() {
    modalSol.style.display = "block";
}
btnSueno.onclick = function() {
    modalSueno.style.display = "block";
}
btnInsec.onclick = function() {
    modalInsec.style.display = "block";
}
btnContacto.onclick = function() {
    modalContacto.style.display = "block";
}
btnApp.onclick = function() {
    modalApp.style.display = "block";
}
btnNoise.onclick = function() {
  var iframe = document.getElementById("iframeNoise");
  iframe.setAttribute( "src", "https://www.youtube.com//embed/cCb1HM0_CVs?rel=0&showinfo=0&autoplay=1" );
    modalNoise.style.display = "block";
  }
btnTemp.onclick = function() {
  var iframe = document.getElementById("iframeTemp");
  iframe.setAttribute( "src", "https://www.youtube.com//embed/ubvK5Z4ICJw?rel=0&showinfo=0&autoplay=1" );
    modalTemp.style.display = "block";
  }
btnTokio.onclick = function() {
  var iframe = document.getElementById("iframeTokio");
  iframe.setAttribute( "src", "https://www.youtube.com//embed/B8qGCgKWebI?rel=0&showinfo=0&autoplay=1" );
    modalTokio.style.display = "block";
  }
btnDic13.onclick = function() {
  var iframe = document.getElementById("iframeDic13");
  iframe.setAttribute( "src", "https://www.youtube.com//embed/f_n90a8xTfQ?rel=0&showinfo=0&autoplay=1" );
    modalDic13.style.display = "block";
  }
btnGen.onclick = function() {
  var iframe = document.getElementById("iframeGen");
  iframe.setAttribute( "src", "https://www.youtube.com/embed/QVzKaAV6BPo?rel=0&showinfo=0&autoplay=1" );
    modalGen.style.display = "block";
  }
btnGen2.onclick = function() {
var iframe = document.getElementById("iframeGen2");
iframe.setAttribute( "src", "https://www.youtube.com/embed/_yAN6LV13II?rel=0&showinfo=0&autoplay=1" );
  modalGen2.style.display = "block";
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
    };
    if (event.target == modalInsec) {
        modalInsec.style.display = "none";
    };
    if (event.target == modalContacto) {
        modalContacto.style.display = "none";
    };
    if (event.target == modalApp) {
        modalApp.style.display = "none";
    };
    if (event.target == modalNoise) {
        modalNoise.style.display = "none";
    };
    if (event.target == modalTemp) {
        modalTemp.style.display = "none";
    };
    if (event.target == modalTokio) {
        modalTokio.style.display = "none";
    };
    if (event.target == modalDic13) {
        modalDic13.style.display = "none";
    };
    if (event.target == modalGen) {
        modalGen.style.display = "none";
    };
    if (event.target == modalGen2) {
        modalGen2.style.display = "none";
    };
}
spanJ.onclick = function() {//lo dejo por si sí uso el tache
    modal.style.display = "none";
  }

function WidthChange(mq) {
  if (mq.matches){
    $("#animacion, .animacion").one("mouseover", function() {
      $('.animacion').addClass('permahover');
    });
    $("#audio, .audio").one("mouseover", function() {
      $('.audio').addClass('permahover');
    });
    $("#musica, .musica").one("mouseover", function() {
      $('.musica').addClass('permahover');
    });
    $("#video, .video").one("mouseover", function() {
      $(".video").addClass('permahover');
    });
    $("#guion, .guion").one("mouseover", function() {
      $('.guion').addClass('permahover');
    });
    $(".yo").one("mouseover", function() {
      $('.yo').addClass('permahover');
    });
  } else{};
  }

var mq = window.matchMedia('(min-width:960px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
};



if(document.documentElement.clientWidth < 961) {
/*-----desplegar zonas en touch-----*/
function dropZ(claseID){
  var z = document.getElementById(claseID);//identifica la zona
  var elementos = document.getElementsByClassName(claseID);//identifica elementos de esa zona
  if(z.classList.contains("activo")){ //si la zona está activa
    var i;
    for(i=0;i < elementos.length; i++) {
    z.classList.remove("activo"); //desactivar zona
    elementos[i].classList.add("elemInactivo"); //poner inactiv
    elementos[i].classList.remove("elemActivo"); //y desactivar elementos
  }
    setTimeout(function(){
      var i;
      for(i=0; i < elementos.length; i++){
      elementos[i].style.display = "none"}} ,450);


  } else{ //si no está activa
    var i;
    for(i=0;i < elementos.length; i++) {
    elementos[i].style.display = "flex";
    elementos[i].classList.add("elemActivo"); //activar elementos
    elementos[i].classList.remove("elemInactivo"); //quitar inactivo
    z.classList.add("activo"); //activar zona
  }
};
};
}
