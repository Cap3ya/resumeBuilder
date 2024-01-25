import picture from './picture.jpg'

const initialstate = {
    picture: picture,
    colors: ['#2F81F7', '#800080'],
    personals: {
        title: 'PETER Yan',
        subtitle: 'Full Stack Developer',
        email: 'contact@capeya.me',
        phoneNumber: '123 456 789',
        location: 'Paris, France',
        website: 'Capeya.me'
    },
    divers: [
        "Permis B",
        "2 Dogs",
        "12 Cats",
        "Live in the mountains",
        "Enjoy playing mucis"
    ],
    skills: [
        "Html", 
        "Css", 
        "JavaScript", 
        "React", 
        "Node.js", 
        "Mongodb",
        "Docker", 
        "Github", 
        "WhatElse..",
        "Partying 🎉"
    ],
    academics: [
        { 
            id: 1, 
            courseTitle: 'Titre professionnel Développeur Wet et Web Mobile', 
            schoolName: 'AFPA', 
            schoolLocation: 'Remote, France', 
            coursePeriod: '2023-2024'
        },
        { 
            id: 2, 
            courseTitle: 'Baccalauréat Sciences Economiques et Sociales', 
            schoolName: 'Lycée Français de Shanghai', 
            schoolLocation: 'Shanghai, Chine', 
            coursePeriod: '2010-2012' 
        }
    ],
    professionals: [
        { 
            id: 1, 
            companyName: "Capeya", 
            companyLocation: "Remote, France", 
            positionTitle: "Full Stack Developer", 
            responsibilities: "Programing for Dummies ", 
            fromTo: "2023 - 2024" 
        },
        { 
            id: 2, 
            companyName: "Google", 
            companyLocation: "San Fransisco, USA", 
            positionTitle: "Half Stack Developer", 
            responsibilities: "Mainly drinking coffee ☕", 
            fromTo: "2012 - 2023"
        }
    ],
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac facilisis elit. Donec fermentum imperdiet auctor. Phasellus ut vestibulum ipsum. Curabitur posuere sem et purus fermentum blandit. Nullam malesuada enim ac luctus efficitur. Praesent luctus tortor et urna molestie, a facilisis quam facilisis. Integer viverra lacus at quam bibendum imperdiet nec vel mi. Sed ac pretium mi. Mauris vel ligula lectus."
}

export default initialstate;