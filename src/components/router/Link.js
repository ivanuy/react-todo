import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Link extends Component {
  handleClick = (evt) => {
    evt.preventDefault()
    this.context.linkHandler(this.props.to)
  }

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return (
      <a href="" className={activeClass} onClick={this.handleClick}>{this.props.children}</a>
    )
  }
}

Link.contextTypes = {
  route: PropTypes.string,
  linkHandler: PropTypes.func
}

Link.propTypes = {
  to: PropTypes.string.isRequired
}