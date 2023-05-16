import React from 'react';
import './Footer.css';

let list = {
  "Phone": "...phone...",
  "Email": "...email...",
  "Viber": "...viber...",
  "Telegramm": "...telegramm",
  "Facebook": "...facebook...",
  "LinkedIn": "...linkedIn...",
}


class Footer extends React.Component {
  render() {
    return (
      < div className="Footer" >
        <div className='contacts'>
          <ul>
            {Object.values(list).map(function (item) {
              return <li>{item}</li>
            })}
          </ul>
        </div>
      </ div >
    );
  }
}
export default Footer;