//counting sheep
const sheep = function(n) {
  if (n<=0){
    console.log('All sheep jumped over the fence');    
  }else{
    console.log(`${n}: Another sheep jump over the fence`);    
  }
};
sheep(3);

// Power Calculator

const powerCalculator=function(int1,int2){
  if(int2<0) {
    console.log('exponent should be >=0' );

  }
  else if(int2===0){
    return 1;
  }
  else{
    const power= int1*powerCalculator(int1,int2-1);
    console.log(power);
    return power;
  }
};
powerCalculator(10,5);

//reverse string
const reverseString=function([first,...str]){
  if(!first) return '';
  else return reverseString(str)+first;
};
console.log(reverseString('abc'));

// nth triangular number

const triangular=function(n){
  if(n===1) return 1;
  else return n+triangular(n-1);
};
console.log(triangular(10));


//string splitter

const stringSplitter=function([first,...str],sep){
  if (!first) return '';
  else if(first===sep) return stringSplitter(str,sep);
  else return first + stringSplitter(str,sep);
};
console.log(stringSplitter('02/20/2020','/'));

//fibonacci

const fibonacci=function(num ){
  if (num===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci(num - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
console.log(fibonacci(7));

//binary

function binaryRep(num){
  if(num<=0) return '';
  let binary = num%2;
  return binaryRep(Math.floor(num/2))+binary;
}
console.log(binaryRep(37));


//factorial

function factorial(n){
  if (n<=1)return 1;
  else return n*factorial(n-1);

}
console.log(factorial(5));

//maze
// function checkValidMove(move) {
//     const wall = '*';
//     const passed = 'p';
  
//     return (move !== wall && move !== passed);
//   }
  
//   function mazeSolver(m, row = 0, col = 0) {
//     const curr = m[row][col];
//     const up = row - 1;
//     const right = col + 1;
//     const down = row + 1;
//     const left = col - 1;
  
//     if (curr === 'e') return '';
//     else if (right <= m[row].length - 1 && checkValidMove(m[row][right])) {
//       m[row][col] = 'p';
//       return 'R' + mazeSolver(m, row, right);
//     }
//     else if (down <= m.length - 1 && checkValidMove(m[down][col])) {
//       m[row][col] = 'p';
//       return 'D' + mazeSolver(m, down, col);
//     }
//     else if (left >= 0 && checkValidMove(m[row][left])) {
//       m[row][col] = 'p';
//       return 'L' + mazeSolver(m, row, left);
//     }
//     else if (up >= 0 && checkValidMove(m[up][col])) {
//       m[row][col] = 'p';
//       return 'U' + mazeSolver(m, up, col);
//     }
//     else return 'X';
//   }
// console.log(mazeSolver([
//   [' ', ' ', ' ', '*', ' ', ' ', ' '],
//   ['*', '*', ' ', '*', ' ', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//   [' ', '*', '*', '*', '*', '*', ' '],
//   [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ]));


//find all the ways out of the maze

function checkValidMove(move) {
    const wall = '*';
    const passed = 'p';
  
    return (move !== wall && move !== passed);
  }
  
  function mazeSolver(m, row = 0, col = 0) {
    const curr = m[row][col];
    const up = row - 1;
    const right = col + 1;
    const down = row + 1;
    const left = col - 1;
  
    if (curr === 'e') return '';
    if (right <= m[row].length - 1 && checkValidMove(m[row][right])) {
      m[row][col] = 'p';
      return 'R' + mazeSolver(m, row, right);
    }
    if (down <= m.length - 1 && checkValidMove(m[down][col])) {
      m[row][col] = 'p';
      return 'D' + mazeSolver(m, down, col);
    }
   if (left >= 0 && checkValidMove(m[row][left])) {
      m[row][col] = 'p';
      return 'L' + mazeSolver(m, row, left);
    }
    if (up >= 0 && checkValidMove(m[up][col])) {
      m[row][col] = 'p';
      return 'U' + mazeSolver(m, up, col);
    }
    else return 'X';
  }
console.log(mazeSolver([
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
]));