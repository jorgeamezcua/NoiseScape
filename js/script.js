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
};
function dropZ(){};
/*----Modal PDFs----*/
if(document.documentElement.clientWidth > 1024) {
function ModalPdf(ruta = ''){
  var embedPdf = document.getElementById('embedPDF');
  var modalPdf = document.getElementById('modalPdf');
  embedPdf.setAttribute( "src", ruta);
  modalPdf.style.display = "block";
}

function ModalVideo(ruta = ''){
var embedVideo = document.getElementById('embedVideo');
var modalVideo = document.getElementById('modalVideo');
embedVideo.setAttribute( "src", ruta);
modalVideo.style.display = "block";
};

function ModalWeb(ruta = ''){
var embedWeb = document.getElementById('embedWeb');
var modalWeb = document.getElementById('modalWeb');
embedWeb.setAttribute("src", ruta);
modalWeb.style.display = "block";
};

function ModalContacto(ruta = ''){
var embedWeb = document.getElementById('embedContacto');
var modalWeb = document.getElementById('modalContacto');
embedWeb.setAttribute("src", ruta);
modalWeb.style.display = "block";
};//clic Modal
window.onclick = function(event) {
    if (event.target == modalPdf) {
        modalPdf.style.display = "none";
    };
    if (event.target == modalVideo) {
        modalVideo.style.display = "none";
    };
    if (event.target == modalWeb) {
        modalWeb.style.display = "none";
    };
    if (event.target == modalContacto) {
        modalContacto.style.display = "none";
    };
};
}; //width > 2014

window.onload = function(){

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
};
var mq = window.matchMedia('(min-width:1025px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
};//window onload



if(document.documentElement.clientWidth < 1025) {
  
  function ModalVideo(ruta = ''){
  var embedVideo = document.getElementById('embedVideo');
  var modalVideo = document.getElementById('modalVideo');
  embedVideo.setAttribute( "src", ruta);
  modalVideo.style.display = "block";
  };
  function ModalPdf(ruta=''){
    var link = document.createElement('a');
    link.href = ruta;
    link.download = '';
    link.dispatchEvent(new MouseEvent('click'));
  };

  function ModalContacto(ruta=''){
      var embedWebM = document.getElementById('embedContacto');
      var modalWebM = document.getElementById('modalContacto');
      embedWeb.setAttribute( "src", ruta);
      modalWeb.style.display = "block";
  };
  function ModalWeb(ruta=''){
    var embedWebM = document.getElementById('embedWeb');
    var modalWebM = document.getElementById('modalWeb');
    embedWeb.setAttribute( "src", ruta);
    modalWeb.style.display = "block";
  };
  document.getElementsByClassName("close").onclick = function(event) {
      if (event.target == modalPdf) {
          modalPdf.style.display = "none";
      };
      if (event.target == modalVideo) {
          modalVideo.style.display = "none";
      };
      if (event.target == modalWeb) {
          modalWeb.style.display = "none";
      };
  };


  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modalPdf) {
          modalPdf.style.display = "none";
      };
      if (event.target == modalVideo) {
          modalVideo.style.display = "none";
      };
      if (event.target == modalWeb) {
          modalWeb.style.display = "none";
      };
      if (event.target == ModalContacto) {
          modalContacto.style.display = "none";
      };
  };

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
};//client width
