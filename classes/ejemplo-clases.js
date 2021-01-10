// ES6
console.log('--- Example-1.2: ---');
class CarES6 {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return 'vroom';
  }
}

class ToyotaES6 extends CarES6 {
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const carES6 = new CarES6({ title: 'Toyota' });
console.log(`Car-ES6: ${JSON.stringify(carES6)}`);
console.log(`Car-ES6.drive(): ${JSON.stringify(carES6.drive())}`);

const toyotaES6 = new ToyotaES6({ color: 'red', title: 'Daily Driver' });
console.log(`ToyotaES6: ${JSON.stringify(toyotaES6)}`);
console.log(`ToyotaES6.honk(): ${toyotaES6.honk()}`);
console.log(`ToyotaES6.drive(): ${toyotaES6.drive()}`);