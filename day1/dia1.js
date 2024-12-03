
let list1 = [3,4,2,1,3,3];
let list2 = [4,3,5,3,9,3];


function getDistance(list1, list2){
    let totalDistance = 0;

    list1 = list1.sort((a, b) => a - b);
    list2 = list2.sort((a, b) => a - b);


    for(var i = 0; i < list1.length; i++){
            let distance = 0;

            distance = list1[i] - list2[i];

            if(distance<0)
                distance *= -1;

        totalDistance += distance ;
    }
    console.log('Total Distance: ' + totalDistance);
    return totalDistance;
}

getDistance(list1, list2);
