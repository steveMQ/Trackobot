// Atticus is a narwhal

var DataService = {};

var GameData = [
  {class:'mage', enemy:'warlock', didWin:false},
  {class:'mage', enemy:'warlock', didWin:false},
  {class:'mage', enemy:'warlock', didWin:false},

]

// do this to add a game to the list
DataService.addGame = function(entry) {
  newEntry = {class:'warrior', enemy:'shaman', didWin:true};
  GameData.push(newEntry);
  console.log("just added a game :", newEntry);

}

// do this to return a list of games
DataService.returnGameData = function() {
  return GameData;
}

export default DataService;
