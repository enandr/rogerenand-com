const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {
  edge: 'left',
  draggable: true,
  preventScrolling:true
});
const slider = document.querySelector('.slider');
M.Slider.init(slider,{
  indicators:false,
  interval:3000
})
const modal1 = document.querySelector('.modal');
M.Modal.init(modal1, {
})
const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
})
/* $(window).scroll(() => {
  if ($(window).scrollTop()>$(window).height()){
    $('#navBar').removeClass('navbar-fixed');
  }
  else {
    $('#navBar').addClass('navbar-fixed');
  }
}) */
makeCards();
function makeCards(){
  const location = $('#work');
  const projects =
    [
      {
        name: 'SI/GO',
        tags: [
          'javascript',
          'html5',
          'css3'
        ],
        description: 'Activity recomendation based on weather',
        image: 'sigo.png',
        gitLink: '',
        link: 'https://sigo.rogerenand.com'
      },
      {
        name: 'Open Ticket',
        tags: [
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
        name: 'Lightning Sales',
        tags: [
          'javascript',
          'html5',
          'css3',
          'react'
        ],
        description: 'Speed Sales E-Commerce Demo',
        image: 'lightningSales.png',
        gitLink: 'https://github.com/enandr/wicked-sales',
        link: 'https://wickedsales.rogerenand.com'
      },
      {
        name: 'Whiteboard Wizards',
        tags: [
          'javascript',
          'html5',
          'css3',
          'react'
        ],
        description: 'Whiteboard challenges for group practicing',
        image: 'binary-code-475664_1920.jpg',
        gitLink: '',
        link: ''
      }
    ]
  let wholeContainer = $('<div>').addClass('container');
  let allCards = $('<div>').addClass('row');
  projects.map(value => {
    let col = $('<div>').addClass('col s12 m6 l4 flow-text');
    let card = $('<div>').addClass('card large grey darken-4');

    let cardImage = $('<div>').addClass('card-image');
    let image = $('<img>').addClass('activator clickable').attr('src',value.image);
    cardImage.append(image);

    let content = $('<div>').addClass('card-content grey darken-4');
    let frontTitle = $('<span>').addClass('card-title activator white-text').text(value.name);
    let frontIcon = $('<i>').addClass('material-icons right').text('more_vert');
    let frontLink = $('<a>').addClass('activator center clickable white-text text-hover').text('Click To Learn More');
    frontTitle.append(frontIcon);
    content.append(frontTitle,frontLink);
    let action = $('<div>').addClass('card-action grey darken-4');
    if (value.gitLink){
      var actionLinkGit = $('<a>').addClass('center clickable white-text text-hover').text('GitHub').attr('href', value.gitLink);
    }
    else {
      actionLinkGit = null;
    }
    if (value.link) {
      var actionLinkLive = $('<a>').addClass('center clickable white-text text-hover').text('Live').attr('href', value.link);
    }
    else {
      actionLinkLive = $('<a>').addClass('center clickable white-text text-hover').text('Under Construction')
    }
    action.append(actionLinkLive,actionLinkGit);
    let reveal = $('<div>').addClass('card-reveal grey darken-4');
    let revealTitle = $('<span>').addClass('card-title red-text').text(value.name);
    let revealIcon = $('<i>').addClass('material-icons right').text('close');
    let revealP = $('<p>').addClass('red-text').text(value.description);
    revealTitle.append(revealIcon)
    reveal.append(revealTitle,revealP)
    value.tags.map(value => {
      let newChip = $('<div>').addClass('chip grey darken-3 red-text flow-text').text(value.toUpperCase());
      reveal.append(newChip);
    })
    card.append(cardImage,content,action,reveal)
    col.append(card);
    allCards.append(col);
  })
  wholeContainer.append(allCards);
  location.append(wholeContainer);
}
/* function makeSkills(){
  const skills = {
    title:"JavaScript",
    image:"images/javascript-736400.png"
  }
  skills.map(() => {

  })
} */
