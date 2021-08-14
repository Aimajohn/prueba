const messages = ['Alberto', 'Cecilia', 'Andres', 'Emilia', 'Rem', 'Subaru']

const randomMessage = () =>{
    let message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

module.exports = { randomMessage }