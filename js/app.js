document.querySelectorAll(`.project`).forEach(project => {
    project.addEventListener(`mouseover`, () => {
        project.style.transform = `scale(1.2)`;
        project.style.transition = `transform 0.5 ease-in-out`;
    })

    project.addEventListener(`mouseout`, () => {
        project.style.transform = `scale(1)`
    })

    project.addEventListener(`click`, () => {
        displayModal()
    })
})


const displayModal = () => {
    alert(`Feature Coming Soon...`)
}