const myIterable = { from: 12, to: 100 };

function isValid(from, to) {
  if (typeof from !== 'number' || typeof to !== 'number') {
    throw new Error('Both "from" and "to" must be valid numbers.');
  }

  if (isNaN(from) || isNaN(to)) {
    throw new Error('Both "from" and "to" must be valid numbers.');
  }

  if (from > to) {
    throw new Error('"from" must be less than or equal to "to".');
  }
}

myIterable[Symbol.iterator] = function () {
  const from = Number(this.from);
  const to = Number(this.to);

  isValid(this.from, this.to);
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

/* for (let num of myIterable) {
   console.log(num);
}*/
