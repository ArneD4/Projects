import React from 'react'
import {
        Link
  } from "react-router-dom"

function NavigationBar() {
    return (
        <div className="navbar">
                    <nav>
          <ul>
            <li>
            <Link className="link" to="/">Home</Link>              
            </li>

            <li>
              <Link className="link" to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default NavigationBar
