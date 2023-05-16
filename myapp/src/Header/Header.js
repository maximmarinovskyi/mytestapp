import React from 'react';
import './Header.css';

const list = ["Maxim", "Olga", "Maria", "Andrii", "Shusha"]

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className='logo'>Logo</div>
        <div className='info'>Info</div>
        <div className='menu'>
          {list.map(function (item) {
            return <li>{item}</li>
          })}
        </div>
      </div >
    );
  }
}
export default Header;
