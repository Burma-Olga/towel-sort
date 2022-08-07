

module.exports = function towelSort (matrix) {
  let mas = [];
if(typeof matrix === 'undefined') {
    return [];
}
else {
  for(let i = 0; i<matrix.length; i++){
    if(i%2 != 0){
        mas = mas.concat(matrix[i].reverse());
    }
    else mas = mas.concat(matrix[i]);
}
}
return mas;
}
