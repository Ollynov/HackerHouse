import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Keep Coding
      {/* <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a> */}
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://twitter.com/yoshcode">@yoshcode</a>.
        </span>
      </div>
    </footer>
  </div>
)
