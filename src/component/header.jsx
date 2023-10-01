import React, { Component, useState } from 'react';
import '../sass/base.scss';


const Header = (props) => {
  const {input, onHandleSubmit, onHandleChange} = props;

  return ( 
    <div className="header">
      <div className="header_header-text">
        IP Address Tracker
      </div>
      <form onSubmit={onHandleSubmit} className="header_searchBar">
        <input
          type="text"
          value={input}
          name="searchBar"
          className="header_searchBar_input"
          onChange={onHandleChange}
        />
        <button type="submit" className="header_searchBar_submit">&rArr;</button>
      </form>
    </div>
   );
}
 
export default Header;
  