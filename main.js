function getFirstItemFrom(array) {
  return array[0];

}

function getLastItemFrom(array) {
return array[array.length-1];
}

function getIndex3(array) {
  if (array.length <= 3 ){
    return array[array.length-1];
  }
  return array[3];
}



function firstItemIsNumber(array) {
let indexArray = array[0];
if (typeof(indexArray) === 'number'){
  return true;
}
else {
  return false;
}
//return typeof array[0] === 'number'; better answer 
}


function isLongList(array) {
if (array.length >= 10){
  return true;
}
else {
  return false;
}
// return array.length >=10;
}



module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}