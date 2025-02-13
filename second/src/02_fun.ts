function addTwo(num: number): number {
  // return "Hello" 
  return num + 30;
}

function getValue(myVal: number) {
  if (myVal > 5) {
    return true;
  }

  return "200 OK"
}


const getHello = (s: string): string => {

  return s;
}


const heros = ["superman", "ironman", "captain america", "flash"];
// const heros = [1, 2, 3, 4];

heros.map((hero): string => {
  return `hero is ${hero}`;
})


function consoleError(errmsg: string): void {
  console.log(errmsg);
}


function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

addTwo(34);
