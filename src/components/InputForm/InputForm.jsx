import React from 'react';
import './InputForm.css';

const inputForm = (props) => {
  return (
    <form onSubmit={props.addItems} id="input-form">
      <input
        className="form-input"
        type="text"
        placeholder="What's in your mind?"
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