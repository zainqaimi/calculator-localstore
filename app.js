let string = "" ;
let buttons = document.querySelectorAll('.btn');
let store = document.querySelector('.store')
Array.from(buttons).forEach((buttons)=> {
    buttons.addEventListener('click',(e)=>{
        store.innerText += e.target.innerText
        if(e.target.innerText == '='){
            string = eval(string);
            document.querySelector('.inpt').value = string;
            store.innerText+= string
            localStorage.setItem('data',store.innerText)
        }else if(e.target.innerText == 'AC'|| e.target.innerText == 'clear'){
            string = ''
            document.querySelector('.inpt').value = string;
            store.innerText = string
        }else{
            string = string + e.target.innerText;
            document.querySelector('.inpt').value = string;
        }
    })
})
store.innerText = localStorage.data
