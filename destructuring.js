'use script'

const arr = Array.from({length:11},(_,i) => {
    return i * 10
  })
console.log(arr)

const destruct = () => {
    //where you write code to modify array
    return arr
}
  let [a,b,c,d,e,f,g,h,i,j,k] = destruct()
  
  let ab = 1;
  let bb = 3;
  
  [ab, bb] = [bb, ab];
  
  console.log(b)

  /**
   * destructuring is breaking down a object and putting it in individual parts
   * 
   * 
   * each variable declared in the destructuring asignment will have the positions of the array we asign it in  order
   *  
   *   let [a,b,c,d,e,f,g,h,i,j,k] = arr
   * 
   * 
   * //Destructuring objects
   * 
   * this breaks up the object into smaller objects with the same name
   * the variables need to be the object keys
   * 
   * rest operator
   * we can use this on any iterable when using the destructuring asignment and grab the rest of the objects or arrays and store that in arrays and objects
   * 
   * 
   * 
   */

   let obj = {
       names:{  
        '01':'jeff',
        '02':'jill',
        '03':'john',
        '04':'jack',
        '05':'jim',
        },
       grades:{
        01:30,
        02:78,
        03:95,
        04:67,
        05:89,
       },
       id:{
            '01':1234,
            '02':2345,
            '03':3456,
            '04':4567,
            '05':5678,
                hidden:{
                    'fn':'found'
                }
   }
}

const {names:studentNames = 'no students', ...theRest} = obj
console.log(studentNames,theRest)


const {id:{hidden:hide}} = obj
console.log('------------------',hide, '--------------')

const deepLevel = [1,2,3,[3,4,5]]

const [num1, , num3,[num4,num5,num6]] = deepLevel
console.log(num3)

let charmander = {
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
}
const {name:n,stats:s,abilities:abils, id,...others} = charmander
console.log(s)