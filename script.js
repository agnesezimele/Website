let btn = document.getElementById('btn-blue');
let btnGetValue = document.getElementById('user-text');
let str = document.getElementById('text-input');

btnGetValue.addEventListener('click', function(){
    let textCool = document.getElementById('text-input').value;
    alert(console.log(str.length));
    });

btn.addEventListener('click', function(){
        let elem = document.getElementById('para');
        elem.style.color = 'blue';  
});


function changeColor(newColor) {
    let elem = document.getElementById('para');
    elem.style.color = newColor;
  }