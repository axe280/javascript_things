(function() {
  
  const $elems = document.querySelectorAll('.clouds-carousel div');

  let cssTransCoords = [];

  const getDefaultCssTransformXY = ($node) => {
    const matrix = getComputedStyle($node).getPropertyValue('transform');
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    const transformCoords = {
      x: matrixValues[4],
      y: matrixValues[5]
    }

    return transformCoords;
  };

  // move elem + 1 position
  const moveElems = () => {
    $elems.forEach(($elem, index) => {
      const x = cssTransCoords[index].x;
      const y = cssTransCoords[index].y;
      $elem.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  const rewriteCssCoords = () => {
    const newTransCoords = [];
    let firstElemCoords;

    $elems.forEach(($elem, index) => {
      const [x, y] = $elem.style.transform.match(/\d+/g);
      const coordsObj = {
        x,
        y
      };

      if (index === 0) {
        firstElemCoords = coordsObj;
      } else {
        newTransCoords.push(coordsObj);
      }
    });

    newTransCoords.push(firstElemCoords);
    cssTransCoords = newTransCoords;
  };

  
  // init positions
  for (let $elem of $elems) {
    cssTransCoords.push(getDefaultCssTransformXY($elem));
  }
  
  moveElems();
  rewriteCssCoords();


  setInterval(() => {
    moveElems();
    rewriteCssCoords();
  }, 2500);

}());