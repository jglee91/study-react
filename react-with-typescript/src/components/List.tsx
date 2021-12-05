import React from 'react';
import { IState as IProps } from '../App';

const List: React.FC<IProps> = ({ people }) => {
  const renderList = () =>
    people.map((person, i) => (
      <li key={i} className="List">
        <div className="List-header">
          <img className="List-img" src={person.url} alt="img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
      </li>
    ));

  return <ul>{renderList()}</ul>;
};

export default List;
