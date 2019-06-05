import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './savedList.css';

export default class SavedList extends Component {
 constructor(props) {
  super(props);
 }

 render() {
  return (
   <div className="saved-list">
    <h3>Saved Movies:</h3>
    {this.props.list.map(movie => (
     <NavLink
      exact
      to={`/movie/${movie.id}`}
      activeClassName="toggleLinkCss"
      key={movie.id + Math.random(Date.now())}
     >
      <span className="saved-movie">{movie.title}</span>
     </NavLink>
    ))}
    <Link to="/">
     <div className="home-button">Home</div>
    </Link>
   </div>
  );
 }
}
