import React from 'react';
import FlipMove from 'react-flip-move';

import ListItem from './ListItem/ListItem';
import './ListItems.css';

const listItems = (props) => {
  const items = props.items;

  const createTasks = (item) => {
    return (
      <ListItem key={item.key} text={item.text} deleteItem={props.deleteItem} keyValue={item.key}/>
    );
  };

  /**
   * Same thing can be done using the advanced 'map' function
   * provided by JS while mapping each element of an array and
   * creating the a new 'ListItem' with the props through a
   * callback function 'createTasks'.
   * 
   * This map method will also give a new array containing all the items
   */
  const toDoList = items.map(createTasks);

  // console.log(toDoList);

  /**
   * In the below method we looped through the array and created new 'ListItem'
   * and pushed them to a new array 'list'
  */
  /* 
    const list = [];
    for (var i = 0; i < items.length; i++) {
      list.push(
        <ListItem key={items[i].key} text={items[i].text}/>
      );
    }
  */

  return(
    <ul className="list">
      <FlipMove duration={300} easing="ease-out">
        {toDoList}
      </FlipMove>
    </ul>
  );
};

export default listItems;