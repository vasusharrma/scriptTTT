type numArr = number[];

function findMax1(arr: numArr): number {

  let maxi: number = arr[0];

  for (const i of arr) {
    if (i > maxi) maxi = i;
  }

  return maxi;

}


function findMax2(arr: numArr): number {

  let maxi: number = arr[0];

  arr.forEach((i) => {
    if (i > maxi) maxi = i;
  })

  return maxi;

}

const arr: numArr = [2, 5, 3, 7, 9, 4];

const m1 = findMax1(arr);
const m2 = findMax2(arr);


console.log("method one : ", m1);
console.log("method two : ", m2);
