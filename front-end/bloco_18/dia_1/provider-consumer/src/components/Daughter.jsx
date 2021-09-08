import React from 'react';
import FamilyContext from './FamilyContext';

function Daughter() {
  return (
    <FamilyContext.Consumer>
      {({ inheritance, spendInheritance }) => (
        <div>
          <span>
            Tenho uma herança de R$ {inheritance} que recebi do meu bisavô
          </span>
          <button type='button' onClick={spendInheritance}>Spend</button>
        </div>
      )}
    </FamilyContext.Consumer>
  );
}

export default Daughter;
