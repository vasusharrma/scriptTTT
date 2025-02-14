let balance: number | string = 395;

balance = "285";

interface Cust {
  name: string
  id: number
}


interface Admin {
  username: string
  id: number
}

let Vsh: Cust | Admin = {
  name: "Vasu",
  id: 380
}

Vsh = {
  username: "Vs.",
  id: 380
}

function getDb(id: number | string) {
  //making api calls
  if (typeof (id) === "string") {
    id.toLowerCase();
  }

  if (typeof id === "number") {
    id.toFixed(3);
  }


  console.log(`Db id is : ${id}`);
}

getDb(3);
getDb("3");
