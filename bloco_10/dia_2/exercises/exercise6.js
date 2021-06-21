const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const acha = Animals.find((animal) => animal.name === name);
      if (acha) {
        return resolve(acha);
      }
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
);

const findAnimalByAge = (age) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const achaAge = Animals.find((animal) => animal.age === age);
        if (achaAge) {
          return resolve(achaAge);
        }
        return reject('Nenhum animal com esta idade!');
      }, 100);
    })
  );

const getAnimal = (name) => {
  return findAnimalByName(name).then((objAnimal) => objAnimal);
};

const getAge = (age) => {
  return findAnimalByAge(age).then((objAnimals) => objAnimals);
};

module.exports = {
  getAnimal,
  getAge
};
