// add solution here;

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay(musicians , instruments)
{
  var empty = [];
  for (var i = 0; i < 4; i++){
    empty [i] = musicians[i] + " plays " + instruments[i];
  }
  return empty;
}

function johnLennonFacts(facts)
{
  
}

function iLoveTheBeatles(number)
{
  var empty = [];
  var i = 0;
  do
  {
   
   empty [i] = "I love the Beatles!";
   i++;
   number++;
  } while (i < 15);
  return i;
}