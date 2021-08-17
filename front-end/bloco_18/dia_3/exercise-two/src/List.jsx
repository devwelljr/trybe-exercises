import React from 'react';
import { PropTypes } from 'prop-types';

function List({ tasks }) {
  return (
    <div>
      <h1>To-do:</h1>
      <ul>
        { tasks.map((todo, index) => <li key={ index }>{ todo }</li>) }
      </ul>
    </div>
  );
}

List.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
