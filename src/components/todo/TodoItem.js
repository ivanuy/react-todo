import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isCompleted}/>{props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  id: PropTypes.number.isRequired
}