import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.setLargeURL();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.setLargeURL();
    }
  };

  render() {
    return createPortal(
      <div className={style.Overlay} onClick={this.handleOverlayClick}>
        <div className={style.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  setLargeURL: PropTypes.func.isRequired,
};

export default Modal;
