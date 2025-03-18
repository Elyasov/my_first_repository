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

// const arrObj = [
//     {
//         car: 'Hyundai',
//         price: 20000,
//         isAvalible: true},
//     {
//         car: 'Toyota',
//         price: 15000,
//         isAvalible: true},
//     {
//         car: 'Opel',
//         price: 30000,
//         isAvalible: false}
// ]   


// const newObj = {
//     car: 'Chevrolet',
//     price: 14000,
//     isAvalible: false
// }

// arrObj.push(newObj)

// console.log(arrObj)

// console.log(arrObj[0].car)


    //  Задаача 35

// const obj = {
//     key1: true,
//     key5: null,
//     key3: 'abc',
//     key4: NaN,
//     key10: 10
// }

//  const objKeys = Object.keys(obj)

//  console.log(objKeys)

    // Variant 1

//  objKeys.forEach((element)=>{
//     if (element === 'key1' || element === 'key3' ){
//         console.log(obj[element])
//     }
//  })

    // Variant 2  

// for (element in obj ){
//     if (element === 'key1' || element === 'key3'){
//         console.log(element)
//     }
// }


    // Задача 37

// const obj = {
//     price: 50,
//     car: 'Hyundai',
//     model: 'Sonata',

// }
    
// Object.prototype.country = 'Japan'


// for (key in obj){
//     if (obj.hasOwnProperty (key) ){
//         console.log(obj[key]) 
//     }
// }

    // Задача 38
    
      // Variant 1  
// function isArrayEmpty (myArray){
//     if (myArray.length > 0){
//         return "Массив не пустой"
//     } else {
//         return "Массив пустой"
//     }
// }    

// console.log(isArrayEmpty([1,5,9]))

     //  Variant 2

// function isArrayEmpty (myArray){
//     if (myArray.length > 0){
//         return "Массив не пустой"
//     } 
//     if (myArray.length === 0){
    
//        return "Массив пустой"

//     }
// }   

// console.log(isArrayEmpty([]))


        //  Variant 3

// function isArrayEmpty (myArray){
//     if (myArray.length > 0){
//         return "Массив не пустой"
//     }     
//        return "Массив пустой"
// }   

// console.log(isArrayEmpty([]))


        //  Variant 4

// const isArrayEmpty = (myArray) => 
    
//     myArray.length > 0 ?
//     'Массив не пустой' 
//     : 'Массив пустой'   
    


// console.log(isArrayEmpty([]))

    //  Задача 39
    
// const arr = ['London', 'Baku','Moscow']

// const cityInfo = (property, index) =>
//     `${property} at the index ${index} in my array`

// // console.log(cityInfo('london',4))

// const arrLog = arr.forEach((city,index) => console.log(cityInfo(city,index)))



    // Задача 40
    
  
// const postJson = [
//     '{"postId": 5266, "commentsQuantity": 7}',
//     '{"postId": 5000, "commentsQuantity": 8}',
//     '{"postId": 5216, "commentsQuantity": 11}',
//     '{"postId": 3166, "commentsQuantity": 15}',
// ]


        // Variant 1
// const newArr = postJson.map((el) => {

//     return JSON.parse(el)

// })

// console.log(newArr)


// console.log(newArr[1].postId)

// console.log(newArr[newArr.length - 1].commentsQuantity)

     // Variant 2 

// const newArr = postJson.map(JSON.parse)


// console.log(newArr)


// console.log(newArr[1].postId)

// console.log(newArr[newArr.length - 1].commentsQuantity)



    // Задача 41 


// const objFind = [
//     {postId: 5266, commentsQuantity: 7},
//     {postId: 5000, commentsQuantity: 8},
//     {postId: 5216, commentsQuantity: 11},
//     {postId: 3166, commentsQuantity: 15},
// ]



// const objFind2 = objFind.find((post) =>    

//     post.postId === 45447)

// console.log(objFind2)


// const objFind = [
//     {postId: 5266, commentsQuantity: 7},
//     {postId: 5000, commentsQuantity: 8},
//     {postId: 5216, commentsQuantity: 11},
//     {postId: 3166, commentsQuantity: 15},
// ]


// function findPostById (arr, postId){
//  return  arr.find((element)=>{
//         return element.postId === postId
//     })
// }

// console.log(findPostById(objFind, 3166))


    // Задача 43
    
// const arr1 = [1,4,6,7]

// const arr2 = [1,4,6,7]

// const arr3 = [5,8,43,7]

    // Variant 1 

// function areArraysEqual (firstArray,seconArray){
//      if (firstArray.length === seconArray.length && firstArray.every((element,index)=>{
//        return element === seconArray[index]
//     })){
//         return true
//     }

//     return false
// }


// console.log(areArraysEqual(arr1,arr2))

    // Variant 2

// const areArraysEqual = (firstArray,seconArray) => {
//     if (firstArray.length === seconArray.length
//      &&   
//      firstArray.every((element,index) => element === seconArray[index])){
//         return true
//      }
//      return false
// }
// console.log(areArraysEqual(arr1,arr3))


    // Задача 44

    // Variant 1 
    
//  const isElementInArray = (inputArray,searchElement) =>{
//     if (inputArray.find(element=> element === searchElement 
//     )){
//         return true
//     }
//     return false 
//  } 

//   const arr = [1,5,6,8,9,10]

//  console.log(isElementInArray(arr,14))


    // Variant 2
    
    // const isElementInArray = (inputArray,searchElement) =>{
    //    return inputArray.includes(searchElement) 
    // }


    // console.log(isElementInArray(arr,5))
    // console.log(isElementInArray(arr,96))
    // console.log(isElementInArray(arr,8))


        // Задача 45
        
//       const isElementInArray = (inputArray,searchElement) =>{
           
//         if (typeof searchElement !== 'object'){
//             return inputArray.includes(searchElement)
//         }
//            return inputArray.map((element)=> JSON.stringify(element)).includes(JSON.stringify(searchElement))
//       }


//       const arr1 = [
//       ['dog','animal'],
//       [1,6,'salam'],
//       [true,'Vuqar','car']
//     ]

//     const notObjekt = ['Elsever','Safar',1,7]

//     const ob1 = [
//         {car: "Hyundai",model: "Sonata"},
//         {car: "Toyota",model: "Camry"},
//         {car: "Honda",model: "Honda"}
//     ]


// console.log(isElementInArray(arr1,[1,6,'salam']))
// console.log(isElementInArray(notObjekt,'Safar'))
// console.log(isElementInArray(ob1,{model: "Sonata"}))

        // Задача 46 

// const pushNewElement = (inputArray,newElement)=>{
    
//     if (inputArray.includes(newElement)){
//         return `Массив содержит такой элемент как ${newElement}` 
//     }
//       inputArray.push(newElement)

//       return inputArray
     

// }


// const arr = [1,6,8,9]

// console.log(pushNewElement(arr,9))

// console.log(pushNewElement(arr,52))

// console.log(arr)

    // Задача 47

//     const arrObj = [
//         {postId: 1552,car: "Hyundai",model: "Sonata",comment: 18},
//         {postId: 1542,car: "Toyota",model: "Camry",comment: 8},
//         {postId: 1202,car: "Honda",model: "Honda", comment: 25}
//     ]


//     const popularPostIds = (postsArray,minimalComentsQty)=>{
//          return postsArray.reduce((postIdsArray,post)=>{
//            return post.comment > minimalComentsQty ? postIdsArray.concat([post.postId]): postIdsArray}, [] )
//     }
    

// console.log(popularPostIds(arrObj,10))

    // задача 48 

    // const arrObj = [
    //     {category:'Cars', quentity: 18},
    //     {category: 'Compamies', quentity: 8},
    //     {category: 'Computers', quentity: 25},
    //     {category: 'Compamies', quentity: 7},
    // ]


    // const quantitiesByCategories = (productsArray) =>{

    //     return productsArray.reduce((quentityObject,product)=>{

    //         quentityObject[product.category] = (quentityObject[product.category] || 0 ) + product.quentity

    //         return quentityObject
    //     },{})

    // }


    // console.log(quantitiesByCategories(arrObj))



         // Задача 49

    // const sortedArray = (prodArray)=>{

    //    return [...prodArray].sort((element1,element2)=>{
    //         return element1.price - element2.price
    //     })
    // }

    // const inputProducts = [
    //     {car:'hyundai', price: 52},
    //     {car:'toyota', price: 6},
    //     {car:'honda', price: 100},
    //     {car:'jiquli', price: 10}
    // ]

    // console.log(sortedArray(inputProducts))

    // console.log(inputProducts)


        // Задача 50
        
//    const templateLiteral = (number) =>
//     `Число ${number} 
// Это число ${number > 10? 'больше': 'меньше'} 10 
// также квадратный корень этого числа -${Math.sqrt(number)}`
         



//    const num = 2

//    console.log(templateLiteral(num))


     // Задача 51
     


        // Varinat 1 

    // function meanScore (...scores) {
       
    //     return score1.reduce((mean,element)=> mean + element/scores.length, 0)

    // }


    // const score1 = [1,5,6,7,8]

    // const score2 = [10,5,2,17,34,6]

    // const score3 = [9,50,61,74,81,121,12]


    // console.log(meanScore(...score1))




        // Variant 2 

    // function meanScore (...scores){

    //     if (scores.some((el)=> typeof el !== 'number')){

    //           console.error('Не все элементы числа')

    //         // throw new Error('Не все элементы числа')
             
    //     }

    //     return score1.reduce((mean,element)=>       
    //           mean + element/scores.length,0)      
    // }  

    


    // const score1 = [1,5,6,7,8]

    // const score2 = [10,5,2,17,34,6]

    // const score3 = [9,50,61,74,81,121,12]

    // const score4 = [9,50,61,true,81,'cars',12]



    // console.log(meanScore(...score1))


    // console.log(meanScore(...score2))

    // console.log(meanScore(...score4))



        // Задача 52
        
    // const weatherForeCast = (city,wearher) => {

    //     if (wearher === 'undefined'){
    //         return `${city}.Отличная погода`
    //     }

    //     return `${city}.${wearher}`
    // }


    // console.log(weatherForeCast('london'))




    // const weatherForeCast = (city,wearher = 'Otlicnaya poqoda') => {

    //     return `${city}.${wearher}`

    // }


    // console.log(weatherForeCast('london'))



    //     const weatherForeCast = (city,wearher) => {

    //      wearher = wearher !== undefined ? wearher : 'Otlicnaya poqoda'

    //         return `${city}.${wearher}`

    // }


    // console.log(weatherForeCast('london'))



        // Задача 54

//     const processQuantyties = (arr)=>{

//         const [a,b,c = 0] = arr

//         console.log(a)
       
//         console.log(b)
       
//         console.log(c)
       
//         return a+b-c

//     }    


//   const myArray = [5,7,9]

//   console.log(processQuantyties(myArray))

// console.log(processQuantyties(myArray))



//     const processQuantyties = ([ a,b,c = 0 ])=>{

//         console.log(a)
       
//         console.log(b)
       
//         console.log(c)
       
//         return a+b-c

//     }    


//   const myArray = [5,7,9]

// processQuantyties(myArray)

// console.log(processQuantyties(myArray))
    


    // Задача 55
    
// function minMax (...arr) {

//     return [Math.min(...arr), Math.max(...arr)]

// }


// const myArray = (4,5,3,7,45,77,8)


// let [min,max] = minMax(4,5,3,7,45,77,8)

// console.log(min,max)


    // Задача 56
       
// const a = (obj) =>{

//     const {name, age: myage, location:{city:mycity,contry:mycountry},friendsQty = 0,createdatYear = new Date().getFullYear()} = obj

//     return {
//         name, 
//         myage,
//         mycountry,
//         mycity,
//         createdatYear,
//         friendsQty,
//     }

// }

// const person = {
//     name: "Vuqar",
//     age: 26,
//     location: {
//         contry: "Azerbaijan",
//         city: "Baku"
//     }
// }

// console.log(a(person))



    // Задача 57

    // Variant 1 

// const postFunction = (posts)=>{

//     return posts.map((post)=>{
//         return {
//             postId:post.postId,
//             postAutor:post.autor,
//             postCommentsQty:post.commentsQty
//         }

//     })

// }

// const testPosts = [
//     {postId: 200,autor:"vuqar",commentsQty: 50},
//     {postId: 400,autor:"safar",commentsQty: 30},
//     {postId: 53,autor:"elsever",commentsQty: 20}
// ]


// console.log(postFunction(testPosts))

// console.log(testPosts)


    // Variant 2

// const postFunction = (posts)=>{

//     return posts.map((post)=>{
//         const {postId, autor:postAutor, commentsQty:postCommentsQty = 0} = post
//         return {
//             postId:postId + 1000,
//             postAutor,
//             postCommentsQty
//         }

//     })

// }

// const testPosts = [
//     {postId: 200,autor:"vuqar",commentsQty: 50},
//     {postId: 400,autor:"safar",commentsQty: 30},
//     {postId: 53,autor:"elsever",commentsQty: 20},
//     {postId: 53,autor:"elsever"}
// ]


// console.log(postFunction(testPosts))

// console.log(testPosts)




    // Задача 58



// let obj = {
//     name: 'Vuqar',
//     surname: 'Elyasov',
//     age: '25',
//     country: 'azerbaijan',
//     city: 'baku',
// }



// const {name,surname,age,...obj2} = obj

// console.log(obj2)

// console.log(obj)


// {
//     let city,country
//     ({city,country,...obj} = obj)
// }


// console.log(obj)

// console.log(city)


    // Задача 59

// class ExtendedArray extends Array {

//     sum () {

//        return this.reduce((sum,element)=> typeof element === 'number' ? sum + element : undefined, 0)
//     }

//     onlyNumbers (){

//       return  this.filter((element)=> typeof element === 'number')
            
//         }

//     }
    

// const testArray = new ExtendedArray (5,8,7,6,'asdasd',true)

// console.log(testArray)

// console.log(testArray.sum())

// console.log(testArray.onlyNumbers())




    // Задача 60

//   class CustomArray extends Array {

//     customPush (newElement){
        
//         this[this.length] = newElement
//         console.log(`Новый элемент ${newElement} добавлен в массивё`)

//     }

//   }  
    
  

//   const arr = new CustomArray(12,2,5,7)

//   arr.customPush(6)

//   console.log(arr)

//   console.log(arr.length)



    // Задача 61


// function sumNumbers (){

//     let sum = 0
//     for (let index = 0; index < arguments.length; index++) {
//         sum = sum + arguments[index]        
//         console.log('Sum arguments is', sum)
//     }
//     return sum
// }


// // const arr = [1,5,6,7,8]

// // console.log(sumNumbers(arr))


// const numbers = sumNumbers(1,5,6,6,7)

// console.log(numbers)


    // Задача 62
    


// console.log(myNumbers(10,9))


// function myNumbers (a,b){

//     return a + b 

// }

// console.log(myNumbers(5,9))


// console.log(myNum(5,90))



// const myNum = function(a,b) {

//     return a + b
// }


// console.log(myNum(5,63))

    // Задача 66

// function mult(a,b){

//     return a * b
// }

// setTimeout(() => {
//    return console.log(mult(5,9))
// }, 1000);



    // Задача 67

// function multiPlay (a,b){

//     b = b !== undefined?b:5

//    console.log(a*b) 
// }

// multiPlay(5,6)
// multiPlay(8)




// function multiPlay (a,b){

//     b = b || 5

//    console.log(a*b) 
// }

// multiPlay(5,0)

// multiPlay(5,undefined)




    // Задача 68
    
//  function square(a){

//     return a * a

//  }  

//  console.log(square(9))

//  console.log(square())


 
// function square(a){

//     if (a === undefined) {
//         throw new Error('Функция square не может быть вызвана без аргумента')
//     }
     
//     return a * a

//  }  

//  console.log(square(10))

//  console.log(square())


    // Задача 69
    
    // Variant 1 
//  const mult = (obj)=>{
//     const {x,y,z} = obj
//     return x * y * z
//  }   



//  const myObject = {
//     x: 5,
//     y: 8,
//     z: 10,
//  }


//  console.log(mult(myObject))



    // Variant 2
    
    // const mult = ({x,y,z})=>{
    
    //     return x * y * z
    //  }   
    
    
    
    //  const myObject = {
    //     x: 5,
    //     y: 8,
    //     z: 10,
    //  }
    
    
    //  console.log(mult(myObject))   


      // Задача 70
      
//    const myArray = [1,5,8,9,65,48]
   
//    const [a,b,...c] = myArray 


//    console.log(a)

//    console.log(b)

//    console.log(c)



    // Задача 71

//  const a = [1,6,7]
//  const b = [3,9,2]
//  const c = [45,15,36]
 
 
//  const abc = [0,...a,...b,...c]

//  console.log(abc)

// const abc = [0,a,b,c]
// console.log(abc)


    // Задача 72
    
    // Variant 1

//  const a = [1,5,6,'vuqar'] 
 
 
//  const b = JSON.parse(JSON.stringify(a))

//  console.log(b)


//  b[b.length] = 89

//  console.log(b)

//  console.log(a)

    // Variant 2
    
//  const a = [1,5,6,'vuqar'] 

//  const b = [...a]

//  console.log(b)

//  b.push(4)

//  console.log(b)

//  console.log(a)

    // Variant 3
    
//  const a = [1,5,6,'vuqar']     

//  const b = Array.from(a)

//  b.push(8797)

//  console.log(b)

//  console.log(a)


 
    // Задача 73
    



// function carInfo (obj){
//     return `Цена бренда ${obj.brand} составляет ${obj.price}$ и это ${ obj.price > 80000 ? 'Дорогая машина': 'Дешевая машина'}`
// }


// const cars = [
//     {brand: 'Hyundai', price: 50000},
//     {brand: 'Honda', price: 100000},
// ]   

// cars.forEach((car)=> console.log(carInfo(car)))



// const cars = [
//     {brand: 'Hyundai', price: 50000},
//     {brand: 'Honda', price: 100000},
// ]   

// cars.forEach((car)=> console.log(`Цена бренда ${car.brand} составляет ${car.price}$ и это ${ car.price > 80000 ? 'Дорогая машина': 'Дешевая машина'}`))




// const cars = [
//     {brand: 'Hyundai', price: 50000},
//     {brand: 'Honda', price: 100000},
// ]   

// cars.forEach(({brand,price})=> console.log(`Цена бренда ${brand} составляет ${price}$ и это ${price > 80000 ? 'Дорогая машина': 'Дешевая машина'}`))




    // задача 74 


    // const obj1 = {
    //     name: 'Vuqar',
    //     surname: 'Elyasov',
    //     age: 26,
    //     city: 'Baku',
    //     country: 'Azerbaijan',
    // }

    // const obj2 = {
    //     name: 'Elsever',
    //     surname: 'Rizayev',
    //     age: 30,
    //     city: 'Baku',
    //     country: 'Azerbaijan',
    // } 

        // Variant 1

    // const shotPerson = (object)=>{
    //     const {name: n , surname: s,age: myage, city,country: mycountry,postQuantity = 0} = object
    //     return {
    //         n,
    //         s,
    //         myage,
    //         city,
    //         mycountry,
    //         postQuantity
    //     }
    // }


    // console.log(shotPerson(obj2))

        // Variant 2

    // const shotPerson = (object)=>{
    //     const {name: n , surname: s,age: myage,postQuantity = 0,...myadresss} = object

    //     const {city: mycity,country: mycountry} = myadresss

    //     return {
    //         n,
    //         s,
    //         myage,
    //         myadresss : {
    //             mycity,
    //             mycountry
    //         },
    //         postQuantity
    //     }
    // }


    // console.log(shotPerson(obj2))


    // Variant 3

//         const obj3 = {
//         name: 'Elsever',
//         surname: 'Rizayev',
//         info: {  
//             age: 30,
//             city: 'Baku',
//             country: 'Azerbaijan',
//         }
//     } 

// const shotPerson = (object)=>{
//         const {name: n , surname: s, info:{city: mycity,age: myage,country:mycountry},postQuantity = 0} = object
//         return {
//             n,
//             s,
//             mycity,
//             myage,
//             mycountry,
//             postQuantity
//         }
//     }
    

//     console.log(shotPerson(obj3))

    // Задача 75

    //  Variant 1
    
//   let myCount = 0 

//   const arr = ['i','o','u','a','e']
  
//   const str = 'Today is my birthday and  i am very happy'


// const strArr = str.split('')

// strArr.forEach((element)=>{
//     if (arr.includes(element)){
//         myCount ++
//     }

// })

// console.log(myCount)


    // Variant 2
    
    
//   let myCount = 0 

//   const arr = ['i','o','u','a','e']
  
//   const str = 'Today is my birthday and  i am very happy'


//   for (element of str){

//     if (arr.includes(element)){
//         myCount ++
//     }
//   }

//   console.log(myCount)


    // Задача 76
    
// let a = 'name'

// let b = 'surname'

// console.log(a,b);


// [b,a] = [a,b]

// console.log(a,b)



    // Задача  78

    // class Fruit {

    //     constructor(title,price){
    //         this.title = title
    //         this.price = price
    //     }

    //     priceInfo(){
    //         return `${this.title} is ${this.price}$`
    //     }
    // }
 

    // const orange = new Fruit('Orange',5)
    
    // console.log(orange.price)
    // console.log(orange.title)
    // console.log(orange.priceInfo())


        // Задача 79

        // Variant 1 s izpolzovaniyem for (in)

// const obj = {
//     a: 5,
//     b: 410,
//     c:69,
//     d: 'Salam',
//     e: 'Aleykum',
// }

//  let myCount = 0 

//  const sumObjValues = (object)=>{    
//     for (element in object){
//         if (typeof object[element] === 'number' && object.hasOwnProperty(element)){
//              myCount = myCount + object[element]
//         }
//     }
//  }

//  sumObjValues(obj)

//  console.log(myCount)


    // Variant 2 cerez keys
    
    
//     function sumObjValues (numsObj) {
//         let myCount = 0
//         Object.keys(numsObj).forEach((key)=>{
//             if ( typeof numsObj[key] === 'number'){
//                 myCount = myCount + numsObj[key]
//             }
//         })
//         return myCount
//     }

 

// const obj = {
//     a: 5,
//     b: 410,
//     c:69,
//     d: 'Myname',
//     e: 'Mysurname',
// }

// console.log(sumObjValues(obj))


    //Variant 3 cerez value

// function sumObjValues (numsObj) {
//     let myCount = 0
//     Object.values(numsObj).forEach((value)=>{
//         if ( typeof value === 'number'){
//             myCount = myCount + value
//         }
//     })
//     return myCount
// }

// const obj = {
// a: 5,
// b: 110,
// c:69,
// d: 'Myname',
// e: 'Mysurname',
// }

// console.log(sumObjValues(obj))


        // Задача 80

// const sumPositiveNegative = (myArr)=>{
//     return  myArr.reduce((obj,element)=>{
//         if (element > 0){
//             return {
//                 positiveNums:obj.positiveNums + element,
//                 negativeNums: obj.negativeNums
//             }
//         }
//             return {
//                 positiveNums: obj.positiveNums,
//                 negativeNums: obj.negativeNums + element
//             }

//     },{positiveNums: 0 , negativeNums: 0})

//     }

// const arr = [1,5,67,-1,-6,-23,7,1,-3,-22]



// console.log(sumPositiveNegative(arr))



    // Задача 77
  
//  const creatGreeting = ()=>{

//     let greetingString = 'Hey this is'

//     function greeting (name){
//         return `${greetingString} ${name}`
//     }

//     function changeGreeting (str){
//         greetingString = str
        
//     }

//     return {
//         greeting,
//         changeGreeting,
//     }

//     }
  
//     let myText = creatGreeting()

    // creatGreeting(myText)

    // console.log(creatGreeting(myText).greeting('Vuqar'))

    // console.log(myText.greeting('Vuqar'))

//    myText.changeGreeting('Salam Aleykum')







// Задача 1


// let sum = 0

// for(i = 0; i <= 100; i++){
//     sum = sum + i
// }

// console.log(sum)


// let arr = []

// for (i = 1 ; i <= 100; i++){

//     arr.push(i)

// }

// console.log(arr)




 // Задача 2 

    // Variant 1 

//  const arr = [1,5,7,8,9,363,845,4]

//  let maxElement = Math.max(...arr)

//  console.log(maxElement)


    // Variant 2

// const arr = [1,5,7,8,9,363,845,4]

// function maxElement(array) {
//   return  Math.max(...array)
// }

// console.log(maxElement(arr))


    

// Задача 3

// const arr = [1,5,7,8,9,363,845,4]

// function newArray(array) {
//     return  array.map((element)=> element * 2)
// }


// console.log(newArray(arr))

// console.log(arr)



// Задача 4


// const arr = [1,5,7]

// const [a,b,...c] = arr

// console.log(a)

// console.log(b)

// console.log(c)




// Задача 5


// const myObj = { name: "John", age: 30, city: "New York"}

// const {name : myName, city: myCity,...age} = myObj

// console.log(myName)

// console.log(age)

// const {name,city} = myObj

// console.log(name,city)




// Задача 6


// const arr = [1,5,7,8,9,363,845,4]

// function myArray(array) {
//    return array.filter((element)=> element % 2 === 0)
// }

// console.log(myArray(arr))



// Задача 7

    // Variant 1

// const arr1 = [1, 2, 3]

// const arr2 = [6, 5, 4]


// function concatArray(array1,array2) {
//     return array1.concat(array2)
// }

// console.log(concatArray(arr1,arr2))


    //  Variant 2

// const arr1 = [1, 2, 3]

// const arr2 = [6, 5, 4]

// console.log(arr1.concat(arr2))




//Задача 8

    // Variant 1
    
    
// const myObj = {name1: 'Vuqar',age1: 26, name2: 'Elsever',age2: 30}  

// const myKeys = Object.keys(myObj)

// console.log(myKeys)

// const myValues = Object.values(myObj)

// console.log(myValues)


    // Variant 2

// const arr =[
//     {name: 'Vuqar',age: 26,},
//     {name: 'Elsever',age: 30},
//     {name: 'Safar', age: 26},
// ]


// function myKeys(array) {
//    return array.map((element)=> Object.keys(element))
// }

// console.log(myKeys(arr))




// Задача 9

    // Variant 1
    
    
// const myObj = { John: 30, Anna: 25, Mike: 35 }


// const arrKeys = Object.keys(myObj)

// console.log(Object.keys(myObj))

// const arrValues = Object.values(myObj)

// console.log(Object.values(myObj))

// const arrConcat  = arrKeys.concat(arrValues)

// console.log(arrConcat)


    // Variant 2

// let people = { John: 30, Anna: 25, Mike: 35 };
// for (key in people){
//     console.log(key + ': '+ people[key])
// }




// Задача 1 


    // Variant1

// let arr1 = [1, 2, 3, 4, 5] 

// let arr2 = [4, 5, 6, 7, 8]


// let arr3 = arr1.concat(arr2)

//  console.log(arr3)

// let uniqueEl = [new Set(arr3)]

// console.log(uniqueEl)

    // Variant 2

// function arrayUniqueEl(array1,array2){
//     let concatArray = array1.concat(array2)

//     let uniqueElArr = []

//     for(index=0; index<concatArray.length; index++){
//         if (!uniqueElArr.includes(concatArray[index])){
//              uniqueElArr.push(concatArray[index])
//         }

//     }
//     return uniqueElArr

// }

// arrayUniqueEl(arr1,arr2)

// console.log(arrayUniqueEl(arr1,arr2))



// Задача 2



    // Variant 1

// let users = [
//     { name: "John", age: 25, city: "New York" },
//     { name: "Anna", age: 35, city: "London" },
//     { name: "Mike", age: 40, city: "San Francisco" },
//     { name: "Lucy", age: 28, city: "Berlin" }
//   ];


//   function myFunc(array) {
//     let newArray = array.reduce((myArray,element)=> {
//          if(element.age > 30){
//              myArray.push(element)     
//         }
//            return  myArray = myArray
//     },[])

//     let allNeed = newArray.forEach(element => {
//         console.log(`${element.name} have ${element.age} aged`)
//     });

//     return allNeed

//   }

//   console.log(myFunc(users))

    // Variant 2 
    
// let users = [
//     { name: "John", age: 25, city: "New York" },
//     { name: "Anna", age: 35, city: "London" },
//     { name: "Mike", age: 40, city: "San Francisco" },
//     { name: "Lucy", age: 28, city: "Berlin" }
//   ];    


//   function myFunc(array) {
//         let userWirh30Age = array.filter((user)=> user.age > 30 )

//         let nameAndCityText = userWirh30Age.forEach(person => {
//                console.log(`${person.name} has ${person.age} aged`) 
//         });

//         return nameAndCityText

//   }

//   console.log(myFunc(users))



// Задача 3


    // Varinat 1

// let numArray = [5, 3, 8, 1, 4];

// function sumElementArray(numbers) {
//    return numbers.reduce((sumEl,element)=> sumEl + element,0)
// }

// console.log(sumElementArray(numArray))


    // Variant 2

// let numArray = [[5], [3], [8], [1], [4]];


// function sumElementArray(array) {
//     let arr1 = array.reduce((newArr,element)=> newArr.concat(element),[])
//     let sumOfEl = arr1.reduce((sum,el)=> sum += el)
//     return sumOfEl
// }

// console.log(sumElementArray(numArray))


    // Variant 3
    
    
// let numArray = [[5], [3], [8], [8], [4]];

// const sumElementArray = (array)=>{
//     return array.flat().reduce((sum,el)=> sum +=el,0)
// }

// console.log(sumElementArray(numArray))



    // Variant 4
    
// let numArray = [[5], [3], [8], [7], [9]];

// const sumElementArray = (array)=>{
//         let oneArray = array.flat()
//         let sumEl = 0
//         for(i=0; i<oneArray.length; i++){
//             sumEl = sumEl + oneArray[i] 

//         }
//         return sumEl
// }

// console.log(sumElementArray(numArray))


    // Variant 5 

// let numArray = [[5], [3], [8], [7], [9]];

// const sumElementArray = (array)=>{
//         let oneArray = array.flat()
//         let sumEl = 0
//         for (index in oneArray){
//             sumEl = sumEl + oneArray[index]
//         }
//         return sumEl
//     }

// console.log(sumElementArray(numArray))


// Задача 4

// let user = {
//     name: "Alice",
//     address: {
//       street: "123 Main St",
//       city: "Wonderland"
//     },
//     age: 25
//   };

//   Необходимо извлечь name, street и city с помощью деструктуризации.

    // Variant 1

// const {name, address:{street,city},...others} = user

// console.log(name)

// console.log(street)

// console.log(city)

// console.log(others)

    // Variant 2

// function myObject(obj) {
//     const {name,address:{street,city},...others} = obj
//     return `My name is ${name} and i live in street ${street} of ${city}`

// }

// console.log(myObject(user))


// Задача 5 

// let books = [
//     { title: "1984", author: "George Orwell" },
//     { title: "Brave New World", author: "Aldous Huxley" },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
//   ];
  

//   function myText(array) {
//        return array.map((obj) => `${obj.title} by ${obj.author}`).join(', ')
//   }


//   console.log(myText(books))



// Задача 1


// let arr = [1,5,6,6,7,4]


// function myArray(array) {
//     let sumArrEl = 0
//     for(i = 0; i<array.length; i++){
//         sumArrEl +=array[i]
//     }
//     return sumArrEl
// }


// console.log(myArray(arr))



// Задача 2


// let arr = [1,5,6,6,7,4]


// function avgForEl(array) {
//    return array.reduce((avgNum,element)=> avgNum += element/array.length ,0)
// }

// console.log(avgForEl(arr))


// Задача 3


// VAriant 1

// let arr = [1,5,6,6,7,4]

// function maxEl(array) {
//   return Math.max(...array)
// }

// console.log(maxEl(arr))



// Variant 2

// let arr = [1,5,6,6,7,4,90]

// function maxEl(array) {
//    return array.reduce((maxEl,element)=> maxEl > element? maxEl: element,array[0])
// }
// console.log(maxEl(arr))


// Задача 4

// function newArrUniqueEl(array) {
    
//     let newArr = []

//     for(i = 0; i < array.length; i++){
//         if(!newArr.includes(array[i])){
//             newArr.push(array[i])
//         }
//     }
//     return newArr

//     } 


// let arr1 = [1,5,43,7,568,586,5,3,2,5,2]

// console.log(newArrUniqueEl(arr1))



    // Задача 6

    // let arr1 = [1,5,43,7,568,586,5,3,2,5,2]

    // function sortArr(array) {
    //    return array.sort((a,b)=> b-a)
    // }

    // console.log(sortArr(arr1))


    // Задача 7

    // const myArray = [
    //     {name: 'Elsever',age: 30},
    //     {name: 'Vuqar',age: 25},
    //     {name: 'Safar',age: 26},
    //     {name: 'Huseyn',age: 20}
    // ]

    // function sortByAge(array) {
    //    return array.sort((a,b)=> a.age - b.age)
    // }

    // console.log(sortByAge(myArray))


    // Задача 8

    // let arr1 = ['1','5','43','7','568','586','5','3','2','5','2','Salam']

    // function convertToNum(array) {
    //    return array.map((element)=>  typeof (parseInt(element) === 'number')? parseInt(element): element)
    // }
    // console.log(convertToNum(arr1))


    

    //  Задача 9


    // let arr1 = [1,5,43,7,568,586,5,3,2,5,2]

    // function newArr(array) {
    //    return array.filter((element)=> element > 10)

    // }

    // console.log(newArr(arr1))    



   
    // Задача 10

    // const myObj = {a: 7, b: 50, c: 6}
    
    // function avgEl(object) {
        
    //     let arrValues = Object.values(object)

    //     let myAvgOfValues = arrValues.reduce((avgValue,element)=> avgValue += element/arrValues.length,0)

    //     return myAvgOfValues

    // }
    // console.log(avgEl(myObj))



    // Задача 11

    // let arr1 = [1,5,43,7,568,586,5,3,2,5,2]

    // let arr2 = [1,78,14,262,26211,]

    // function concatArrays(array1,array2) {
    //    let concArr = array1.concat(array2)

    //    let abc = concArr.reduce((newArr,element)=> {if(!newArr.includes(element)){
    //         newArr.push(element)      
    //  }
    //         return newArr  
    // },[])
    //         return abc
    // }

    // console.log(concatArrays(arr1,arr2))


    // Задача 12
    
    
    // Variant 1

    // let arr1 = [1,5,43,7,568,586,5,3,2,5,2]

    // function countEl(array,arGument) {
        
    //     let sum = 0
    //     for(index = 0; index < array.length; index ++){
    //         if (array[index] === arGument){
    //         sum ++
    //         }
    //     }

    //     return sum
    // }


    // console.log(countEl(arr1,5))


// Variant 2

    // let arr1 = [1,5,43,7,568,586,5,3,2,5,2]

    // function countEl(array,arGument) {
        
    //     let sum = 0
    //     for(index in array){
    //         if (array[index] === arGument){
    //         sum ++
    //         }
    //     }

    //     return sum
    // }


    // console.log(countEl(arr1,5))



    // Задача 13 

//     const myArray = [
//             {name: 'Elsever',age: 30},
//             {name: 'Vuqar',age: 25},
//             {name: 'Safar',age: 26},
//             {name: 'Huseynağabala',age: 20}
//         ]


// function maxLengthName(array) {
//    let myNeedObj = array.reduce((newObj,currentObj)=> {
//         if (newObj.name.length > currentObj.name.length){
//             return newObj
//         }
//         return currentObj

//     })

//     return myNeedObj.age


//     }


// console.log(maxLengthName(myArray))



// Variant 2

// const myArray = [
//                 {name: 'Elsever',age: 30},
//                 {name: 'Vuqar',age: 25},
//                 {name: 'Safar',age: 26},
//                 {name: 'Huseynağabala',age: 20}
//             ]


// const searchMaxLengthName = (array)=>{
//     let maxLength = Math.max(...array.map((obj)=> obj.name.length))

//     let a = array.find((obj)=> obj.name.length === maxLength)

//     return a

// }

// console.log(searchMaxLengthName(myArray))



// Задача 14 

// let a = 'Hello, this is my project'

// function reverseText(text) {
//     return text.split('').reverse().join('')

// }

// console.log(reverseText(a))



// Задача 15


// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function defNumsByFive(array) {
//     return array.filter((element)=> element % 5 === 0)

// }

// console.log(defNumsByFive(arr1))


// Задача 17



// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]


// function  secondMaxEl(array) {

//    let uniqueEl = [...new Set(array)]     
//    return uniqueEl.sort((a,b) => b - a )[1]
    
// }


// console.log(secondMaxEl(arr1))



// Задача 18


// let myText = 'Hello, this is my project'


// function fromTextToObject(text) {
//     const obj = {}

//     for(char of text){
//         if (obj[char]){
//             obj[char]++
//         }else { obj[char] = 1
        
//         }
//     }
//     return obj
// }   

// console.log(fromTextToObject(myText))


// Задача 19


// const myObject = {name: 'Elsever',age: 30, city: 'Baku', country: 'Azerbaijan'}
               
        
// function countKeys(object) {

//      let myArrayOfKeys = Object.keys(object).length
    
//      return myArrayOfKeys
// }

// console.log(countKeys(myObject))


// Задача 20

// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function minMaxSumObj(array) {
//    let sum = array.reduce((sum,element)=> sum += element,0)
//    let min = Math.min(...array)
//    let max = Math.max(...array)

//    return {
//     sum: sum,
//     min: min,
//     max: max
//    }


// }

// console.log(minMaxSumObj(arr1))




// Задача 1


// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]


// function sumEl(array) {
//     let a = 0
//     for (let index = 0; index < array.length; index++) {
//         a += array[index]
//    }
//    return a

// }

// console.log(sumEl(arr1))



// Задача 2

// let myText = ['Hello','this','is','my','project']

// function convertToText(array) {
//    return array.join(' ')
// }

// let text = console.log(convertToText(myText))



// Задача 3


// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function maxEl(array) {
//   return Math.max(...array)
// }

// console.log(maxEl(arr1))



// Задача 4

// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function myNums(array) {
//    return array.filter((element)=> element % 2 === 0 )
// }

// console.log(myNums(arr1))


// Задача 5


// let myText = ['Hello','this','is','my','project']

// function toUpper(array) {
//    let a = array.join(' ')
//    let b = a.toUpperCase()
//    return b.split(" ")

   
// }

// console.log(toUpper(myText))



// Задача 6



// const myArray = [
//                 {name: 'Elsever',age: 30},
//                 {name: 'Vuqar',age: 25},
//                 {name: 'Safar',age: 26},
//                 {name: 'Huseynağabala',age: 20}
//             ]

// function valueByKey(array,key) {

//     for (obj of array) {
//         if (obj.hasOwnProperty(key)) {
//             return obj[key]
//         }
//     }
//     return undefined
// }

// console.log(valueByKey(myArray,'name'))






// Задача 9


// Variant 1

// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function countEl(array,element) {
//    return array.filter((el)=> el === element).length
// }

// console.log(countEl(arr1,5))


// Variant 2


// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function countEl(array,element) {
//     let count = 0
//     for (let index = 0; index < array.length; index++) {
//         if (array[index] === element){
//             count ++
//         }
//     }
//     return count
// }


// console.log(countEl(arr1,43))


// Variant 3

// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function countEl(array,element) {
//    return array.reduce((count,currentEl)=> currentEl === element? count +1:count,0)
// }

// console.log(countEl(arr1,5))


// Задача 10

// Variant 1

// let arr1 = [1,5,43,7,568,585,5,3,2,5,2]

// function uniqueEl(array) {
//   return [...new Set(array)]
// }

// console.log(uniqueEl(arr1))

// Variant 2

// let arr1 = [1,5,43,7,568,585,5,3,2,5,4634,2]

// function uniqueEl(array) {
//   return array.reduce((newArr,element)=> {
//     if (!newArr.includes(element)){
//         newArr.push(element)
//     }
//        return newArr
//   } ,[])

// }

// console.log(uniqueEl(arr1))


// Задача 11

// Variant 1

// let myText = ['Hello','Hello','this','is','my','project']

// function myObj(array) {
//     let newObj = {}
//     array.forEach(element => {
//         if (newObj[element]){
//             newObj[element] ++
//         }else{
//             newObj[element] = 1
//         }
//     });
//     return newObj   
// }

// console.log(myObj(myText))


// Variant 2 

// let myText = ['Hello','Hello','this','is','my','my','project']

// function myObj(array) {
//     return array.reduce((newObj,currentEl)=> {
//         newObj[currentEl] = (newObj[currentEl] || 0) + 1
//         return newObj
//     },{})
// }   

// console.log(myObj(myText))


// Задача 13

// const myArray = [
//                     {name: 'Elsever',age: 30},
//                     {name: 'Vuqar',age: 25},
//                     {name: 'Safar',age: 26},
//                     {name: 'Huseynağabala',age: 20}
//                 ]

// function pushNewObj(array,newObj) {
//     return [...array,newObj]

// }

// let obj = {name: 'Tofiq', age: 28}

// const {name: myname, age: myage} = obj


// console.log(pushNewObj(myArray,{myname,myage}))



// let arr1 = [1,5,43,7,568,585,5,3,2,5,4634,2]

// function pushNewObj(array,newObj) {
//     return [...array,newObj]

// }

// console.log(pushNewObj(arr1,131))


// Задача 17


// let arr1 = [1,5,43,7,568,585,5,3,2,5,4634,2]

// function avg(array) {
//   return  array.reduce((avg,currentEl)=> avg = avg + currentEl/array.length,0)
// }
// console.log(avg(arr1))


// Задача 14

// let arr1 = [1,5,43,7,568,585,5,3,2,5,4634,2]

// function newArray(array,index) {
//    return array.filter((_,i)=> i !==index)
// }

// console.log(newArray(arr1,5))


// Задача 16



// Variant 1

// const obJects ={name: 'Elsever',age: 30, city: 'Baku',country: 'Azerbaijan'}

// function keysAndValues(object) {
//     let arr1 = Object.keys(obJects)
//     let arr2 = Object.values(obJects)
//     let arr3 = arr1.concat(arr2)
//     return arr3.flat().join(', ')
    
// }
           
// console.log(keysAndValues(obJects)
// )


// Variant 2

// const obJects ={name: 'Elsever',age: 30, city: 'Baku',country: 'Azerbaijan'}

// function keysAndValues(object) {
//     let result = ''
//     for(key in object){
//         if(object.hasOwnProperty(key)){
//             result += `${key} : ${object[key]}\n`
//         }
//     }
//     return result
// }

// console.log(keysAndValues(obJects))


// Задача 15

// let arr1 = [1,5,43,7,568,585,5,3,2,5,4634,2]
// let arr2 = [5235,236526,1241,52525,14124,124]


// function newArr(array1,array2) {
//     return array1.concat(array2)
// }

// console.log(newArr(arr1,arr2))



// Задача 18


// Variant 1

// let obj = {name: 'Tofiq', age: 28,city: 'Baku',country: 'Azerbaijan'}

// let jsonObj = JSON.stringify(obj)

// console.log(jsonObj)

// Variant 2

// const myArray = [
//                     {name: 'Elsever',age: 30},
//                     {name: 'Vuqar',age: 25},
//                     {name: 'Safar',age: 26},
//                     {name: 'Huseynağabala',age: 20}
//                 ]

// function jsonObj(array) {
//    return array.map((element)=> JSON.stringify(element))

// }  
// console.log(jsonObj(myArray))


// Varinat 3

// function jsonObj(array) {
//    return JSON.stringify(array)

// }  
// console.log(jsonObj(myArray))


// Задача 19

// let arr = ['salam','vuqar','elsever','baku','15648979']

// function sortArray(array) {
//    return array.sort((a,b)=> a.length - b.length)
// }
// console.log(sortArray(arr))


// Задача 20


// function numsArray(element) {
//     let arr = []
//     for(index = 1; index <= element; index++){
//         arr.push(index)
//     }
//     return arr
// }

// console.log(numsArray(20))



// Задача 21

// Variant 1

// let obj1 = {name: 'Tofiq', age: 28,city: 'Baku',country: 'Azerbaijan'}

// let obj2 = {surname: 'Serifov', birthDate: 1997, workPlace: 'Mc_donalds',}

// function concatObj(object1,object2) {
//     let newObj = Object.assign({},object1,object2)
//     return newObj
// }

// console.log(concatObj(obj1,obj2))


// Variant 2

// let obj1 = {name: 'Tofiq', age: 28,city: 'Baku',country: 'Azerbaijan'}

// let obj2 = {surname: 'Serifov', birthDate: 1997, workPlace: 'Mc_donalds',country: 'Russia'}

// function concatObj(object1,object2) {
//     let newObj = {...object1,...object2}
//     return newObj
// }

// console.log(concatObj(obj1,obj2))



// Задача 23

// let myArray1 = ['Hello','this','is',,'my','project']

// let myArray2 = [1,5,6,4,8,3,7]

// function myObj(keys,values) {
//    let obj ={}
//    for(index = 0 ; index < keys.length; index ++){
//         obj[keys[index]] = values[index] 
//    }

//    return obj
// }

// console.log(myObj(myArray1,myArray2))



// Задача 24

// let myText = 'Hello this is my project'

// function obj(text) {
//     let object = {}
//     for(element of text){
//         if (element !== ' '){
//             element = element.toLowerCase()
        
//             if (object[element]){
                
//                  object[element] = object[element] + 1

//             }else {
            
//                 object[element] = 1

//             }   
//         }
//     }
//     return object
// }

// console.log(obj(myText))



// Задача 25

// let myText = 'Hello this is my project'

// function myArray(text) {
//    return text.split(' ')
// }

// console.log(myArray(myText))



// Задача 27


// Variant 1

// const myArray = [
//                     {name: 'Elsever',age: 30},
//                     {name: 'Vuqar',age: 25},
//                     {name: 'Safar',age: 26},
//                     {name: 'Huseynağabala',age: 20}
//                 ]


// function newArray(array,num) {
//    return array.filter((obj)=> obj.age > num)
// }

// console.log(newArray(myArray,25))


// Variant 2


// const myArray = [
//                         {name: 'Elsever',age: 30},
//                         {name: 'Vuqar',age: 25},
//                         {name: 'Safar',age: 26},
//                         {name: 'Huseynağabala',age: 20}
//                     ]
    
    
// function newArray(array,prop,mynum) {
//     return array.filter((obj)=> obj[prop] >= mynum)
// }
    
// console.log(newArray(myArray,'age',25))



// Задача 28

// let myText = 'Hello this is my project'

// function newText(text, count) {
//     let array = text.split(' ')
//     let newArray = array.map((word)=> word.repeat(count))
//     return newArray.join(' ')
// }

// console.log(newText(myText,3))



// Задача 29


// let myArray1 = ['Hello','this','is',,'my','project']


// const myArray =(array)=>{
//     return [...array]
// }
// console.log(myArray(myArray1))



// Задача 30


// let obj1 = {name: 'Tofiq', age: 28,city: 'Baku',country: 'Azerbaijan'}

// function myArrays(object) {
//     let newArray = Object.entries(object)
//     return newArray
// }
         
// console.log(myArrays(obj1))




//  задача 1


// let text = 'salam aleykum'

// function reverseText(text) {
//    return text.split('').reverse().join('')
// }

// console.log(reverseText(text))


// Задача 3

// let myArray1 = [1,5,6,4,8,3,7]

// let myArray2 = [1,5454,847,1323,45,4654,98]

// function myArray(array1,array2) {
//    return array1.concat(array2)
// }

// console.log(myArray(myArray1,myArray2))


// Задача 4

// let num = 6

// function myNum(number) {
//     if (number % 2 === 0){
//         console.log('Cislo cetnoye')
//     }
// }

// console.log(myNum(num))


// Задача 5


// variant 1


// let a = 'salam aleykum'

// const myArray = ['o','e','a','u','i']


// function myText(text) {
//     const myArray = ['o','e','a','u','i']
//     let count = 0 
//     for(char of text){
//         if (myArray.includes(char)){
//             count ++
//         }

//     }
//     return count
// }

// console.log(myText(a))


// Variant 2

// let a = 'salam aleykum'

// const myArray = ['o','e','a','u','i']


// function myText(text) {
//     let array = text.split('')
//     return array.reduce((count,currentElement)=> {
//         if (myArray.includes(currentElement)){
//             count ++
//         } 
//         return count
//     } ,0)
   
// }

// console.log(myText(a))


// Задача 6

// variant 1
// let myArray1 = [1,5,6,4,8,3,7]

// function sumEl(array) {
//     return array.reduce((sum,el)=> sum = sum + el,0)

// }
// console.log(sumEl(myArray1))


// variant 2

// let myArray1 = [1,5,6,4,8,3,7]

// function sumEl(array) {
//        let sum = 0
//        for( i = 0; i<array.length; i++){
//             sum +=array[i]
//        } 
//        return sum
// }

// console.log(sumEl(myArray1))



// Variant 3
 
// let myArray1 = [1,5,6,4,8,3,7]

// function sumEl(array) {
//        let sum = 0
//        for(element in array){
//             sum += array[element]
//        }
//        return sum
// }

// console.log(sumEl(myArray1))


// Задача 7

// let myArray1 = [1,5,6,4,8,3,7]

// function maxEl(array) {
//     let max = Math.max(...array)
//     return max 
// }

// console.log(maxEl(myArray1))


// Задача 8

// function num(number) {
//     if(typeof number ==='number'){
//         return true
//     } 
//     return false
// }

// console.log(num('das'))


// Задача 9


// let myArray1 = [1,5,6,4,8,3,7,-34,-33,-14,-43]

// function positiveNums(array) {
//    return array.filter((element)=> element > 0)
// }

// console.log(positiveNums(myArray1))


// Задача 10

// let myArray1 = [1,5,6,4,8,3,6,8,4,7]

// function uniqeEl(array) {
//    return array.reduce((newArr,currentEl)=> {
//         if (!newArr.includes(currentEl)){
//             newArr.push(currentEl)
//         }
//         return newArr
//     },[])
    
// }

// console.log(uniqeEl(myArray1))


// Задача 11

// let a = 'salam aleykum'


// function upperText(text) {
//     return text.toUpperCase();
// }

// console.log(upperText(a))


// Задача 12

// let a = 'salam aleykum'

// function repeatText(text) {
//    let array = text.split('')
//    array.forEach((element,index) => {
//         array[index] = element.repeat(2)
//    });  
//     return array.join('')
// }

// console.log(repeatText(a))


// Задача 13


// let a = '5'

// let b = parseInt(a)

// console.log(typeof b)
// console.log(typeof a)


// Задача 18

// let myArray1 = [1,5,6,4,8,3,6,8,4,7]

// function avgNums(array) {
//    return array.reduce((avg,el)=> avg += el/array.length,0)
// }

// console.log(avgNums(myArray1))


// Задача 1

// let obj = {name: 'Vuqar', age: 26, city: 'Baku',country: 'Russia'}

// function myText(object) {
//     return `Name: ${object.name}, Age: ${object.age}, City: ${object.city}`
// }

// console.log(myText(obj))

// function myText({name,age,city, country: myCountry}) {
//     return `Name: ${name}, Age: ${age}, City: ${city},country: ${myCountry}`
// }

// console.log(myText(obj))


// let obj = {name: 'Vuqar', age: 26, city: 'Baku',country: 'Russia'}


// const {name,city,...info} = obj

// console.log(info)




//  Задача 2

// let myArray1 = [1,5,6]

// function sumEl(array) {
//     return array[0] + array[2]

// }

// console.log(sumEl(myArray1))


//  Задача 3


// const obj1 = {name: "Vuqar"}

// const obj2 = {age: 26}


// function myObj(object1,object2) {
//     return {...object1,...object2}
// }

// console.log(myObj(obj1,obj2))



// const obj = {user: {name: "John", details : {age: 30}}} 

// → name = "John", age = 30.



// function myObj(object) {
//     return `name: ${object.user.name}, age: ${object.user.details.age}`
// }

// console.log(myObj(obj))

// const array = [{name: 'Vuqar', age: 26},{name: 'Elsever', age: 30},{name: 'Safar', age: 27}]

// function filteredArray(array) {
//    return array.filter((obj)=> obj.age > 28)
// }

// console.log(filteredArray(array))



// function filteredArray(array) {
//       return  array.reduce((arr,currEl)=> currEl.age > 28? (arr.push(currEl),arr):arr,[])
//  }
 
//  console.log(filteredArray(array))


 
// function filteredArray(array) {
//     return  array.reduce((arr,currEl)=> {
//         if (currEl.age > 28){
//             arr.push(currEl)
//         }
//         return arr

//     },[])
// }

// console.log(filteredArray(array))


// const obj = {firstname: 'Vuqar', lastname: 'Vuqarik'}

// function newObj(object) {
//     const {firstname,lastname} = object
//     return {firstname:lastname,lastname:firstname}
// }

// console.log(newObj(obj))


// Задача 7

// variant 1 

// let myArray1 = [1,5,6,5,4]

// let myArray2 = [1,5,6,7,8,3]


// function uniqueArray(arr1,arr2) {
//     let concatArrayWithUniqueEL = [...new Set(arr1.concat(arr2))]
//     return concatArrayWithUniqueEL
// }
// console.log(uniqueArray(myArray1,myArray2))

// Variant 2


//  let myArray1 = [1,5,6,5,4]

//  let myArray2 = [1,5,6,7,8,3]

//  function uniqueArray(arr1,arr2) {
//         let concatArray = arr1.concat(arr2)
//        return concatArray.reduce((newArr,num)=> {
//             if (!newArr.includes(num)){
//                 newArr.push(num)
//             }
//                return newArr
            

//         } ,[])

//  }

//  console.log(uniqueArray(myArray1,myArray2))


// Задача 8


// const obj = {firstname: 'Vuqar', lastname: 'Vuqarik',city: 'Baku', country: 'Azerbaijan'}

// function twoProperties(object) {
//     const {firstname,lastname,...otheInfo} = object
//     return {lastname,firstname}  
// }

// console.log(twoProperties(obj))

// const array = [{name: 'Vuqar', age: 26},{name: 'Elsever', age: 30},{name: 'Safar', age: 27}]

// function myArray(arr) {
//     return arr.map(({name,age})=>  `My name is ${name} and my age ${age} `)

// }
// console.log(myArray(array))


// Задача 

// const obj = {firstname: 'Vuqar', lastname: 'Vuqarik',city: 'Baku', country: 'Azerbaijan'}

// function myObj(object) {
//    let keys = Object.keys(object).join(' ')
//    return keys
// }

// console.log(myObj(obj))

// const obj = {firstname: 'Vuqar', lastname: 'Vuqarik',city: 'Baku', country: 'Azerbaijan'}

// function myObj(object) {
//     for(key in object){
//         if(object.hasOwnProperty(key)){
//            console.log(`${key} : ${object[key]}`)
//         }
//     }

// }
    
// console.log(myObj(obj))


// Задача 11

// const array = [{name: 'Vuqar', age: 26},{name: 'Elsever', age: 30},{name: 'Safar', age: 27}]

// function sumAge(arr) {
//    return arr.reduce((sum,obj)=> sum += obj.age,0)
// }

// console.log(sumAge(array))



// const array = [{name: 'Vuqar', age: 26},{name: 'Elsever', age: 30},{name: 'Safar', age: 27}]

// function sumAge(arr) {
//    return arr.reduce((sum,obj)=> {
//      for(key in obj){
//         if (typeof obj[key] === 'number' && key === 'age'){
//             sum +=obj[key]
//         }
            
//      }
//         return sum
//    },0)
// }

// console.log(sumAge(array))


// Задача 12

// let myArray1 = [1,5,6,5,4]

// function firstTwoEl(array) {
//     const [a,b,...other] = array
//     return {a,b,other}
// }
// console.log(firstTwoEl(myArray1))



//  Задача 13

// const arr = [{name: 'Vuqar', age: 26},{name: 'Safar', age: 30},{name: 'Safar', age: 27},{name: 'Vuqar', age: 26}]

// function newArr(array) {
//    return array.reduce((newarr,obj)=> {
//         if (!newarr.some((object)=> object.name === obj.name && object.age === obj.age )){
//             newarr.push(obj)

//         }
//          return newarr   
      
//     },[])

// }

// console.log(newArr(arr))


// const arr = [{name: 'Vuqar', age: 26},{myname: 'Safar', age: 30},{hisname: 'Safar', age: 27},]

// function newArr(array) {
//     let arr = array.filter((obj)=> obj.hasOwnProperty('name'))
//     const [obj] = arr
//     return obj
// }
// console.log(newArr(arr))



// Задача 15


// let myObj = {name: 'Vuqar', age: 26}

// function appendNewEl(object) {
//    let {name,age,city = "Baku"} = object
//     return {name,age,city}
// }    

// console.log(appendNewEl(myObj))

// console.log(myObj)



// let Object = {name: 'Vuqar', age: 26}

// function appendNewEl(object) {
//     return {...object,city : 'Baku'}
// }    

// console.log(appendNewEl(Object))

// console.log(Object)


// Напишите функцию, которая перебирает массив чисел и создает новый объект с полем number и его квадратом.


// const arr = [1,5,6,4,8,3,6,8,4,7]

// function newObj(array) {
    
//     return array.map((num)=> ({number: num, square: num * num})) 
// }

// console.log(newObj(arr))




// Напишите функцию, которая принимает объект и удаляет из него определенные свойства, используя деструктуризацию и оператор rest (...).

// const obj = {name: 'Vuqar', age: 26, city: 'Baku', country: 'Azerbaijan'}

// function newObj(object) {
//     const {name,age,...other} = object
//     return other
// }

// console.log(newObj(obj))


// Напишите функцию, которая принимает массив строк и возвращает объект, где ключами являются уникальные строки, а значениями — их количество в исходном массиве.

// const arr = ['Hello','Hello','this','is','my','project']

// function newObj(array) {
//   return array.reduce((newobj,key)=> {
//     if(newobj[key]){
//         newobj[key] += 1
//     } 
//         else {
//             newobj[key] = 1
//     }
//     return newobj
  
//    },{}) 
// }

// console.log(newObj(arr))


// Напишите функцию, которая принимает массив строк и возвращает объект, где ключами являются уникальные строки, а значениями — их количество в исходном массиве.


// Задача 1


// const items = [
//     { name: 'Apple', category: 'Fruit' },
//     { name: 'Banana', category: 'Fruit' },
//     { name: 'Carrot', category: 'Vegetable' },
//     { name: 'Potato', category: 'Vegetable' }
//   ];


// function newObj(array) {
//    return array.reduce((obj,el)=> {
//         if (!obj[el.category]){
//              obj[el.category] = []    
//         }
//          obj[el.category].push(el.name);
         
//          return obj
        
//     },{})

// }

// console.log(newObj(items))


// Задача 2


// const items = [
//     { num: 5, category: 'Fruit' },
//     { num: 9, category: 'Fruit' },
//     { num: 10, category: 'Vegetable' },
//     { category: 'Vegetable' }
//   ];


// function filteredUniqueValue(array, prop) {
//    return array.reduce((arr,el)=> {
//         if (el.hasOwnProperty(prop)) {
//             arr.push(el)
//         }
//          return arr
//     },[])
// }

// console.log(fileredUniqueValue(items, 'num'))



// Реализация deep clone объекта с помощью spread
// Напиши функцию, которая создает глубокую копию объекта, используя операторы spread и rest. Убедись, что вложенные объекты также копируются, а не просто передаются по ссылке.


// const items = {
//     num: 5, 
//     category: 'Fruit' ,
//     price: {lastprice: 10,newprice: 15}
// }

// function myObj(object) {
//     if (object === null || typeof object !== 'object'){
//         return object
//     }    
//     if (Array.isArray(object)){
//         return [...object]
//     }
//         return {...object}
// }

// console.log(myObj(items))



// . Удаление дублирующихся свойств из массива объектов



// const items = [
//     { num: 5, category: 'Fruit' },
//     { num: 9, category: 'Fruit' },
//     { num: 10, category: 'Vegetable' },

//   ]


//   function deleteObj(array,prop) {
//    return array.reduce((newArr,obj)=> {
//         const {[prop]: deleted,...rest} = obj
//         newArr.push(rest)
//         return newArr
//     },[])
//   }

//   console.log(deleteObj(items,'category'))




// const items = [
//     { num: 5, category: 'Fruit' },
//     { num: 9, category: 'Fruit' },
//     { num: 10, category: 'Vegetable' }
//   ];
  
//   function deleteObj(array, prop) {
//     return array.map(obj => {
//       const {[prop]: deleted,...rest} = obj
//       return rest
//     })
//   }
  
//   console.log(deleteObj(items, 'category'))


// function removeDuplicates(arr, key) {
//     const seen = new Set();
//     return arr.filter(item => {
//       if (seen.has(item[key])) {
//         return false;
//       } else {
//         seen.add(item[key]);
//         return true;
//       }
//     });
//   }
  
  
//   const arr = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 1, name: 'Alice' },
//     { id: 3, name: 'Charlie' },
//     { id: 2, name: 'Bob' }
//   ];
  
//   const result = removeDuplicates(arr, 'id');
//   console.log(result);
  

// Объединение двух объектов с сохранением уникальных свойств
// Напиши функцию, которая принимает два объекта и объединяет их, сохраняя только уникальные свойства. Если свойство есть в обоих объектах, то оно должно сохраняться только один раз.


// const obj1 = {name: 'vuqar',surname: 'elyasov',city: 'Baku'}

// const obj2 = {age: 26, city: 'Gence', workplace: 'KTM'}

// function concatUniqueEl(object1,object2) {
//     let concatObj = Object.assign({},object1,object2)
//     return concatObj
// }

// console.log(concatUniqueEl(obj1,obj2))


// function mergeUnique(obj1, obj2) {
    
//     const result = {};
  
    
//     for (let key in obj1) {
//       if (obj1.hasOwnProperty(key)) {
//         result[key] = obj1[key];
//       }
//     }
  
    
//     for (let key in obj2) {
//       if (obj2.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
//         result[key] = obj2[key];
//       }
//     }
  
//     return result;
//   }
  
// const obj1 = {name: 'vuqar',surname: 'elyasov',city: 'Baku'}

// const obj2 = {age: 26, city: 'Gence', workplace: 'KTM'}
  
//   const merged = mergeUnique(obj1, obj2);
//   console.log(merged); 

// const obj1 = {age: 26, city: 'Gence', workplace: 'KTM'}

// function toArray(object,isTrueOrFalse)  {
//     if (isTrueOrFalse){
//         return Object.entries(object)
//     } else {
//         return Object.fromEntries(object)
//     }
// }
//   console.log(toArray(obj1,true)); 

// const obj2 = [ [ 'age', 26 ], [ 'city', 'Gence' ], [ 'workplace', 'KTM' ] ]

//   console.log(toArray(obj2,false)); 


// Задача 1

// const textArray = ['salam','vuqar','netersen']


// function reverseArray(array) {
//    return array.reverse()
// }
// console.log(reverseArray(textArray))

// const myArray = ['a', 'e', 'i', 'o', 'u']

// const myText = 'Salam aleykum dostlar'

// function countChar(text) {
//     const myArray = ['a', 'e', 'i', 'o', 'u']
//     let count = 0
//     // text = text.toLowerCase();
//     for(char of text){
//         if(myArray.includes(char)){
//             count++
//         }
//     }
//     return count
// }

// console.log(countChar(myText))



// const myText = 'Salam aleykum dostlar'

// function countChar(text) {
//     const myArray = ['a', 'e', 'i', 'o', 'u']
//     let arr = text.split('')
//    return arr.reduce((count,char)=> {
//         if (myArray.includes(char)){
//             count++
//         }
//         return count
//    },0)
// }


// console.log(countChar(myText))


// const nums = [1,5,7,6,8,]

// function squareNums(array) {
//    return array.map((el)=> el * el)
// }

// console.log(squareNums(nums))


// const nums = [1,5,7,' ',6,8,' ',]

// function deletedEmptyValue(array) {
//    return array.filter((el)=> el !== ' ')

// }

// console.log(deletedEmptyValue(nums))


// function deletedEmptyValue(array) {
//     return array.reduce((newarr,el)=> el !== ' '? [...newarr,el]:newarr,[])

// }
        
//  console.log(deletedEmptyValue(nums))


// const nums = [1,5,7,6,8]

// function sumEl(array) { 
//     let count = 0
//     for (num of array){
//         count +=num
//     }
//     return count
// }

// console.log(sumEl(nums))


// const nums = [1,5,7,6,8]

// function sumEl(array) { 
//     let count = 0
//     for(index = 0; index < array.length; index++){
//         count += array[index]
//     } 
//     return count
// }

// console.log(sumEl(nums))



// const nums = [1,5,7,6,8]

// function sumEl(array) { 
//    return array.reduce((sum,num)=> sum +=num,0)
// }

// console.log(sumEl(nums))



// undefined

// function sumEl(array) { 
//     let count = 0
//     array.forEach(element => {
//         count +=element
//     });
// }

// console.log(sumEl(nums))



// Задача 


// const arrayOfObjects = [
//     {name: 'Vuqar',age: 17},
//     {name: 'Elsever',age: 30},
//     {name: 'Safar',age: 19}
// ]

// function filteredAge(array) {
//   return  array.filter((el)=> el.age > 18)
// }

// console.log(filteredAge(arrayOfObjects))


// function sumNums(a,b) {
//       if(typeof a === 'number' || typeof b === 'number')  {
//         return a + b
//       }
// }

// let one = 8
// let two = 1
// console.log(sumNums(one,two))




// let text = 'salam aleykum'

// function reverseString(str) {
//    return str.split(' ').reverse().join(' ')
// }

// console.log(reverseString(text))



// let nums = [1,45,5467,32214,2523,52]

// function maxNum(array) {
//    let a = array.sort((a,b)=>b - a)
//    return a[0]
// }

// console.log(maxNum(nums))


