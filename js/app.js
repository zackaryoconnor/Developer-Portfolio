const hiddenElements = document.querySelectorAll(`.hidden`);
const projectElements = document.querySelectorAll(`.project`);
const modalElement = document.querySelector(`.modal`);
const closeModalButton = document.querySelector(`.close-modal-button`);
const sendButton = document.querySelector(`.send-button`);
const githubButton = document.querySelector(`.social-buttons`);


// User interaction 1: animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add(`show`);
        } else {
            entry.target.classList.remove(`show`);
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));


// User interaction 2 & 3: mouse hover animation and display modal on click
projectElements.forEach(project => {
    project.addEventListener(`mouseover`, () => {
        project.style.transform = `scale(1.2)`;
        project.style.transition = `transform 0.5 ease-in-out`;
    })

    project.addEventListener(`mouseout`, () => {
        project.style.transform = `scale(1)`;
    })

    project.addEventListener(`click`, () => {
        modalElement.classList.add(`show`);

    })
})

closeModalButton.addEventListener(`click`, () => {
    modalElement.classList.remove(`show`);
});


// User interaction 4: input field validation
sendButton.addEventListener(`click`, event => {
    let name = document.querySelector(`#name`).value;
    let email = document.querySelector(`#email`).value;

    if (!name || !email) {
        alert(`Please enter your name and email address.`);
    } else {
        alert(`unfortunately ${name}, this isn't set up to email me yet. Maybe one day!`);
        name.value = "";
        email.value = "";
    }
})
