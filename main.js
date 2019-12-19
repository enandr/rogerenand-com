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
        gitLink: '',
        link: ''
      }
    ]
    this.setClicks();
  }
  filterProjects(filter){
    let allCards = $('<div>').addClass('projectRow').attr('id', 'projectRow');
    this.projects.map(value => {
      if (value.tags.includes(filter.toLowerCase())){
        let card = $('<div>').addClass('card');
        let cardImage = $('<div>').addClass('cardImg').css({ 'background-image':"url('binary-code-475664_1920.jpg')"});
        let title = $('<h1>').text(value.name);
        let description = $('<p>').text('Description Goes Here');
        let btnContainer = $('<div>').addClass('cardBtnContainer');
        let liveBtn = $('<a>').text('Live').addClass('btn cardBtn');
        let gitBtn = $('<a>').text('Github').addClass('btn cardBtn');
        if (value.link){
          liveBtn.attr('href', value.link);
        }
        if (value.gitLink) {
          gitBtn.attr('href', value.gitLink);
        }
        btnContainer.append(liveBtn, gitBtn);
        card.append(cardImage, title, description, btnContainer);
        allCards.append(card);
      }
    })
    this.show(allCards);

  }
  setClicks(){
    $('.projectBtn').on('click',() => {
      let clickedButton = $(event.target)
      $('.projectBtn').removeClass('btnSelected');
      clickedButton.addClass('btnSelected');
      this.filterProjects(clickedButton.text());
    });
  }
  show(list){
    $('.projects *').remove();
    $('.projects').append(list);
  }
}
