

document.getElementById('update').addEventListener('click', function(){
   const inputValu =  document.getElementById('inputs');
   let cheng = inputValu.value;

   const p = document.getElementById('pushtext');
   p.innerText = cheng;
   inputValu.value = '';

})