function toggle(){
  document.getElementById("nav").classList.toggle('vis');
  document.getElementById("overlay").classList.toggle('vis');
}

function out(){
  document.getElementById("nav").classList.remove('vis');
  document.getElementById("overlay").classList.remove('vis');
}
