
function diffArray(arr1,arr2) {

    let combineArray = arr1.concat(arr2) ;

    let uniqueElements = combineArray.filter((item)=> !arr1.includes(item)|| !arr2.includes(item))

    let sortedArray = uniqueElements.sort((a,b)=>(a-b))

    return sortedArray ;

}

console.log(diffArray([1, 2, 3], [100, 2, 1, 10]));
console.log(diffArray([1, 2, 4], [100, 2, 1, 10]));

