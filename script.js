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


const sectionCard = document.getElementById('team');

const ul = document.createElement('ul');

sectionCard.append(ul);

teamMembers.forEach( menmber => {
    const card = `
    <li>
       <div class="list-description">
           <img src="./img/male1.png" alt="Marco Bianchi">
           <h3 class="name">Marco Bianchi</h3>
            <h4 class="role">Designer</h4>
           <p class="email"><a href="mailto:marcobianchi@team.com">marcobianchi@team.com</a></p>
        </div>
    </li>`;

    ul.innerHTML += card;
});

