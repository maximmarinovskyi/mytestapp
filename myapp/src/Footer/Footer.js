import React from 'react';
import './Footer.css';

let list = {
  phone: "...phone...",
  email: "...email...",
  viber: "...viber...",
}

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = list
  }

  changeNav = () => {
    this.setState({

      phone: "phone",
      email: "email",
      viber: "viber",
      max: "...maxim...",
    })
  }

  render() {

    return (
      < div className="Footer" >
        <div className='contacts'>
          <ul>
            {Object.values(this.state).map(function (item) {
              return <li>{item}</li>
            })}
          </ul>
          <button onClick={this.changeNav}>Button</button>
        </div>
      </ div >
    );
  }
}

export default Footer;