// Crear la clase monstruo, inicializando health = 100 y el nombre via opcion.
class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}

const monster = new Monster({ name: 'Bad Ass Monster' });
console.log(`Monster: ${JSON.stringify(monster)}`);