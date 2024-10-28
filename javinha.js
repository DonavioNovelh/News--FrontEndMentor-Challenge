var input = document.querySelector('.ema');
var form =  document.querySelector('.bt');
var dr =  document.querySelector('.but');
var body =  document.querySelector('article');
console.log(input);
console.log(form);
input.value;

form.addEventListener('submit', (eventt) => {
    
    eventt.preventDefault();
    console.log(input.checkValidity());

    body.setAttribute('class',"articlevairSumir");
    window.location = 'sucess.html'
    
  
})

dr.addEventListener('click', (ee) => {
    if(input.typeMismatch) {
        message = 'the thins'
        input.setCustomValidity(message);
      
        console.log('Email válido:', input.value);

        
    }
})


