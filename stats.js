$(function () {
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

  let backlog = 0;
  let delay = 500;
  let spamChecker = setInterval(checkForSpam ,1000);

  // let container = document.querySelector('.card-container');
  let path = window.location.pathname;
  let [pathName] = path.split("/").pop().split(".");

  let char = pokemon[pathName];

  // let { stats } = char;
  // console.log(stats);

  // const GRID = document.createElement("div");
  // GRID.id = "grid";
  // const NAME = document.createElement("p");
  // NAME.textContent = "NAME";
  // GRID.appendChild(NAME);
  // const VALUE = document.createElement("p");
  // VALUE.textContent = "VALUE";
  // GRID.appendChild(VALUE);
  // const EFFORT = document.createElement("p");
  // EFFORT.textContent = "EFFORT";
  // GRID.appendChild(EFFORT);

  // for (stat of stats) {
  //   const NAME = document.createElement("p");
  //   const VALUE = document.createElement("p");
  //   const EFFORT = document.createElement("p");

  //   NAME.textContent = stat["stat"]["name"];
  //   GRID.appendChild(NAME);
  //   VALUE.textContent = stat["base_stat"];
  //   GRID.appendChild(VALUE);
  //   EFFORT.textContent = stat["effort"];
  //   GRID.appendChild(EFFORT);
  // }
  // flexCon.appendChild(GRID);

  const statsContainer = document.querySelector('.grid-stats-con')
  const flexContainer = document.querySelector('.container-stats')
const statsCreater = function(obj){
  let {stats} = obj
  let grid = [];

  let order = ['hp', 'speed', 'attack', 'special-attack', 'defense', 'special-defense']

  for(i of stats){
    let stat = [];
    stat.push(i['stat']['name']);
    stat.push(i);
    grid.push(stat)
  }
  console.log(grid)

/*
   base_stat: 85,
          effort: 0,
          stat: {
            name: "special-defense",
          },
   */
  // for(i in order){
  //   stat = stats[i]
  //   let baseStat = stat['base_stat'];
  //   let name = stat['stat'].name
  //   console.log(name)
  //   let html = `<div class=" box">
  //   <div class="items-con">
  //       <img src="./img/stats/${name}.png" alt="">

  //       <div class="content-stat">
  //           <p>${baseStat}</p>
  //           <p>${name}</p>
  //       </div>
  //   </div>`
  //   statsContainer.insertAdjacentHTML('afterbegin',html)

  // }

}
statsCreater(char)
    let shown = false;
    $('#body').on('keyup', function (event){
        if(event.key == ' '){
          backlog++;
          $('#hint').fadeOut(500)
            if(!shown){
                $(flexContainer).animate({
                  top: '0%'
                }, 500)
                shown = true;
                $('.card').animate({
                  top: '100vh'
                }, 500)
            }else{
                $(flexContainer).animate({
                    top: '-100%'
                }, 500)
                $('.card').animate({
                  top: '0'
                }, 500)
                shown = false;
            }
            
        }
    })

  function checkForSpam(){
    if(backlog > 10){
      for(let i = 0; i < backlog; i++){
        $('.card').finish()
        $('.flex-stats').finish()
      }
    }
    backlog = 0;
  }
})
