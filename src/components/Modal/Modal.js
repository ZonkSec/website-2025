import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

class Modal extends Component {
  static displayName = 'Modal';

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    title: PropTypes.string,
    modalContentStyle: PropTypes.object,
    height: PropTypes.string,
    width: PropTypes.string,
    class: PropTypes.string
  };

  static defaultProps = {
    modalContentStyle: {
      padding: '20px'
    },
    class: ''
  };

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <div className='backdrop'>
        <div className={`modal-container ${this.props.class}`}>
          <div className='modal-header'>
            <div className='modal-title'>
              {this.props.title}
            </div>
            <div className='modal-close'>
              <button className='close-btn' onClick={this.props.onClose}>&times;</button>
            </div>
          </div>
          <div className='modal-content' style={this.props.modalContentStyle}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

