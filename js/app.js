console.log('JS Test')





const cardDOMElement = document.querySelector('.card')


const teamArray = [
    // 1° membro del Team
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    // 2° membro del Team
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    // 3° membro del Team
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: ' walter-gordon-office-manager.jpg'
    },
    // 4° membro del Team
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    // 5° membro del Team
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    // 6° membro del Team
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]   

console.log(teamArray)





for(let i = 0; i < teamArray.length; i++){

    let teamMember = teamArray[i];
    //console.log(teamMember)
 
    console.log('Nome: ' + teamMember.name)
    console.log('Ruolo: ' + teamMember.role)
    console.log('Immagine: ' + teamMember.img)
    cardDOMElement.append(teamMember.name, teamMember.role, teamMember.img)
 }

