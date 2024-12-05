let array = [
    [7,6,4,2,1],
    [1,2,7,8,9],
    [9,7,6,2,1],
    [1,3,2,4,5],
    [8,6,4,4,1],
    [1,3,6,7,9],
    [78,80,83,85,86,88]
]

let condition1 = false;
let condition2 = false;
let totalSafe = 0;
let totalFin = 0

for(var i = 0; i < array.length; i++){
    let level = array[i];
 

   console.log('/////////////  level: ' + level + ' index: ' + i );

  let arrayT = [];
  arrayT = getTolerance(level);
   console.log('new array from function' + arrayT)

 totalFin =  getResult(arrayT);
 console.log('totalFin from function' + totalFin )
   
}
console.log('Total SAFE = ' + totalSafe);
console.log('totalFin from function FIN  ' + totalFin )

function getTolerance(level){
    //+++++++++++++++++++++++++++++++++++++
    let diferencia=0;
    let levelStatus = [];
    let levelDiferencia = [];
    let newArray = [...level];
    let countDelete =0;
    for(var j = 0; j < level.length; j++){
      

        console.log('index value: ' + level[j] );
        if(level[j] > level[j+1] && level[j+1]!= undefined){
            
            levelStatus.push('decreasing');
            console.log('decreasing::::: '+ level[j]);

            diferencia = level[j] - level[j+1];
            if(diferencia === 1 || diferencia === 2 || diferencia === 3){
                levelDiferencia.push('true');
           
            }
            else{
                levelDiferencia.push('false');
                if(countDelete != 1 ){
                    // console.log('level status  cambio cambio de array**** ' + levelStatus[j]  + ' ' + levelStatus[j-1] );
                     newArray.splice([j],1);
                     countDelete+=1;
                 }
               
            }
        }
        else {
            if(level[j+1]!= undefined){
               
                levelStatus.push('increasing');
                console.log('increasing::::: '+ level[j]);

                diferencia = (level[j] - level[j+1])*-1;
                if(diferencia === 1 || diferencia === 2 || diferencia === 3){
                    levelDiferencia.push('true');
                }
                else{
                    levelDiferencia.push('false');
                    if(countDelete != 1 ){
                       // console.log('level status  cambio cambio de array**** ' + levelStatus[j]  + ' ' + levelStatus[j-1] );
                        newArray.splice([j],1);
                        countDelete+=1;
                    }
                }
             }
        }

        // if(checkDecrease != 0 || checkIncrease !=0){

        // }
        console.log('level status **** '+ levelStatus[j-1]);
        if(countDelete != 1 &&  levelStatus[j-1]!= undefined && levelStatus[j]!= undefined  && levelStatus[j]!= levelStatus[j-1] ){
            console.log('level status  cambio cambio de array**** ' + levelStatus[j]  + ' ' + levelStatus[j-1] );
            newArray.splice([j],1);
            countDelete+=1;
        }
        console.log('level **** '+ level[j]);
         console.log('level array = ' + level + ' new array= '+ newArray);
    }//+++++++++++++++++++++++++++++++++++++

    return newArray;
}

function getResult(level){
    let diferencia=0;
    let levelStatus = [];
    let levelDiferencia = [];
    for(var j = 0; j < level.length; j++){
        console.log('index value: ' + level[j] );
        if(level[j] > level[j+1] && level[j+1]!= undefined){
            levelStatus.push('decreasing');

            diferencia = level[j] - level[j+1];
            if(diferencia == 1 || diferencia == 2 || diferencia == 3){
                levelDiferencia.push('true');
            }
            else{

                levelDiferencia.push('false');
            }
        }
        else {
            if(level[j+1]!= undefined){
                levelStatus.push('increasing');

                diferencia = (level[j] - level[j+1])*-1;
                if(diferencia == 1 || diferencia == 2 || diferencia == 3){
                    levelDiferencia.push('true');
                }
                else{
                    levelDiferencia.push('false');
                }
             }
        }
         
    }


    const increasingNum = levelStatus.filter((element) => element == 'increasing').length;
    const decreasingNum = levelStatus.filter((element) => element == 'decreasing').length;

    const validDifference = levelDiferencia.filter((element) => element == 'true').length;

    if(increasingNum== level.length-1 || decreasingNum== level.length-1 ){
        condition1 = true;
        console.log('condition 1 true');
    }
    else{
        condition1 = false;
        console.log('condition 1 false');
    }

   //----
   if(validDifference== level.length-1  ){
        condition2 = true;
        console.log('condition 2 true');
     }
     else{
        condition2 = false;
        console.log('condition 2 false');
    }
   
//method
//getResult(level);

    if(condition1 == true && condition2 == true){
        totalSafe +=1;
        console.log('level: ' + level + ' index: ' + i + ' = SAFE');
    }
    else{
        console.log('level: ' + level + ' index: ' + i + ' = UNSAFE');
    }

    return  totalSafe;
}