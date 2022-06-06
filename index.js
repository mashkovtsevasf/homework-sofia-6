function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
let number = getRandomInt(1000000000);
while (true) {
  let action = prompt("Enter action");
  if (action === "break")
    break;
  else if (action === "continue") {
    number++;
    continue;
  }
  else
    alert(++number)
}

// // did not quite understand the task: the second option

// while (true) {
//   let number = prompt ("Enter your number")
//   if (number === "break")
//       break;
//   else if (number === "continue") {
//     number++
//     continue;
//   }
//   else if (isNaN(number) || number === ""){
//     alert("Incorrect input");
//   }
//   else {
//     alert (++number)
//   }
// }
