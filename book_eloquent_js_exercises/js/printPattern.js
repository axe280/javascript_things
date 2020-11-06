const printPattern = (size) => {
  let printString = '';

  for (let i = 1; i < size; i++) {
    for (let j = 1; j <= size; j++) {

      let printSymbol;
      
      if ((i + j) % 2 === 0) {
        printSymbol = '#';
      } else {
        printSymbol = ' ';
      }

      printString += printSymbol;


      if (j === size) {
        printString += '\n';
      }

    }
  }

  return printString;
};

export default printPattern;