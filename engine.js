console.clear();
console.time();
console.group();

var txt = 'teszt 1.0.0',
    sF;

(sF = () => {
  document.body.innerHTML = 'trace with miss';
})();

class xx {
  constructor(elem, str) {
    this.elem = elem;
    this.str = str;
  }
  fun(bg, col) {
    this.elem.innerHTML += '<br>' + this.str;
    this.elem.style.background = bg;
    this.elem.style.color = col;
  }
}

var b = new xx(document.body, txt);
b.fun('#500', '#ffab');


console.timeEnd();
console.log('%c The program successfully was loaded', 'font-size:25px; color:#ff0;');
