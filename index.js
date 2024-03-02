function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function hidePopup(popupId) {
  document.getElementById(popupId).style.display = "none";
}

function togglePopup(id) {
  const popup = document.getElementById(id);
  if (popup.style.display === "block") {
    popup.style.display = "none";
  } else {
    popup.style.display = "block";
  }
}

function addPopupListeners(popupId, closeBtnClass, okBtnClass) {
  document
    .querySelector(`button[class='${closeBtnClass}']`)
    .addEventListener("click", function () {
      hidePopup(popupId);
    });
  document
    .querySelector(`button[class='${okBtnClass}']`)
    .addEventListener("click", function () {
      hidePopup(popupId);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  addPopupListeners("PopUpVipex", "VipexClose", "VipexOK");
  addPopupListeners("PopUpPoligon", "PoligonClose", "PoligonOK");
  addPopupListeners("PopUpStella", "StellaClose", "StellaOK");
  addPopupListeners("PopUpRiel", "RielClose", "RielOK");
  addPopupListeners("PopUpLenny", "LennyClose", "LennyOK");
  addPopupListeners("PopUpNick", "NickClose", "NickOK");
  addPopupListeners("PopUpHam", "HamClose", "HamOK");
  addPopupListeners("PopUpPL1", "PL1Close", "PL1OK");
  addPopupListeners("PopUpPL2", "PL2Close", "PL2OK");
  addPopupListeners("PopUpPL3", "PL3Close", "PL3OK");
  addPopupListeners("PopUpPL4", "PL4Close", "PL4OK");
  addPopupListeners("PopUpPL5", "PL5Close", "PL5OK");
  addPopupListeners("PopUpPL6", "PL6Close", "PL6OK");
  addPopupListeners("PopUpPL7", "PL7Close", "PL7OK");
});

let date = new Date();

setInterval(function(){
    document.querySelector('.time').innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
  let audio = document.getElementById("audio");
  let range = document.getElementById("range26");
  range.addEventListener("input", function() {
    audio.volume = range.value / 50;
  });
});

if (window.matchMedia("(max-width: 767px)").matches) {
  console.log("This is a mobile device, the code will not run");
} else {
  document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('.start-button');
    let counter = 0;
    let desktop = document.querySelector('#desktop');

    button.addEventListener('click', function() {
      counter++;
      if (counter % 3 === 0) {
        desktop.style.backgroundImage = 'url(./images/deface.jpg)';
      } else if (counter % 2 === 1) {
        desktop.style.backgroundImage = 'url(./images/retard.png)';
      } else {
        desktop.style.backgroundImage = 'url(./images/girl.jpg)';
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {

  $(document).ready(function(){
    $('.window-action-button.main').click(function(){
        $('#enter').hide();
        $('#main').show();
        $('#audio')[0].play();
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
  }
});

