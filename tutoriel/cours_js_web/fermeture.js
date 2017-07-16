var iii = 4,ooo=8;
function sansFerm() {
  alert(iii);
}
function tentativeDeFermetureEchec() {
  var iii = ooo;
  window.avecFermEchec = function() {
    alert(iii);
  };
}
function init(){
  var ooo = 3;
  (function() { 
    var iii =  ooo;
    window.avecFerm = function() {
      alert(iii);
    };
  })();
  (tentativeDeFermetureEchec)();
}

init();

try {
  sansFerm(); // 4
  avecFerm(); // 3
  avecFermEchec(); // 8
  avecFermInside(); // Exception
} catch (e) {
  alert(e.message);
}