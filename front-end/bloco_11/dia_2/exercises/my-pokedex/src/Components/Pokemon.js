import React from 'react';

class Pokemon extends React.Component {
  render () {
  const { name, type, averageWeight, image } = this.props.Pokemon;
  
  return (
     <div className='App'>
     <p><b>{`Pokemon: ${name}`}</b></p>
     <p>{`Type: ${type} `}</p>
     <p>{`Avarage weigth: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
     <img src={image} alt={name} />
     </div> 
  )
  }
}

export default Pokemon;