$(function(){
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

    let char = pokemon[pathName];

    let {stats} = char;
    console.log(stats)

    const GRID = document.createElement("div")
    GRID.id = "grid"
    const NAME = document.createElement('p');
    NAME.textContent = "NAME"
    GRID.appendChild(NAME)
    const VALUE = document.createElement('p');
    VALUE.textContent = "VALUE"
    GRID.appendChild(VALUE)
    const EFFORT = document.createElement('p');
    EFFORT.textContent = "EFFORT"
    GRID.appendChild(EFFORT)

    for(stat of stats){
        const NAME = document.createElement("p");
        const VALUE = document.createElement("p");
        const EFFORT = document.createElement("p");

        NAME.textContent = stat['stat']['name']
        GRID.appendChild(NAME)
        VALUE.textContent = stat['base_stat']
        GRID.appendChild(VALUE)
        EFFORT.textContent = stat['effort']
        GRID.appendChild(EFFORT)
    }
    body.appendChild(GRID)

    let shown = false;
    $('#body').on('keypress', function (event){
        if(event.key == ' '){
            if(!shown){
                $('#grid').animate({
                    bottom: '50vh'
                }, 3000)
                shown = true;
            }else{
                $('#grid').animate({
                    bottom: '0'
                }, 3000)
                shown = false;
            }
            
        }
    })
})