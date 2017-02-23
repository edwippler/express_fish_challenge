function isDuplicate(addedFish, currentList) {
  var duplicate = false;
  currentList.forEach(function(existingFish){
    if (existingFish.name == addedFish.name){
      duplicate = true;
    }
  });
  return duplicate;
}

module.exports = {
    isDuplicate: isDuplicate
}
