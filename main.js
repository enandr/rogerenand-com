$(document).ready(initializeApp);
var projects = null;
function initializeApp(){
  projects = new Projects();
  projects.show();

}

class Projects{
  constructor(){
    this.projects =
    [
      {
        name:'SI/GO',
        link:'https://sigo.rogerenand.com'
      },
      {
        name: 'Open Ticket',
        link: 'https://openticket.rogerenand.com'
      },
      {
        name: 'Memory Match',
        link: 'https://memorymatch.rogerenand.com'
      }
    ]
    this.projectLinks  = this.addProjects();

  }
  addProjects(){
    let newUl = $('<ul>');
    this.projects.map(value => {
      let newLi = $('<li>');
      let newA = $(`<a href="${value.link}">`);
      newA.text(value.name);
      newA.attr('href',value.link);
      newLi.append(newA);
      newUl.append(newLi);
    })
    return newUl;

  }
  show(){
    $('#projectRow').append(this.projectLinks);
  }
}
