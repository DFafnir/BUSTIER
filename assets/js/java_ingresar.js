// const wrapper = document.querySelector('.wrapper')
// const registerLink = document.querySelector('.register-link')
// const loginLink = document.querySelector('.login-link')

// registerLink.onclick = () => {
//     wrapper.classList.add('active')
// }

// loginLink.onclick = () => {
//     wrapper.classList.remove('active')
// }

const singupForm = document.querySelector('#singupForm')
singupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#crearName')
    const email = document.querySelector('#crearEmail')
    const password = document.querySelector('#crearPassword')

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('¡El usuario ya esta registrado!')
    }

    Users.push({name: name, email: email, password: password})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('¡Registro exitoso!')
    window.location.href ='index_ingresar.html'
})