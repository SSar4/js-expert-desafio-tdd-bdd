/**
 * const { faker } = require("@faker-js/faker");
const { writeFile } = require("fs/promises");
const Car = require("./../scr/entities/car");
const CarCategory = require("./../scr/entities/carCategory");
const Custumer = require("./../scr/entities/customer");

const { join } = require("path");
const seederBaseFolder = join(__dirname, "../", "database");
const ITEMS_AMOUNT = 2;

const carCategory = new CarCategory({
    id: faker.datatype.uuid(),
    name: faker.vehicle.type(),
    carIds: [],
    price: faker.finance.amount(20, 200),
});
const cars = []
const customers = []
for (let index = 0; index < ITEMS_AMOUNT; index++) {
    const car = new Car({
        id: faker.datatype.uuid(),
        name: faker.vehicle.model(),
        available: true,
        gasAvailabel: true,
        releaseYear: faker.date.past().getFullYear(),
    });
    carCategory.carIds.push(car.id);
    cars.push(car)

    const customer = new Custumer({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        age: faker.datatype.number({min:18, max: 70})
    })

    customers.push(customer)
}
const write = (filename, data) =>
    writeFile(join(seederBaseFolder, filename), JSON.stringify(data));
(async () => {
    await write('cars.json', cars)
    await write('custumers.json', [customers])
    await write('carCategories.json', [carCategory])
    console.log('cars', cars)
    console.log('carCategory', carCategory)
})();

 */

function* geradorSomaRecursiva(n, somaAtual = 0) {
    if (n === 0) {
      yield somaAtual;
    } else {
      yield* geradorSomaRecursiva(n - 1, somaAtual + n);
    }
  }
  
  const meuGerador = geradorSomaRecursiva(10);
  
  for (let valor of meuGerador) {
    console.log(valor); // Exibe 55 (a soma de 1 a 10)
  }
  