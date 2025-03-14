const projectData = {
    websites: [
        {
            title: `Blackjack`,
            imagePath: "Assets/Screen Shot 2025-03-10 at 5.31.43 PM.png",
            description: `this is a simplified blackjack game. Created by Dean, Conner, Ayah, and I.`
        }, {
            title: `Tamagotchi`,
            imagePath: `Assets/Screen Shot 2025-03-12 at 3.42.30 PM.png`,
            description: `Simple tamagotchi game.`
        }, {
            title: `iOS Portfolio`,
            imagePath: `Assets/Screen Shot 2025-03-13 at 8.43.31 PM.png`,
            description: `My first website from 5 years ago.`
        }
    ],

    apps: [
        {
            title: `DVD's`,
            imagePath: "Assets/Screen Shot 2025-03-13 at 8.26.33 PM.png",
            description: `This is an app that allows you to keep track of the movies(tv shows coming soon) you own on DVD or Blue-ray. I am using "TMDB" api for the movie data.`
        }, {
            title: `Hours`,
            imagePath: "Assets/Screen Shot 2025-03-13 at 9.11.08 PM.png",
            description: `A simple way to track your work hours.`
        }, {
            title: `Facebook`,
            imagePath: "Assets/Screen Shot 2025-03-13 at 9.11.18 PM.png",
            description: `Facebook UI with working like button.`
        }

    ]

};


const lightDarkModeToggle = document.getElementById(`light-dark-mode-toggle`);
const body = document.body
const hiddenElements = document.querySelectorAll(`.hidden`);
const projectImageElement = document.querySelector(`.project-image`);
const modalElement = document.querySelector(`.modal`);
const closeModalButton = document.querySelector(`.close-modal-button`);
const sendButton = document.querySelector(`.send-button`);
const githubButton = document.querySelector(`.social-buttons`);




// User interaction 1: light / dark mode toggle
lightDarkModeToggle.addEventListener(`click`, () => {
    body.classList.toggle(`light-mode`);
    body.classList.toggle(`dark-mode`);
    console.log(body.classList);
});




// User interaction 2: animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add(`show`);
        } else {
            entry.target.classList.remove(`show`);
        }
    });
});

hiddenElements.forEach((element) => observer.observe(element));




// dynamically update projects section
const updateProjectSection = (classSection, projects) => {
    const projectsContainer = document.querySelector(`.${classSection} .projects-container`);

    projects.forEach((project) => {
        const newProjectElement = document.createElement(`div`);
        newProjectElement.classList.add(`project`);

        newProjectElement.innerHTML = `<img class="project-image" src="${project.imagePath}" alt="Image of really cool project!">`;
        projectsContainer.appendChild(newProjectElement);

        newProjectElement.addEventListener(`click`, () => {
            displayModal(project);
        })
    })
}




// update modal with data
const displayModal = (project) => {
    const modalImageElement = document.querySelector(`.modal-image`);
    const modalTitleElement = document.querySelector(`.modal-title`);
    const modalDescriptionElement = document.querySelector(`.modal-description`);

    modalImageElement.src = project.imagePath;
    modalTitleElement.textContent = project.title;
    modalDescriptionElement.textContent = project.description;

    modalElement.classList.add(`show`);
}




// User interaction 3 & 4: mouse hover animation and display modal on click
const projectElements = document.querySelectorAll(`.project`);
projectElements.forEach(project => {
    project.addEventListener(`mouseover`, () => {
        project.style.transform = `scale(1.2)`;
        project.style.transition = `transform 0.5 ease-in-out`;
    })

    project.addEventListener(`mouseout`, () => {
        project.style.transform = `scale(1)`;
    })

    project.addEventListener(`click`, () => {
        displayModal()        
    })
})


const dismissModal = () => {
    modalElement.classList.remove(`show`);
}


closeModalButton.addEventListener(`click`, dismissModal);


updateProjectSection(`websites`, projectData.websites);
updateProjectSection(`apps`, projectData.apps);




// User interaction 5: input field validation
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