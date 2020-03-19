function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// function to generate Random array.  @param  size of the array
function generateRandomArray(size){
    var randomArray = [];
    for (i=0;i<size;++i) {
        randomArray[i]= getRandomInt(0, 1000);
    }
    return randomArray;
}

// function to print the nth smallest number in the array. @param source_array   @param  n
function printNthSmallestFromArray(source_array, n){
    if ( source_array &&  source_array.length  > n){
        // sort the array
        var sortedArray = source_array.sort(function(a, b){return a-b});
        console.log('The Sorted Array with 500 random numbers');
        console.log(sortedArray.join());

        console.log("The " + n + "th smallest number in the array is " + sortedArray[n-1]);
    }
    else
    {
        console.log('Error')
    }
}

// get random array of size 500 
var the_array = generateRandomArray(500);
console.log('The Generated Array with 500 random numbers');
console.log(the_array.join(','));

var myArgs = process.argv.slice(2);

var nthElement = myArgs[0];
// print the 9th smallest number.
printNthSmallestFromArray(the_array, nthElement);
