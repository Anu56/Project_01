const button = document.querySelectorAll('.button');
 const body = document.querySelector('body');
 button.forEach(function(button) {
  console.log(button);
 button.addEventListener('click',(e) => {
   if (e.target.id === 'lavender') {
     body.style.backgroundColor = e.target.id;
   }
   if (e.target.id === 'greenyellow') {
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'aqua') {
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id ==='palevioletred') {
    body.style.backgroundColor = e.target.id;
  }
  if (e.target.id === 'darkgray') {
    body.style.backgroundColor = e.target.id;
  }
 });
 });