import React, {Component} from 'react'
import './Logo.css'

class Logo extends Component {

  render() {
    return (
      <div
        className="Logo"
        style={{
          backgroundImage: `url(/images/HH-Mini-transparent.png)`,
          height: 45,
          width: 45
        }}
      />
    );
  }
};

export default Logo;
