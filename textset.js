

document.getElementById('areabuttons').addEventListener('click', function(){
   const inputValu =  document.getElementById('areatext');
   let cheng = inputValu.value;

   const p = document.getElementById('pushtext');
   p.innerText = cheng;
   inputValu.value = '';

})