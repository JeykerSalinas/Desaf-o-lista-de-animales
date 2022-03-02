class Animal {
  constructor(tipo) {
    this.__tipo = () => tipo;
  }

  get tipo() {
    return this.__tipo();
  }
}

export default Animal;
