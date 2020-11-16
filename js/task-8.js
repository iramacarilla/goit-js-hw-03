const products = [
    {
      id: "1",
      name: "milk",
      value: "Молоко",
      price: 20,
      sale: true,
      quantity: 10,
    },
    {
      id: "2",
      name: "water",
      value: "Вода",
      price: 10,
      sale: false,
      quantity: 50,
    },
    {
      id: "3",
      name: "juice",
      value: "Сок",
      price: 34,
      sale: true,
      quantity: 24,
    },
    {
      id: "4",
      name: "fruitDrink",
      value: "Морс",
      price: 32,
      sale: true,
      quantity: 25,
    },
    {
      id: "5",
      name: "milkShake",
      value: "Молочный коктейль",
      price: 37,
      sale: false,
      quantity: 37,
    },
  ];
  // 1. Создайте функцию getSaleProducts(), которая вернет новый массив со свойством sale равным true.
  // 2. Создайте функцию getProductsName(), которая вернет новый массив со всеми названиями продуктов на русском языке.
  // 3. Создайте функцию getTotalQuantity(), которая вернет общую сумму всех товаров на складе (свойство quantity).
  // 4. Создайте функцию getProductById(), которая будет возвращать продукт по id.
  // 5. Создайте функцию deleteProductById(), которая будет удялять из исходного массива products товар по id.
  // 6. Создайте функцию createProduct(), которая будет добавлять новый продукт в исходный массив products. Товар передается в функцию в виде объекта
  // 7. Создайте функцию findProductByName(), которая будет возвращать объект из массива products в зависимости от передаваемого значения name или value.
  // 7. Создайте функцию editProduct(), которая будет изменять объект products. В качестве аргументов, в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.
  // 8. Создайте функцию modifyProductList(), которая будет возвращать новый массив с продуктами у которых будут только свойства id, name, value и price
  // 9. Создайте функцию addToCart(), которая будет записывать товар по id в новый массив cart.
//function getSaleProducts (array,prop)
//{
    //const arr = [];
    //for (const item of array) {
       // if (item[prop]) {
       //     arr.push(item)
       // }
   // } return arr;
//}
//console.log(getSaleProducts(products, 'sale'));


// 2. Создайте функцию getProductsName(), которая вернет новый массив со всеми названиями продуктов на русском языке.

//function getProductsName(array) {
   // const arr = [];
    //for (item of array) {
       // arr.push(item[key]);
        
    //}
    //return arr;
//}

//getProductsName(products);

// 3. Создайте функцию getTotalQuantity(), которая вернет общую сумму всех товаров на складе (свойство quantity).
//function getTotalQuantity(array) {
    //     let sum = 0;
    //     for (const item of array) {
    //      sum += item.quantity
    //         //console.log('item :>> ', item);
    //     }
    //     return sum
    // } 
    // const result = getTotalQuantity(getSaleProducts(products, 'sale'))
    // console.log(result);
     
    //=============================
    // function getTotalQuantity(array) {
    //     let sum = 0;
    //     for (const item of array) {
    //      sum += item.quantity
    //         //console.log('item :>> ', item);
    //     }
    //     return sum
    // } 
    // const result = getTotalQuantity(products)
    // console.log(result);
// 4. Создайте функцию getProductById(), которая будет возвращать продукт по id.

//function getProductById(array, id) {
   
      // for (let item of array) 
     //  { if (item.id === id)
      //  { return item;
           
      //  }

    //}
   
//}



//console.log(getProductById(products, '3'));

// 5. Создайте функцию deleteProductById(), которая будет удялять из исходного массива products товар по id.

//function deleteProductById(array, prop, val) {
    //for (let item of array) 
      //{ if (item[id] === val)
      // { 
        //array.splice(array.arrayindexOf(item, 1))   
      
           
     // }} return array;

//}//
//console.log(deleteProductById(products,'id', '4'));

// 6. Создайте функцию createProduct(), которая будет добавлять новый продукт в исходный массив products. Товар передается в функцию в виде объекта

//function createProduct(array, newObject) {
  //  array.push(newObject);
///}
////const object = {id:6, name: Kill};
//console.log(createProduct(products, object));
//const object = {id:6, name: Kill};
//const createProduct =(array, newObject)=> {
    //return [...array, {id: `${array.length + 1}`, ...newObject,} ]
//}
//createProduct (products, object);
// 7. Создайте функцию findProductByName(), которая будет возвращать объект из массива products в зависимости от передаваемого значения name или value.
 //const findProductByName = function (array, prop)  {
     //for (const item of array){
    // if (item.name || item.value === prop){
   
      //  return item;

    // }}
 //}
 //const term = findProductByName (products, 'milkshake');
 //console.log(term);

 // 7. Создайте функцию editProduct(), которая будет изменять объект products. В качестве аргументов, в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.

const editProduct = () => {
    
}