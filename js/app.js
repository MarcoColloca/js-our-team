console.log('JS Test')

////////// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\\\\\\\\\

// Funzione per la creazione di div nel dom
function createDivDOMElement(){
    const divDOMElement = document.createElement('div')

    return divDOMElement
}



// Funzione per la creazione di una Card Bootstrap con Immagine, Titolo e Testo
function createBootstrapCard(cardName, cardRole, cardImg){
    const bootstrapCard = createDivDOMElement()
    const bootstrapCardImg = document.createElement('img')
    const bootstrapCardBody = createDivDOMElement()
    const bootstrapCardBodyTitle = document.createElement('h5')
    const bootstrapCardBodyText = document.createElement('p')
    const bootstrapCol4 = createDivDOMElement()

    // Col-4
    bootstrapCol4.classList.add('col-4')

    // Card
    bootstrapCard.classList.add('card')

    // Card Img
    bootstrapCardImg.src = cardImg
    bootstrapCardImg.classList.add('card-img-top', 'p-3')

    // Card Body
    bootstrapCardBody.classList.add('card-body', 'text-center')

    // Card Title
    bootstrapCardBodyTitle.classList.add('card-title', 'text-gray')
    bootstrapCardBodyTitle.innerHTML = cardName

    // Card Text
    bootstrapCardBodyText.classList.add('card-text')
    bootstrapCardBodyText.innerHTML = cardRole

    // Card DOM Element

    cardsDOMElement.append(bootstrapCol4)
    bootstrapCol4.append(bootstrapCard)
    bootstrapCard.append(bootstrapCardImg, bootstrapCardBody)
    bootstrapCardBody.append(bootstrapCardBodyTitle, bootstrapCardBodyText)
}



// Funzione per la generazione di un membro del Team
function teamMember(teamMembername, teamMemberrole, teamMemberimg){
    let teamMember = 
    {
        name: teamMembername,
        role: teamMemberrole,
        img: teamMemberimg
    }

    return teamMember
}


////////// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\\\\\\\\\





const cardsDOMElement = document.querySelector('.cards')


const teamArray = [
    // 1° membro del Team    
    teamMember('Wayne Barnett', 'Founder & CEO','./img/wayne-barnett-founder-ceo.jpg'),

    // 2° membro del Team
    teamMember('Angela Caroll', 'Chief Editor','./img/angela-caroll-chief-editor.jpg'),

    // 3° membro del Team
    teamMember('Walter Gordon', 'Office Manager','./img/walter-gordon-office-manager.jpg'),

    // 4° membro del Team
    teamMember('Angela Lopez', 'Social Media Manager','./img/angela-lopez-social-media-manager.jpg'),

    // 5° membro del Team
    teamMember('Scott Estrada', 'Developer','./img/scott-estrada-developer.jpg'),

    // 6° membro del Team
    teamMember('Barbara Ramos', 'Graphic Designer','./img/barbara-ramos-graphic-designer.jpg'),

]   

console.log(teamArray)


// Ciclo for per stampare le variabili degli oggetti contenuti nell'array e creare le carte tramite una funzione
for(let i = 0; i < teamArray.length; i++){

    let teamMember = teamArray[i];
    
    console.log('Nome: ' + teamMember.name)
    console.log('Ruolo: ' + teamMember.role)
    console.log('Immagine: ' + teamMember.img)
    
    
    createBootstrapCard(teamMember.name, teamMember.role, teamMember.img)
}
