$(document).ready(initializeApp);
var projects = null;
function initializeApp(){
  projects = new Projects();
  projects.filterProjects('JavaScript');
}

class Projects{
  constructor(){
    this.projects =
    [
      {
        name:'SI/GO',
        tags:[
          'all',
          'javascript',
          'html5',
          'css3'
        ],
        description:'Activity recomendation based on weather',
        image:'sigo.png',
        gitLink:'',
        link:'https://sigo.rogerenand.com'
      },
      {
        name: 'Open Ticket',
        tags: [
          'all',
          'javascript',
          'html5',
          'css3',
          'react'
        ],
        description: 'Web development ticket tracking',
        image: 'openTicket.png',
        gitLink: 'https://github.com/enandr/open-ticket',
        link: 'https://openticket.rogerenand.com'
      },
      {
        name: 'Memory Match',
        tags: [
          'all',
          'javascript',
          'html5',
          'css3'
        ],
        description: 'Card matching memory game',
        image: 'memoryMatch.png',
        gitLink: 'https://github.com/enandr/memory-match',
        link: 'https://memorymatch.rogerenand.com'
      },
      {
        name: 'Wicked Sales',
        tags: [
          'all',
          'javascript',
          'html5',
          'css3',
          'react'
        ],
        description: 'Demo E-Commerce Website',
        image: '',
        gitLink: 'https://github.com/enandr/wicked-sales',
        link: 'https://wickedsales.rogerenand.com'
      },
      {
        name: 'Whiteboard Wizards',
        tags: [
          'all',
          'javascript',
          'html5',
          'css3',
          'react'
        ],
        description: 'Whiteboard challenges for group practicing',
        image: '',
        gitLink: '',
        link: ''
      }
    ]
    this.setEvents();
  }
  filterProjects(filter){
    let allCards = $('<div>').addClass('projectRow').attr('id', 'projectRow');
    this.projects.map(value => {
      if (value.tags.includes(filter.toLowerCase())){
        let newCard = this.createCard(value.image,value.name,value.description,value.link,value.gitLink);
        allCards.append(newCard);
      }
    })
    this.show(allCards);

  }
  setEvents(){
    $('.projectBtn').on('click',() => {
      let clickedButton = $(event.target)
      $('.projectBtn').removeClass('btnSelected');
      clickedButton.addClass('btnSelected');
      this.filterProjects(clickedButton.text());
    });
/*     $('.projects').on('mousemove','.cardImg', (event) => {
      event.target.style.backgroundPositionX = -event.offsetX + "px";
      event.target.style.backgroundPositionY = -event.offsetY + "px";
      event.target.style.backgroundSize = '100%';
    });
    $('.projects').on('mouseout', '.cardImg', (event) => {
      event.target.style.backgroundPositionX = 'center';
      event.target.style.backgroundPositionY = 'center';
      event.target.style.backgroundSize = 'contain';
    }); */
  }
  show(list){
    $('.projects *').remove();
    $('.projects').append(list);
  }
  createCard(image,name,desc,liveLink,gitLink){
    let card = $('<div>').addClass('card');
    let cardImageDiv = $('<div>').addClass('cardImgDiv');
    let cardImage = $('<div>').addClass('cardImg');
    let title = $('<h1>').text(name);
    let description = $('<p>');
    let btnContainer = $('<div>').addClass('cardBtnContainer');
    let liveBtn = $('<a>').text('Live').addClass('btn cardBtn');
    let gitBtn = $('<a>').text('Github').addClass('btn cardBtn');
    if (desc){
      description.text(desc);
    }
    else{
      description.text('Description Goes Here');
    }
    if (image){
      cardImage.css({ 'background-image': `url(${image})` });
    }
    else{
      cardImage.css({ 'background-image': "url('binary-code-475664_1920.jpg')" });
    }
    if (liveLink) {
      liveBtn.attr('href', liveLink);
    }
    else{
      liveBtn.addClass('noHover');
    }
    if (gitLink) {
      gitBtn.attr('href', gitLink);
    }
    else {
      gitBtn.addClass('noHover');
    }
    btnContainer.append(liveBtn, gitBtn);
    cardImageDiv.append(cardImage);
    card.append(cardImageDiv, title, description, btnContainer);
    return card;
  }
}
