const teamContainer = document.getElementById("team-members");

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

const renderCards = () =>{
  for(let i = 0; i < teamMembers.length; i++){
    let card = generateCard(teamMembers[i]);
    teamContainer.innerHTML += card;
  }
}

const generateCard = ({name, role, email, img}) => {

  return `<div class="col-12 col-md-4">
            <div class="card d-flex rounded-0 border-0 d-flex flex-row align-items-center bg-black">
                <div class="card-img-left">
                  <img src="${img}" alt="" class="img-fluid">
                </div>
                <div class="card-body text-starts">
                  <h4 class="text-white">${name}</h4>
                  <p class="text-white">${role}</p>
                  <p class="text-info">${email}</p>
                </div>
            </div>
        </div>`;
}

renderCards();

