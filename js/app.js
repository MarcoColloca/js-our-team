console.log('JS Test')





const cardsDOMElement = document.querySelector('.cards')


const teamArray = [
    // 1° membro del Team
    {
        name: 'Wayne Barnett ',
        role: 'Founder & CEO',
        img: '<img src="./img/wayne-barnett-founder-ceo.jpg">'
    },
    // 2° membro del Team
    {
        name: 'Angela Caroll ',
        role: 'Chief Editor',
        img: '<img src="./img/angela-caroll-chief-editor.jpg">'
    },
    // 3° membro del Team
    {
        name: 'Walter Gordon ',
        role: 'Office Manager',
        img: '<img src="./img/walter-gordon-office-manager.jpg">'
    },
    // 4° membro del Team
    {
        name: 'Angela Lopez ',
        role: 'Social Media Manager',
        img: '<img src="./img/angela-lopez-social-media-manager.jpg">'
    },
    // 5° membro del Team
    {
        name: 'Scott Estrada ',
        role: 'Developer',
        img: '<img src="./img/scott-estrada-developer.jpg">'
    },
    // 6° membro del Team
    {
        name: 'Barbara Ramos ',
        role: 'Graphic Designer',
        img: '<img src="./img/barbara-ramos-graphic-designer.jpg">'
    }
]   

console.log(teamArray)





for(let i = 0; i < teamArray.length; i++){

    let teamMember = teamArray[i];
    //console.log(teamMember)
 
    console.log('Nome: ' + teamMember.name)
    console.log('Ruolo: ' + teamMember.role)
    console.log('Immagine: ' + teamMember.img)
    //cardsDOMElement.append(teamMember.name, teamMember.role, teamMember.img)
    const myCardDOMElement = document.createElement('div')
    myCardDOMElement.classList.add('card', 'col-6', 'd-flex', 'justify-content-between')
    myCardDOMElement.innerHTML = teamMember.name + teamMember.role + teamMember.img
    cardsDOMElement.append(myCardDOMElement)
}

/*
for(let j = 0; j < teamArray.length; j++){
    const myCardDOMElement = document.createElement('div')
    myCardDOMElement.classList.add('card', 'col-4')
    myCardDOMElement.innerHTML(teamMember.name, teamMember.role, teamMember.img)
    cardsDOMElement.append(myCardDOMElement)
}
*/