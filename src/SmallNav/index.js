import React, { Component } from 'react'
import PropTypes from "prop-types"

import Style from './style'

class SmallNav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }

  style = () => {
    if (this.props.style) {
      return this.props.style
    } else {
      return {
        fontWeight: "normal"
      }
    }
  }

  activeStyle = () => {
    if (this.props.activeStyle) {
      return this.props.activeStyle
    } else {
      return {
        fontWeight: "bold"
      }
    }
  }

  render() {
    const { navItems, ...other } = this.props
    return (
      <Style {...other}>
        <div className="small-nav">
          {navItems.map((navItem, idx) => (
            <div
              key={idx}
              onClick={() => this.setState({ index: idx })}
              style={index === idx ? this.activeStyle() : this.style()}
            >
              {navItem.title}
            </div>
          ))}
        </div>
        {navItems[index].component && 
          <div className="nav-content">
            {navItems[index].component}
          </div>
        }
      </Style>
    )
  }
}

SmallNav.propTypes = {
  navItems: PropTypes.array.isRequired,
  style: PropTypes.object,
  activeStyle: PropTypes.object
}

export default SmallNav
