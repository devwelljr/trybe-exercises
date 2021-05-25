const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//PARTE 1
const danoDragao = (dragon) => {
  const forcaDragao = dragon.strength;
  let damageDragon = dragon.damage;

  damageDragon = Math.trunc(Math.random() * (forcaDragao - 15) + 15);
  return damageDragon;
};
// console.log(danoDragao(dragon));

const danoGuerreiro = (warrior) => {
  let damageWarrior = warrior.damage;
  const weaponWarrior = warrior.weaponDmg;
  const strengthWarrior = warrior.strength;

  damageWarrior = Math.trunc(
    Math.random() * (strengthWarrior * weaponWarrior + strengthWarrior)
  );
  return damageWarrior;
};
// console.log(danoGuerreiro(warrior));

const danoMago = (mage) => {
  const mana = mage.mana;
  const inteligencia = mage.intelligence;
  let turnoMago = {
    manaGasto: 0,
    danoExecutado: null,
  }
  if (mana > 15) {
    let damageMage = Math.trunc(Math.random() * (inteligencia * 2 - inteligencia) + inteligencia);
    turnoMago.manaGasto += 15;
    turnoMago.danoExecutado = damageMage; 
  }
  return turnoMago;
};
// console.log(danoMago(mage));

//PARTE 2
const gameActions = {
  // Crie as HOFs neste objeto.
  turnWarrior: (danoGuerreiro) => {
    const danoW = danoGuerreiro(warrior);
    warrior.damage = danoW;
    dragon.healthPoints -= danoW;
  },
  
  turnMage: (danoMago) => {
  const danoM = danoMago(mage).danoExecutado;
  const manaM = danoMago(mage).manaGasto;
  mage.damage = danoM;
  dragon.healthPoints -= danoM;
  mage.mana -= manaM;
  },

  turnDragon: (danoDragao) => {
  const danoD = danoDragao(dragon);
  dragon.damage = danoD;
  mage.healthPoints -= danoD;
  warrior.healthPoints -= danoD;
  },

  retorno: () => battleMembers,
};
// console.log(gameActions.turnWarrior(danoGuerreiro));
// console.log(gameActions.turnMage(danoMago));
// console.log(gameActions.turnDragon(danoDragao))
gameActions.turnDragon(danoDragao);
gameActions.turnMage(danoMago);
gameActions.turnWarrior(danoGuerreiro);
console.log(gameActions.retorno());