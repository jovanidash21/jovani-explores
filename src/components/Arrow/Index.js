import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Arrow = (props) => {
  return (
    <div
      className={props.className}
      style={{...props.style}}
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        className="arrow-icon"
        icon={'angle-' + props.direction}
        size="3x"
      />
    </div>
  )
}

Arrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Arrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {}
}

export default Arrow;
