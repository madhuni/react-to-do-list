import React, { Component } from 'react';

import aux from '../hoc/Aux';
import InputForm from '../components/InputForm/InputForm';
import ListItems from '../components/ListItems/ListItems';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: []
    };
  }

  /* Method to set the element 'refs' from the child component */
  setRef = (_input) => {
    this._input = _input;
  }

  /* Method to add the list items */
  addItems = (e) => {
    e.preventDefault();

    if (this._input.value !== "") {
      const newItem = {
        text: this._input.value,
        key: Date.now()
      }
      /**
       * Updating the state without mutating the
       * original state by accessing the 'prevState'
       * argument which holds the reference to the
       * previous state
       */
      this.setState((prevState) => {
        return {
          listItems: prevState.listItems.concat(newItem)
        };
      });

      this._input.value = ""; // clearning the value in input element
      this._input.focus(); // returning the focus again on input element
    }
  }

  /* Method to delete the list item */
  deleteItem = (key) => {
    const filteredItems = this.state.listItems.filter((item) => {
      return (item.key !== key);
    });

    this.setState({
      listItems: filteredItems
    });
  }

  render() {
    var styles = {
      diplay: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 500,
      textAlign: 'center'
    };

    return (
      <div className="todolist-container" style={styles}>
        <InputForm setRef={this.setRef} addItems={this.addItems}/>
        <ListItems items={this.state.listItems} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

export default ToDoList;