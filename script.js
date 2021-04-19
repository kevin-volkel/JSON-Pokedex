let pokemon = {
  charmander: {
    //ul
    abilities: [
      {
        name: "blaze",
      },
      {
        name: "solar-power",
      },
    ],
    base_experience: 62,
    height: 6,
    id: 4,
    is_default: true,
    name: "charmander",
    order: 5,
    stats: [
      {
        base_stat: 39,
        effort: 0,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 52,
        effort: 0,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 43,
        effort: 0,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 60,
        effort: 0,
        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 50,
        effort: 0,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 65,
        effort: 1,
        stat: {
          name: "speed",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
        },
      },
    ],
    weight: 85,
  },

  charmeleon: {
    abilities: [
      {
        name: "blaze",
      },
      {
        name: "solar-power",
      },
    ],
    base_experience: 142,

    id: 5,
    is_default: true,
    name: "charmeleon",
    height: 11,
    order: 6,
    stats: [
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 64,
        effort: 0,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 58,
        effort: 0,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 65,
        effort: 0,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 80,
        effort: 1,
        stat: {
          name: "speed",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
        },
      },
    ],
    weight: 190,
  },

  charizrd: {
    abilities: [
      {
        name: "blaze",
      },
      {
        name: "solar-power",
      },
    ],
    base_experience: 240,
    height: 17,
    id: 6,
    is_default: true,
    name: "charizard",
    order: 7,
    stats: [
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: "hp",
        },
      },
      {
        base_stat: 84,
        effort: 0,
        stat: {
          name: "attack",
        },
      },
      {
        base_stat: 78,
        effort: 0,
        stat: {
          name: "defense",
        },
      },
      {
        base_stat: 109,
        effort: 3,
        stat: {
          name: "special-attack",
        },
      },
      {
        base_stat: 85,
        effort: 0,
        stat: {
          name: "special-defense",
        },
      },
      {
        base_stat: 100,
        effort: 0,
        stat: {
          name: "speed",
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "fire",
        },
      },
      {
        slot: 2,
        type: {
          name: "flying",
        },
      },
    ],
    weight: 905,
  },
};

let path = window.location.pathname;
let [pathName] = path.split("/").pop().split(".");

let firstTime = localStorage.getItem('firstTime');
if(firstTime == undefined){
  setTimeout(function(){
    localStorage.setItem('firstTime', 'false')
    alert('Press space to show stats')
  }, 2000)
}

// console.log(pathName);
let char = pokemon[pathName];
// console.log(char);

const SECTION = document.getElementById("section");
const HEADER = document.getElementById("header");

// init(char);
// function init(obj) {
//   createHeader(obj);
//   createTypes(obj);
// }

function createHeader(jsonObj) {
  const headerClass = [
    "card-container",
    "card",
    ["card-header", ["name", "name-id"], ["health-type"]],
  ];
  const { id, name: n, types } = jsonObj;
  let hp = char['stats'][0]['base_stat']
  



  //creating div elements and adding the class names
  const [cardConatiner, card, ...divs] = new Array(headerClass.flat(2).length)
    .fill("")
    .map((_, i) => {
      return document.createElement("div");
    });
  cardConatiner.classList.add("card-container");
  card.classList.add("card");
  divs.forEach((curr, i) => {
    curr.classList.add(headerClass.flat(2)[i + 2]);
    card.append(curr);
  });

  const cardHeader = card.querySelector(".card-header");

  const cardHeaderDivs = [...card.getElementsByTagName("div")].slice(1);

  cardHeaderDivs.forEach((curr) => {
    cardHeader.append(curr);
  });

  const name = cardHeader.querySelector(".name-id");
  let [p, pokeName] = [
    document.createElement("p"),
    document.createElement("p"),
  ];

  p.textContent = id;
  name.append(p);
  pokeName.textContent = n[0].toUpperCase() + n.slice(1);

  name.append(cardHeader.querySelector(".name"));

  name.querySelector(".name").append(pokeName);
  cardConatiner.append(card);

  HEADER.append(cardConatiner);
  // console.log(card);

  let [hpPokemon] = [
    document.createElement("p"),
    
  ];
  const healthType = cardHeader.querySelector(".health-type");
  healthType.append(hpPokemon);

  types.forEach((curr) => {
   const typePokemon = document.createElement("img");
   typePokemon.src =  `img/types/${curr.type.name}.png`
    // console.log(curr.type.name)
  healthType.append(typePokemon);
  })

  hpPokemon.textContent = hp;
  
  // console.log(hp);
}
createHeader(char);

const createImg = function (obj) {
  // <div class="image">
  //         <img src="./img/charmeleon_card.png" alt="" />
  //         <div class="heiwei-con">
  //           <p>Length:1 feet weight:20 pounds</p>
  //         </div>
  //       </div>
  const { height, weight: w, name: n } = obj;
  const imgClass = ["image", ["heiwei-con", ["p"]]];
  const image = document.createElement("div");
  image.classList.add("image");
  new Array(imgClass.flat(2).length - 1).fill("").forEach((_, i) => {
    const divs = document.createElement("div");
    divs.classList.add(imgClass.flat(2)[i + 1]);
    image.append(divs);
  });

  const p = image.querySelector(".p");
  p.textContent = `Lizard Pokemon. Height: ${(height * 0.1).toFixed(1)}m ,Weight: ${(w * 0.1).toFixed(1)} kg`;
  const huewei = image.querySelector(".heiwei-con");
  huewei.append(p);

  const imgPokemon = document.createElement("img");
  imgPokemon.src = `img/${n}-card.png`;
  imgPokemon.id = 'picture'

  image.append(imgPokemon);

  const card = HEADER.querySelector(".card");
  card.append(image);
};
createImg(char);

const abilitiesContainer = function (obj) {
  const { abilities, base_experience } = obj;
  const card = HEADER.querySelector(".card");
  const html = `<div class="abilities-container"><div class="ability1">
            <img src="./img/types/fire.png" alt="" />
            <h5>${abilities[0].name}</h5>
            <p>50</p>
          </div>
          <div class="ability2">
            <img src="img/types/fire.png" alt="" />
            <h5>${abilities[1].name}</h5>
            <p>11</p>
          </div>
             <div class="weakness-con">
            <div class="weakness">
              <p>weakness</p>
              <img src="img/types/water.png" alt="" />
            </div>
            <div class="resistence">
              <p>resistance</p>
            </div>
            <div class="retreat-cost">
              <p>retreat-cost</p>
              <img class="normal" src="img/types/normal.png" alt="" />
            </div>
          </div>
          </div>

           <div class="footer">
          <div class="baseEx">
            <p><div class = "color">Base Experience ${base_experience}</div></p>
          </div>
        </div>
        `;
  card.insertAdjacentHTML("afterbegin", html);
  // console.log(card);
};
abilitiesContainer(char);

if (char == pokemon['charizrd']) {
  let konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']
  let index = 0;
  window.addEventListener('keydown', function (event) {
    if (event.key == konami[index]) {
      index++
      if (index == 11) {
        makeShiny();
      }
    } else {
      index = 0;
    }
  })}

const makeShiny = () => {
  let picture = document.getElementById('picture');
  picture.src = 'img/shiny-charizard-card.png'
}
/**
 *
 */
//   const H1 = document.createElement("h1");
//   const H2 = document.createElement("h2");

//   H1.innerHTML = `<div>${jsonObj["name"]} </div>`;
//   H2.innerHTML = `<div>ID: ${jsonObj["id"]}</div><div>Height: ${jsonObj["height"]} ft </div> <div>Weight: ${jsonObj["weight"]} lbs</div>`;

//   HEADER.appendChild(H1);
//   HEADER.appendChild(H2);
// }

// function createTypes(jsonObj) {
//   let types = jsonObj["types"];
//   const DIV = document.createElement("div");
//   console.log(types);
//   for (type of types) {
//     const P3 = document.createElement("p");
//     P3.textContent = type["type"]["name"];
//     DIV.appendChild(P3);
//   }
//   SECTION.appendChild(DIV);
// }

// function createStats(obj) {
//   let names = ["abilities", "base experience", "stats"];

//   new Array(3).fill("").forEach((_, i) => {
//     const container = document.createElement("div");
//     SECTION.append(container);
//   });
//   console.log(SECTION);

//   let abilities = SECTION.querySelectorAll("div")[1];
//   let base_experience = SECTION.querySelectorAll("div")[2];
//   let stats = SECTION.querySelectorAll("div")[3];
//   let containers = [abilities, base_experience, stats];

//   new Array(3).fill("").forEach((_, i) => {
//     let title = document.createElement("h4");
//     title.textContent = names[i];
//     containers[i].append(title);
//   });
//   let baseExperince = containers.find((curr) => {
//     return curr.querySelector("h4").textContent == "base experience";
//   });
//   //base experinece value
//   let p = document.createElement("p");
//   p.textContent = obj["base_experience"];
//   baseExperince.append(p);
//   /**
//  * [
//           {
//             "base_stat": 78,
//             "effort": 0,
//             "stat": {
//               "name": "hp"
//             }
//           },
//  */
//   const { stats: s, abilities: abil } = obj;
//   s.forEach((curr, i) => {
//     const list = document.createElement("ul");
//     const liStat = document.createElement("li");
//     const liEffort = document.createElement("li");
//     const liBase = document.createElement("li");

//     liStat.textContent = s[i]["base_stat"];
//     liEffort.textContent = s[i]["effort"];
//     liBase.textContent = s[i]["stat"]["name"];

//     list.append(liBase);
//     list.append(liEffort);
//     list.append(liStat);
//     stats.append(list);
//   });
//   /**
//  * "abilities": [
//           {
//             "name": "blaze"
//           },
//           {
//             "name": "solar-power"
//           }
//         ],
//  */
//   const abilitiesUl = document.createElement("ul");

//   abil.forEach((abilities, i) => {
//     const li = document.createElement("li");
//     li.textContent = abilities["name"];
//     li.append(name);

//     albilitiesUl.append(li);
//   });

//   abilities.append(abilitiesUl);
// }
// createStats(char);

// const solution = function (num) {
//   const arr = Array.from({ length: num }, (_, i) => {
//     return i;
//   })
//     .filter((curr) => {
//       if (curr % 3 == 0 || curr % 5 == 0) {
//         return curr;
//       }
//     })
//     .reduce((acc, curr) => {
//       return acc + curr;
//     }, 0);

//   return arr;
// };
// //3,5
// console.log(solution(10));
