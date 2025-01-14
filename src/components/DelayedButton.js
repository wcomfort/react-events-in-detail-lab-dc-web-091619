// Code DelayedButton Compon
import React from 'react'

class DelayedButton extends React.Component {

    delay = event => {
        event.persist()
        setTimeout(() => {
        this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render(){
        return (
            <button onClick={this.delay}>Delay</button>
        )
    }
}
 
export default DelayedButton