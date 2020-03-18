for (var a=[],i=1;i<501;++i) a[i]=i;
function getRandomNumber(array, n) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    console.log([array.sort().join(',')])
    //return array.sort()
    var smallest = array.sort((a, b) => a > b ? 1 : -1);
    return smallest[n];
  }
  a = getRandomNumber(a, 6);
  console.log('smallest number is ' + a)

  