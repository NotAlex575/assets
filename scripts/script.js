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

const generateCard = (teamMembers) => {
  const{name, role, email, img} = teamMembers;

  const memberCard = ` <div class="col-12 col-md-4">
            <div class="card rounded-0 border-0">
                <div class="w-20">
                    <div class="card-img-top">
                        <img src="./img/${img}" alt="" class="img-fluid">
                    </div>
                </div>}
                <div class="w-80">
                    <div class="card-body text-center">
                        <h4>${name}</h4>
                        <p>${role}</p>
                        <p>${email}</p>
                    </div>
                </div>
            </div>
        </div>`

        return memberCard;
}

renderCards();

