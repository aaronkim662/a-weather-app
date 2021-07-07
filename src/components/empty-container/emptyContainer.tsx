import './emptyContainer.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const EmptyContainer: React.FC = () => {
  return <div id = 'empty-state-container'>
    There is no location set. Enter a city above.
    <FontAwesomeIcon
      className = 'arrow-icon'
      icon = {faArrowUp}
    />
  </div>
}

export default EmptyContainer;