const { createServer } = require('node:http');
const fs = require('node:fs');

const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

 
  fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    let text = data;

//let text = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

const regexp= new RegExp(/do\(\)|don't\(\)|mul\(\d{1,3},\d{1,3}\)/gm);

const myArray = [...text.matchAll(regexp)];

console.log ('result ' + myArray);

let sum = 0;
let doFlag = false;
myArray.map((element, index) => {
    let mult = 0;
   // console.log ('element ' + element);
    if(element.toString() === 'do()' || index === 0){
        doFlag=true;
    }
    if(element.toString() ===`don't()`){
        doFlag=false;
    }

    if(doFlag===true && element.toString() != 'do()' && element.toString() != `don't()`){
    const reN1 = /\d{1,3},/;
    const reN2 = /,\d{1,3}/;
   
  
    num1 =  (element.toString().match(reN1)).toString().replace(',', '');
    num2 = (element.toString().match(reN2)).toString().replace(',', '');
    mult = num1 * num2;
    //console.log ('mul ' + mult);
}
sum+= mult;
   
});
console.log ('sum ' + sum);




   // console.log(data);
  });

});



// const { createServer } = require('node:http');
// const fs = require('node:fs');

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);

 
//   fs.readFile('input.txt', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     let text = data;
// //let text = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

// const regexp= new RegExp(/mul\(\d{1,3},\d{1,3}\)/gm);

// const myArray = [...text.matchAll(regexp)];

// //console.log ('result ' + myArray);

// let sum = 0;
// myArray.map((element) => {
//     const reN1 = /\d{1,3},/;
//     const reN2 = /,\d{1,3}/;
//     let mult = 0;
  
//     num1 =  (element.toString().match(reN1)).toString().replace(',', '');
//     num2 = (element.toString().match(reN2)).toString().replace(',', '');
//     mult = num1 * num2;
//    // console.log ('mul ' + mult);

//     sum+= mult;
   
// });
// console.log ('sum ' + sum);
//    // console.log(data);
//   });

// });

