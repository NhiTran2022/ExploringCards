const panels = document.querySelectorAll('.panel')

/* console.log(panels[0]) */
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // First we have to remove the active class
        removeActiveClasses()
        panel.classList.add('active') // add active class when click
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}