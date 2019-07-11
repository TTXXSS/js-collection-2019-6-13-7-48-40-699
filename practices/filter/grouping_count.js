'use strict';

function grouping_count(collection) {

  let copyNoSameElement = Array.from(new Set(collection));
  let tempCollectionCountSameElement = {};
  let collectionCountSameElement={};
  copyNoSameElement.forEach(i => {
    let count = 0;
    collection.forEach(j => {
      if (i === j)
        count++;
    });
    tempCollectionCountSameElement[''+i+'']=count;
  });
  for(let k in tempCollectionCountSameElement){
    collectionCountSameElement[''+k+'']=tempCollectionCountSameElement[k];
  }
  console.log(collectionCountSameElement);
  return collectionCountSameElement;
}

module.exports = grouping_count;
