console.log('JS Test')

////////// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\\\\\\\\\

function createBootstrapCard(cardName, cardRole, cardImg){
    const bootstrapCard = document.createElement('div')
    const bootstrapCardImg = document.createElement('img')
    const bootstrapCardBody = document.createElement('div')
    const bootstrapCardBodyTitle = document.createElement('h5')
    const bootstrapCardBodyText = document.createElement('p')

    // Card
    bootstrapCard.classList.add('card', 'col-4', 'gy-5')

    // Card Img
    bootstrapCardImg.src = cardImg
    bootstrapCardImg.classList.add('pt-2')

    // Card Body
    bootstrapCardBody.classList.add('card-body', 'text-center')

    // Card Title
    bootstrapCardBodyTitle.classList.add('card-title', 'text-gray')
    bootstrapCardBodyTitle.innerHTML = cardName

    bootstrapCardBodyText.classList.add('card-text')
    bootstrapCardBodyText.innerHTML = cardRole

    // Card Title
    cardsDOMElement.append(bootstrapCard)
    bootstrapCard.append(bootstrapCardImg, bootstrapCardBody)
    bootstrapCardBody.append(bootstrapCardBodyTitle, bootstrapCardBodyText)
}

////////// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\\\\\\\\\





const cardsDOMElement = document.querySelector('.cards')


const teamArray = [
    // 1° membro del Team
    {
        name: 'Wayne Barnett ',
        role: 'Founder & CEO',
        img: './img/wayne-barnett-founder-ceo.jpg'
    },
    // 2° membro del Team
    {
        name: 'Angela Caroll ',
        role: 'Chief Editor',
        img: './img/angela-caroll-chief-editor.jpg'
    },
    // 3° membro del Team
    {
        name: 'Walter Gordon ',
        role: 'Office Manager',
        img: './img/walter-gordon-office-manager.jpg'
    },
    // 4° membro del Team
    {
        name: 'Angela Lopez ',
        role: 'Social Media Manager',
        img: './img/angela-lopez-social-media-manager.jpg'
    },
    // 5° membro del Team
    {
        name: 'Scott Estrada ',
        role: 'Developer',
        img: './img/scott-estrada-developer.jpg'
    },
    // 6° membro del Team
    {
        name: 'Barbara Ramos ',
        role: 'Graphic Designer',
        img: './img/barbara-ramos-graphic-designer.jpg'
    }
]   

console.log(teamArray)



for(let i = 0; i < teamArray.length; i++){

    let teamMember = teamArray[i];
    
    console.log('Nome: ' + teamMember.name)
    console.log('Ruolo: ' + teamMember.role)
    console.log('Immagine: ' + teamMember.img)
    
    
    createBootstrapCard(teamMember.name, teamMember.role, teamMember.img)
}
