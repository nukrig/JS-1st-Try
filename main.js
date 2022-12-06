const form = document.getElementById('form')
const ul = document.getElementById('ul')
const input = document.querySelector('input[name="username"]')
const err2 = document.getElementById('error')


form.addEventListener('submit',(event) => {
    event.preventDefault()
    err2.textContent=''
    if(input.value.trim()){
            const checkbox = document.createElement('input')
            checkbox.type='checkbox'
            const span = document.createElement('span')
            span.textContent=input.value
            span.style.color='white'
            
            const btn = document.createElement('button')
            btn.type='button'
            btn.textContent='REMOVE'
            btn.style.marginLeft='30px'
            btn.style.borderRadius='30px'
            btn.style.outline='none'
            btn.style.backgroundColor='aqua'
            btn.style.border='0'
            btn.style.padding='8px'
            btn.style.color='white'

            btn.addEventListener('click',(event) =>{
                event.target.parentNode.style.display='none'
        })
        
        checkbox.addEventListener('click',(event)=>{
            if(event.target.checked){
                span.classList.add('line')
            } else{
                span.classList.remove('line')
            }
        })
        
        const li = document.createElement('li')
        ul.appendChild(li)
        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(btn)
        input.value=''
        input.focus()
    }   else{
        alert('Empty value provided')
    }
})




const login = document.querySelector('.login')

function logInForm(){
    login.classList.toggle('dis-none')
}