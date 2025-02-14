//limited set of input values 
enum Direction {
  up = 10,
  down,
  left,
  right
}

function doSomething(keypressed: Direction) {
  if (keypressed === Direction.up)
    console.log("Hello");
}


doSomething(Direction.up);


