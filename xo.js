let turn = "x";
let title = document.getElementsByClassName("title");
let sqaures = [];

//to reload the game once winner()is called (there is something wrong in this code)
function end(num1,num2,num3){ title.innerHTML = ${sqaures[num1]} ;
document.getElementById("item"+num1).style.background="black";
document.getElementById("item"+num2).style.background="black";
document.getElementById("item"+num3).style.background="black";
setInterval(function(){title.innerHTML+="."},1000);
setTimeout(function(){location.reload()},4000);
}
// (there is something wrong in this code)

//to detect the winner
function winner() {
  for (let i = 1; i < 10; i++) {
    sqaures[i] = document.getElementById("item" + i).innerHTML;
  }
  if (
    sqaures[1] == sqaures[2] &&
    sqaures[2] == sqaures[3] &&
    sqaures[1] !== ""
  ) {
    end(1, 2, 3);
  } else if (
    sqaures[4] == sqaures[5] &&
    sqaures[5] == sqaures[6] &&
    sqaures[4] !== ""
  ) {
    end(4, 5, 6);
  } else if (
    sqaures[7] == sqaures[8] &&
    sqaures[8] == sqaures[9] &&
    sqaures[8] !== ""
  ) {
    end(7, 8, 9);
  } else if (
    sqaures[1] == sqaures[4] &&
    sqaures[4] == sqaures[7] &&
    sqaures[4] !== ""
  ) {
    end(1, 4, 7);
  } else if (
    sqaures[2] == sqaures[5] &&
    sqaures[5] == sqaures[8] &&
    sqaures[5] !== ""
  ) {
    end(2, 5, 8);
  } else if (
    sqaures[3] == sqaures[6] &&
    sqaures[6] == sqaures[9] &&
    sqaures[3] !== ""
  ) {
    end(3, 6, 9);
  } else if (
    sqaures[1] == sqaures[5] &&
    sqaures[5] == sqaures[9] &&
    sqaures[5] !== ""
  ) {
    end(1, 5, 9);
  } else if (
    sqaures[3] == sqaures[5] &&
    sqaures[5] == sqaures[7] &&
    sqaures[3] !== ""
  ) {
    end(3, 5, 7);
  }
}
//responsible for x,o turns on click
function game(id) {
  let element = document.getElementById(id);
  if (turn === "x" && element.innerHTML == "") {
    element.innerHTML = "x";
    turn = "o";
    title.innerHTML = "o";
  } else if (turn === "o" && element.innerHTML == "") {
    element.innerHTML = "o";
    turn = "x";
    title.innerHTML = "x";
  }
  winner();
}
