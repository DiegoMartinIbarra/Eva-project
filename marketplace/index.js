// Función para resaltar elemento seleccionado
function selectElement(element){
    element.addEventListener('click', () => {
        const buttons = document.getElementById('buttons')
        Array.from(buttons.children).forEach(x => x.classList.remove('selected'))
        element.classList.add('selected')
    }) 
}


const start = document.getElementById('start');
start.onsubmit = (e) => {
    e.preventDefault()    
}
selectElement(start)

const forum = document.getElementById('forum');
forum.onsubmit = (e) => {
    e.preventDefault()    
}
selectElement(forum)

const catalogue = document.getElementById('catalogue');
catalogue.onsubmit = (e) => {
    e.preventDefault()    
}
selectElement(catalogue)

const contact = document.getElementById('contact');
contact.onsubmit = (e) => {
    e.preventDefault()    
}
selectElement(contact)