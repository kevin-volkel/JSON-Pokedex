let pokemon = {
    charmander: {
      //ul
      "abilities": [
        {
          "name": "blaze"
        },
        {
          "name": "solar-power"
        }
      ],
      "base_experience": 62,
      "height": 6,
      "id": 4,
      "is_default": true,
      "name": "charmander",
      "order": 5,
      "stats": [
        {
          "base_stat": 39,
          "effort": 0,
          "stat": {
            "name": "hp"
          }
        },
        {
          "base_stat": 52,
          "effort": 0,
          "stat": {
            "name": "attack"
          }
        },
        {
          "base_stat": 43,
          "effort": 0,
          "stat": {
            "name": "defense"
          }
        },
        {
          "base_stat": 60,
          "effort": 0,
          "stat": {
            "name": "special-attack"
          }
        },
        {
          "base_stat": 50,
          "effort": 0,
          "stat": {
            "name": "special-defense"
          }
        },
        {
          "base_stat": 65,
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
      "weight": 85
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

let path = window.location.pathname
let [pathName] = path.split('/').pop().split('.')

console.log(pathName)
let char = pokemon[pathName]
console.log(char)

const SECTION = document.getElementById('section')
const HEADER = document.getElementById('header')

init(char)
function init(obj){
  createHeader(obj)
  createTypes(obj)
}

function createHeader(jsonObj){
  const H1 = document.createElement('h1')
  const H2 = document.createElement('h2')

  H1.innerHTML = `<div>${jsonObj['name']} </div>`
  H2.innerHTML = `<div>ID: ${jsonObj['id']}</div><div>Height: ${jsonObj['height']} ft </div> <div>Weight: ${jsonObj['weight']} lbs</div>`

  HEADER.appendChild(H1)
  HEADER.appendChild(H2)
}

function createTypes(jsonObj){
  let types = jsonObj['types'];
  const DIV = document.createElement('div')
  console.log(types)
  for(type of types){
    const P3 = document.createElement('p');
    P3.textContent = type['type']['name']
    DIV.appendChild(P3)
  }
  SECTION.appendChild(DIV)
}


function createStats (obj){
  let names = ['abilities','base experience','stats']

    new Array(3).fill('').forEach((_,i) => {
      const container = document.createElement('div')
      SECTION.append(container)
    })
    console.log(SECTION)

    let abilities = SECTION.querySelectorAll('div')[1]
    let base_experience = SECTION.querySelectorAll('div')[2]
    let stats = SECTION.querySelectorAll('div')[3]
    let containers = [abilities,base_experience,stats]

    new Array(3).fill('').forEach((_,i) => {
      let title = document.createElement('h4')
      title.textContent = names[i];
        containers[i].append(title);
    })
    let baseExperince = containers.find(curr => {
      return curr.querySelector('h4').textContent == 'base experience';
    })
    //base experinece value
    let p = document.createElement('p')
    p.textContent = obj['base_experience']
    baseExperince.append(p)
/**
 * [
          {
            "base_stat": 78,
            "effort": 0,
            "stat": {
              "name": "hp"
            }
          },
 */
    obj['stats'].forEach((curr,i) => {
        const list = document.createElement('ul')
        const liStat = document.createElement('li')
        const liEffort = document.createElement('li')
        const liBase = document.createElement('li')
        const baseStat = document.createElement('p');
        const effort = document.createElement('p');
            const stat = document.createElement('p');

          for(let key in curr){
      
            baseStat.textContent = obj['stats'][i]['base_stat'];
            effort.textContent = obj['stats'][i]['effort'];
            stat.textContent = obj['stats'][i]['stat']['name'];

            liBase.append(baseStat)
            liEffort.append(effort)
            liStat.append(stat)      
          }
          list.append(liBase)
            list.append(liEffort)
            list.append(liStat)
          stats.append(list)
    })
/**
 * "abilities": [
          {
            "name": "blaze"
          },
          {
            "name": "solar-power"
          }
        ],
 */
const abilitiesUl = document.createElement('ul')

 obj['abilities'].forEach((obj,i) => {
  const name = document.createElement('p')

    const li = document.createElement('li')
    name.textContent = obj['name']
    li.append(name)
    
  abilitiesUl.append(li)
 })

 abilities.append(abilitiesUl)

    


}
createStats(char)