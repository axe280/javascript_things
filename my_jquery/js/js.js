'use strict';

main();

function main() {
  const collection = $('.item');

  collection.on('click', clickHandler);

  function clickHandler(event) {
    $(this).toggleClass('item_active');
  }

  const innerItem = collection.find('.item-inner');

  console.log($('.item_active').parent());
}