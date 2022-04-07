
let questions = document.querySelectorAll('.question');




for( let question of questions){
   const btn = question.querySelector('.question-btn');

   console.log(question.classList);

   btn.addEventListener('click', () => {
        
    for( let item of questions){

        if(item !== question){
           item.classList.remove('show-text');
         }
    }  
       question.classList.toggle('show-text');
   })
}
