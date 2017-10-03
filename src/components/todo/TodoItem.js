import React from 'react';
import PropTypes from 'prop-types';
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  //props.handleToggle.bind(null, props.id)
  const handleToggle = partial(props.handleToggle, props.id)

  return (
    <li>
      <input type="checkbox" 
        onChange={handleToggle} 
        checked={props.isCompleted}/>{props.name}
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired
}