import React, { Component } from 'react'
import spinner from "./images/Spinner.gif"

export default class Spinner extends Component {
  render() {
    return (
        <div className="container text-center">
                  <img style={{width:"60px"}} src={spinner} alt="..." />
        </div>
    )
  }
}
