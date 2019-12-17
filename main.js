$(document).ready(initializeApp);
var projects = null;
function initializeApp(){
  projects = new Projects();
  projects.filterProjects('all');
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
        link: 'https://wickedsales.rogerenand.com'
      }
    ]
    this.setClicks();
  }
  filterProjects(filter){
    let newUl = $('<ul>');
    this.projects.map(value => {
      if (value.tags.includes(filter.toLowerCase())){
        let newLi = $('<li>');
        let newA = $(`<a href="${value.link}">`);
        newA.text(value.name);
        newA.attr('href', value.link);
        newLi.append(newA);
        newUl.append(newLi);
      }
    })
    this.show(newUl);

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
    $('#projectRow *').remove();
    $('#projectRow').append(list);
  }
}
