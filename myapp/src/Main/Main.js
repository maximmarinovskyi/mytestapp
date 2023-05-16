import React from 'react';
import './Main.css';

const projectList = {
  "My family & Team": "Team & Family",
  "My resume & Career": "Career & CV",
  "My projects": "Projects !!!"
}

class Main extends React.Component {
  render() {
    return (
      <div className="Main" >
        <ol>
          {Object.values(projectList).map(function (item) {
            return <li><a href='google.com'>{item}</a></li>
          })}
        </ol>
      </div >
    );
  }
}
export default Main;
