import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleClick}>
                {content}
            </li>
        )
    }
    handleClick() {
        // alert();
        const { handItemDelect, index } = this.props;

        handItemDelect(index)
    }
}
TodoItem.propTypes = {
    test:PropTypes.string.isRequired,
    content: PropTypes.string,
    handItemDelect:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps = {
    test:'hello world'
}
export default TodoItem;