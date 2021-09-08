import React, { Component } from 'react';
import Grandmother from './Grandmother';
import FamilyContext from './FamilyContext';

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    };
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({
      inheritance: prevState.inheritance - 1000,
    }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance,
    };

    return (
      <FamilyContext.Provider value={contextValue}>
        <Grandmother />
      </FamilyContext.Provider>
    );
  }
}

export default GreatGrandfather;
