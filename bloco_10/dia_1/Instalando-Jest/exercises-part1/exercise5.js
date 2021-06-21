const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

const compara = (primeiro, segundo) => {
  if (
    primeiro.title === segundo.title &&
    primeiro.description === segundo.description
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  compara,
  obj1,
  obj2,
  obj3
};