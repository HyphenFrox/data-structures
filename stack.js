class Stack {
  #count;
  #pile;
  constructor() {
    this.#count = 0;
    this.#pile = {};
  }

  push(data) {
    this.#pile[`${this.#count + 1}`] = data;
    ++this.#count;
    return this.#count;
  }

  pop() {
    if (this.#count === 0) {
      return;
    }

    delete this.#pile[`${this.#count}`];
    --this.#count;
    return this.#count;
  }

  size() {
    return this.#count;
  }

  clear() {
    this.#pile = {};
    this.#count = 0;
    return true;
  }

  peek() {
    if (this.#count === 0) {
      return false;
    }

    return this.#pile[`${this.#count}`];
  }

  view() {
    let array = [];
    for (let i = this.#count; i > 0; --i) {
      array.push(this.#pile[`${i}`]);
    }
    return array;
  }
}

export default Stack;
