 

// let arr = [1,5,6,7]



// const sumArray = arr.reduce((sumArr,element)=>{
//    return sumArr + element
// },0)

// console.log(sumArray)
// const newarr = arr.map((i) => i+2)

// console.log(newarr)

// newarr.push(98)

// console.log(newarr)

// console.log(arr)

// newarr.pop()

// console.log(newarr)


// newarr.unshift(52)

// console.log(newarr)

// newarr.shift(52)

// console.log(newarr)


// let obj = {
//     car: "Hyundai",
//     price: 10 ,
//     contry: "Japan"
// }

// const obj1 = JSON.parse(JSON.stringify(obj))
// console.log(obj1)

// const {price,...car_country} = obj
// console.log(car_country)

// const {price : newprice,...car_country} = obj
// const newobj = {newprice,...car_country}
// console.log(newobj)



// const arr2 = [{car: "Toyota", model: "Camry"},{car: "Opel",model: "Astra"},{car: "Mitsubishi",model: "Pajero"}]

// const arr3 = arr2.find((object)=>{
//    return object.model === "Camry"
// })
 
// console.log(arr3)

// const arr2 = {car: "Opel",model: "Astra",country: "Italy"}

// const arrKeys = Object.keys(arr2)

// const arrValues = Object.values(arr2)


// console.log(arrKeys)

// console.log(arrValues)

// let objectFromArray = arrKeys.reduce((array,key,index)=>{
//       array[key] = arrValues[index]
//       return array  
// }, {})
// console.log(objectFromArray)


    // Задача 1 

// const myCountry = "Azerbaijan"

// console.log(myCountry)

    //Задача 2 

//  let myCountry
 
//  myCountry = true

//  console.log(myCountry)

//  myCountry = false

//  console.log(myCountry)

    //Задача 3 //   

    // let a = 9s
 
    // let b = 10

    // let c = a*b
    // console.log(c)

    // Задача 4
    
    // let name = "Vuqar"
    
    // let surname = "Elyasov"

    // let profession = "Frontend"


    // let allText1 = 'Меня зовут' + ' ' + name +' '+surname + ' ' + 'и я' + ' ' + profession + ' ' + 'разработчик'
    
    // let allText2 = `Меня зовут ${name} ${surname} и я ${profession} разработчик`

    // console.log(allText1)
    // console.log(allText2)

    // Задача 5

    /**Комеентарии
     * первый комментарий
     * второй
     * третий
     */

    // Задача 6

    // let age = 6 , str = 'Car' , bool = true , unDefined = null 

    // let arr = [15,'salam',0]

    // let obj = {
    //     car: 'Hyudai',
    //     model: 'Elantra',
    //     price: undefined
    // }

    // let a

    // console.log(typeof(a))
    // console.log(typeof(age))
    // console.log(typeof(str))
    // console.log(typeof(bool))
    // console.log(typeof(unDefined))
    // console.log(typeof(arr))
    // console.log(typeof obj)

    // Задача 7 

    // function myName (){
    //    let a = 'Vuqar'

    //    console.log(a)

    //    return a
    // }

    // const a = myName()
    // console.log(a)
    
    // Задача 8

    // let testFunction = function (name){
    
    //     return `Привет ${name}`
    // }

    // const functionExample = testFunction('Vuqar')
  

    // console.log(functionExample);

    // Задача 9

    // Variant 1 s

    // let testFunction2 = () => 'Привет Мир'
    
    // console.log(testFunction2())

    // Variant 2

    // let testFunction3 = () => {
    //     return 'Привет Мир'
    // }
    // console.log(testFunction3())

    // Задача 10
    
    // /**
    //  * Вычисляем разницу двух чисел
    //  * @param {number} a 
    //  * @param {number} b 
    //  * @returns {number} Разница чисел
    //  */
    // const difference = (a,b) => {
    //     return a-b
    // }

    // console.log(difference(10,9))

    // Задача 11

//     setTimeout(()=> {
//      console.log('Привет Мир')
// },5000)
  
    // Задача 12

// const person = {
//     name: 'Vuqar',
//     surname: 'Elyasov',
//     myFavoriteNumber: 10
// }

// const personText = `My name is ${person.name} ${person.surname} and my favorite number is ${person.myFavoriteNumber} `
// console.log(personText)

    // Задача 13
 
    // const a = 'Salam aleykum' 
    
    // console.log(a.length)

    // Задача 14 

    // let text = 'football'

    // console.log(text instanceof String)
    
    // console.log(typeof(text))


    // let text2 = text.toUpperCase()

    // console.log(text2)

    // toUpperCase(text)

    // const text = new String ("Vuqar")

    // console.log(text instanceof String)

    // console.log(typeof text)

     // Задача 15

    // let a = 'Good morning'
    
    // let b = a.replace('morning','evening')

    // console.log(b)

    // Задача 16

    // const arr = [90, 'name', true]

    // console.log(arr[0])

    // console.log(arr.length)

    // Задача 17

    // const arr = [90, 'name', true]

    // console.log(arr)

    // arr[1] = 'surname'

    // console.log(arr)

    // Задача 18

    // const arr = [95, 'name', true, 0]


    // arr.forEach((element) =>{   
    //     console.log(element)
    // })


    // Задача 19

    // let arr = [95, 'name', true, 0]

    // arr.push(5,'salam')

    // console.log(arr)

    // console.log(arr.length)

    // Задача 20

    // const date = new Date()

    // console.log(date)

    // const dateInMs = date.getTime()

    // console.log(dateInMs)

    //  Задача 21

        // Variant 1

    // let a = 90

    // let b = '8'

    // b = parseInt(b)

    // console.log(a <= b)



        // Varinat 2

    // function ab (a,b){
    //     if (a <= b ){
    //         console.log(false)
    //     }
    //     if (a > b) {
    //         console.log(true)
    //     }
    // }

    // console.log(ab(a,b))


    // Varinat 3

// let comParispon = (a,b) => {
//     return (a <= b) ? false : true
// } 
    
// console.log(comParispon(a,b))


    // Задача 22
    
//  const myNumber1 = 20
 
//  const myNumber2 = 3

//  console.log(myNumber1/myNumber2)

//  console.log(myNumber1%myNumber2)

    // Задача 23
    
// console.log(3 || true && null || false)

// console.log(true && false)

// console.log(5 && 10)

    // Задача 24
    
//  let a = 12

// Variant 1

// a = a + 9

// console.log(a)

// a = a - 4

// console.log(a)

// a = a * 2

// console.log(a)

// a = a / 4

// console.log(a)

// Varinat 2 

// a += 9

// console.log(a)

// a -= 4

// console.log(a)

// a *= 2

// console.log(a)

// a /= 4

// console.log(a)

    // Задача 26

// function fn (){
//     console.log("Privet mir")

//     return function abc (a){
//         console.log(a)
//     }
// }

// fn()("Salam")

  
  // Задача 303

   // Variant 1

//   setTimeout(function fn () {
//         console.log('Privet mir')
//   },2000)

 
   // Variant 2 
   
//   function fn (){
//         console.log('Privet mir')
//   }

//   setTimeout(fn,2000)


    // Задача 31

//     let a = 1

//     let creatInterval = setInterval(()=>{
//         console.log('Sms number' + a)
//         a = a + 1
//     },2000)

// clearInterval(creatInterval)

// setTimeout(() => {
//     clearInterval(creatInterval)
// }, 11000);

      //  Задача 32

    // let arr = [1,4,'Vuqar',false]

    // arr.unshift('Privet')

    // arr.unshift(10)

    // console.log(arr.length)

    // console.log(arr)



    // Задача 33
    
//   const arr = [1,6,'salam']
  
//   arr[arr.length] = 'Vuqar'

//   console.log(arr)

//  console.log(arr)

//  console.log(arr.length)


    //  Задача 34

const arrObj = [
    {
        car: 'Hyundai',
        price: 20000,
        isAvalible: true},
    {
        car: 'Toyota',
        price: 15000,
        isAvalible: true},
    {
        car: 'Opel',
        price: 30000,
        isAvalible: false}
]   


const newObj = {
    car: 'Chevrolet',
    price: 14000,
    isAvalible: false
}

// arrObj.push(newObj)

// console.log(arrObj)

console.log(arrObj[0].car)


