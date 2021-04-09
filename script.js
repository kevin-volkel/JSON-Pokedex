let pokemon = {
    charmander: {
        "abilities": [
          {
            "name": "blaze"
          },
          {
            "name": "solar-power"
          }
        ],
        "base_experience": 240,
        "height": 17,
        "id": 6,
        "is_default": true,
        "name": "charizard",
        "order": 7,
        "stats": [
          {
            "base_stat": 78,
            "effort": 0,
            "stat": {
              "name": "hp"
            }
          },
          {
            "base_stat": 84,
            "effort": 0,
            "stat": {
              "name": "attack"
            }
          },
          {
            "base_stat": 78,
            "effort": 0,
            "stat": {
              "name": "defense"
            }
          },
          {
            "base_stat": 109,
            "effort": 3,
            "stat": {
              "name": "special-attack"
            }
          },
          {
            "base_stat": 85,
            "effort": 0,
            "stat": {
              "name": "special-defense"
            }
          },
          {
            "base_stat": 100,
            "effort": 0,
            "stat": {
              "name": "speed"
            }
          }
        ],
        "types": [
          {
            "slot": 1,
            "type": {
              "name": "fire"
            }
          },
          {
            "slot": 2,
            "type": {
              "name": "flying"
            }
          }
        ],
        "weight": 905
      },

      charmeleon: {
        "abilities": [
          {
            "name": "blaze"
          },
          {
            "name": "solar-power"
          }
        ],
        "base_experience": 142,
        "height": 11,
        "id": 5,
        "is_default": true,
        "name": "charmeleon",
        "order": 6,
        "stats": [
          {
            "base_stat": 58,
            "effort": 0,
            "stat": {
              "name": "hp"
            }
          },
          {
            "base_stat": 64,
            "effort": 0,
            "stat": {
              "name": "attack"
            }
          },
          {
            "base_stat": 58,
            "effort": 0,
            "stat": {
              "name": "defense"
            }
          },
          {
            "base_stat": 80,
            "effort": 1,
            "stat": {
              "name": "special-attack"
            }
          },
          {
            "base_stat": 65,
            "effort": 0,
            "stat": {
              "name": "special-defense"
            }
          },
          {
            "base_stat": 80,
            "effort": 1,
            "stat": {
              "name": "speed"
            }
          }
        ],
        "types": [
          {
            "slot": 1,
            "type": {
              "name": "fire"
            }
          }
        ],
        "weight": 190
      },

      charizrd: {
        "abilities": [
          {
            "name": "blaze"
          },
          {
            "name": "solar-power"
          }
        ],
        "base_experience": 240,
        "height": 17,
        "id": 6,
        "is_default": true,
        "name": "charizard",
        "order": 7,
        "stats": [
          {
            "base_stat": 78,
            "effort": 0,
            "stat": {
              "name": "hp"
            }
          },
          {
            "base_stat": 84,
            "effort": 0,
            "stat": {
              "name": "attack"
            }
          },
          {
            "base_stat": 78,
            "effort": 0,
            "stat": {
              "name": "defense"
            }
          },
          {
            "base_stat": 109,
            "effort": 3,
            "stat": {
              "name": "special-attack"
            }
          },
          {
            "base_stat": 85,
            "effort": 0,
            "stat": {
              "name": "special-defense"
            }
          },
          {
            "base_stat": 100,
            "effort": 0,
            "stat": {
              "name": "speed"
            }
          }
        ],
        "types": [
          {
            "slot": 1,
            "type": {
              "name": "fire"
            }
          },
          {
            "slot": 2,
            "type": {
              "name": "flying"
            }
          }
        ],
        "weight": 905
      }
}

let path = window.location.pathname;
path = path.slice(1)
path = path.split('.')[0]

console.log(path)
let char = pokemon[path]
console.table(char)

const SECTION = document.getElementById('section')
const HEADER = document.getElementById('header')

init(char)
function init(obj){
    createHeader(obj)
    createSection(obj)
}

function createHeader(jsonObj){
    const H1 = document.createElement('h1')
    const P1 = document.createElement('p')

    H1.textContent = jsonObj['name']
    P1.textContent = jsonObj['id']

    HEADER.appendChild(H1)
    HEADER.appendChild(P1)
}
function createSection(){

}