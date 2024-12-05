let array = [
    [7,6,4,2,1],
    [1,2,7,8,9],
    [9,7,6,2,1],
    [1,3,2,4,5],
    [8,6,4,4,1],
    [1,3,6,7,9]
]

let condition1 = false;
let condition2 = false;
let totalSafe = 0;

for(var i = 0; i < array.length; i++){
    let level = array[i];
    let diferencia=0;
    let levelStatus = [];
    let levelDiferencia = [];
  
    console.log('-----  level: ' + level + ' index: ' + i);
    for(var j = 0; j < level.length; j++){

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
        
        const increasingNum = levelStatus.filter((element) => element == 'increasing').length;
        const decreasingNum = levelStatus.filter((element) => element == 'decreasing').length;

        const validDifference = levelDiferencia.filter((element) => element == 'true').length;
    
        if(increasingNum== level.length-1 || decreasingNum== level.length-1 )
            condition1 = true;
        else
            condition1 = false;

       //----
       if(validDifference== level.length-1  )
        condition2 = true;
         else
        condition2 = false;

       
    }
    if(condition1 == true && condition2 == true)
        totalSafe +=1;
    console.log('Total SAFE = ' + totalSafe);
   
}

