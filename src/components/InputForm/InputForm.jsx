import React from 'react';

const inputForm = (props) => {
  return (
    <form onSubmit={props.addItems} id="input-form">
      <input
        type="text"
        ref={(el) => {
          this._input = el;
          props.setRef(this._input);
        }}
      />
      <button type="submit" className="submit-btn">Add</button>
    </form>
  );
}

export default inputForm;