//Part 2
let list1 = [3,4,2,1,3,3];
let list2 = [4,3,5,3,9,3];

function getSimilarity(list1, list2){
   let similarityScore = 0;

    for(var i = 0; i < list1.length; i++){
        let similarity = 0;
        let times = 0;

        for(var j = 0; j < list2.length; j++){

            if(list1[i]== list2[j])
                times += 1;

             similarity = list1[i] * times;
        }
           
        similarityScore += similarity ;
    }
   // 
    console.log('Similarity Score: ' + similarityScore);
    return similarityScore;
}

getSimilarity(list1, list2);
