const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// DOM refs
// collegamento a nodo HTML
const sectionCard = document.getElementById('team');

// Form inserimento dati new member
const formEl = document.getElementById('form')
const newNameInputEl = document.getElementById('fullname');
const newRoleInputEl = document.getElementById('role');
const newEmailInputEl = document.getElementById('email');
const newImageInputEl = document.getElementById('img');

//Reset della form
const resetData = document.getElementById('reset');



// creazione elemento tag ul 
const ulTeam = document.createElement('ul');

//collegamento elemento tag in HTML 
sectionCard.append(ulTeam);

// Lettura valori teamMembers(array) per interazione
teamMembers.forEach( member => {

//   // destrutturazione di member(OBJ)
  const { name, role, img, email} = member;

  const card = `
    <li>
      <div class="list-description">
          <div class="img-description">
         <img src="./${img}" alt="an image of ${name}">
          </div>
          <div class="info">
         <h3 class="name">${name}</h3>
         <h4 class="role">${role}</h4>
         <p class="email"><a href="mailto:${email}">${email}</a></p>
          </div>
       </div>
    </li>`;

    ulTeam.innerHTML += card;
});

formEl.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const name = newNameInputEl.value.trim();
    const role = newRoleInputEl.value.trim();
    const email = newEmailInputEl.value.trim();
    const img = newImageInputEl.value.trim();


     const card = `
    <li>
      <div class="list-description">
          <div class="img-description">
         <img src="./${img}" alt="an image of ${name}">
          </div>
          <div class="info">
         <h3 class="name">${name}</h3>
         <h4 class="role">${role}</h4>
         <p class="email"><a href="mailto:${email}">${email}</a></p>
          </div>
       </div>
    </li>`;

    ulTeam.innerHTML += card;

})

resetData.addEventListener('click', function() {
    formDisplay.forEach( element => element.classList.add('display-form'));
})

