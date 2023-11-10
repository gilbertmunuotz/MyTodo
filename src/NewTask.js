import React, { Component } from 'react'

export class NewTask extends Component {
    state = {
        content: ''
    }

    trackChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <div className='NewTask'>
                <form onSubmit={this.handleSubmit}>
                    <label className='ml-96'>Add New Task </label>
                    <input type="text" placeholder='Enter Text Here...' onChange={this.trackChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default NewTask