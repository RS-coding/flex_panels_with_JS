const panels = document.querySelectorAll('.panel')
const containerPanels = document.querySelector('.panels')

function openPanel(){

    this.classList.toggle('open')

    for(let sibling of this.parentNode.children){
        if(sibling !== this) sibling.classList.remove('open')
    }
    
}

function showFullText(e){
    // if the clicked panel contains a property with name 'flex'
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active')
    }
}

panels.forEach( panel => panel.addEventListener('click', openPanel))
panels.forEach( panel => panel.addEventListener('transitionend', showFullText))

