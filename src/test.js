import React, {Component} from 'react'

class Test extends Component {
    render () {
        console.log('render test')
        return <div>{this.props.content}</div>
    }
}
export default Test;