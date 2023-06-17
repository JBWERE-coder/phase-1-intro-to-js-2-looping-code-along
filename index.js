// Code your solutions in this file
const clubs = ["velar", "Embassy", "loft"];

function writeCards(clubs) {
  for (let i = 0; i < clubs.length; i++) {
    console.log(`Come to my party at ${clubs[i]} , bring me a bottle of whiskey!`);
  }

  return clubs;
}

writeCards(clubs);

let i = 11
function countDown(i){
    while (i > -1) {
        console.log(i --);
    }
    // console.log(i);
}
