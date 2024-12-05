let text = "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const regexp= new RegExp(/mul\(\d{1,3},\d{1,3}\)/gm);

const myArray = [...text.matchAll(regexp)];

//console.log ('result ' + myArray);

let sum = 0;
myArray.map((element) => {
    const reN1 = /\d{1,3},/;
    const reN2 = /,\d{1,3}/;
    let mult = 0;
  
    num1 =  (element.toString().match(reN1)).toString().replace(',', '');
    num2 = (element.toString().match(reN2)).toString().replace(',', '');
    mult = num1 * num2;
   // console.log ('mul ' + mult);

    sum+= mult;
   
});
console.log ('sum ' + sum);



