let questions = document.querySelectorAll('.question');
let buttons = document.querySelectorAll('.question-btn');

console.log(buttons);

buttons.forEach(( button) => {
 
    button.addEventListener('click', (e) =>{
        const parentQuestion =  e.path[4];
        questions.forEach( question =>{
            if( question === parentQuestion){
                parentQuestion.classList.toggle('show-text');
            }else{
                question.classList.remove('show-text');
                console.log('cllick');
            }
        })
    

    })

});

