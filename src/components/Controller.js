import React from 'react';
import './Controller.css';

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.controller = React.createRef();
  }

  getBounds() {
    return this.controller.current.getBoundingClientRect();
  }

  render() {
    const inputHandler = this.props.inputHandler;
    return (
      <div
        id="controller"
        className="border border-primary mb-3 rounded"
        ref={this.controller}
        onPointerUp={
          event => {
            inputHandler.up();
          }
        }
        onPointerDown={
          event => {
            const bounds = this.getBounds();
            inputHandler.down(bounds, event.clientX, event.clientY);
          }
        }
        onPointerMove={
          event => {
            const bounds = this.getBounds();
            inputHandler.move(bounds, event.clientX, event.clientY);
          }
        }>
      </div>
    );
  }
}

export default Controller;
