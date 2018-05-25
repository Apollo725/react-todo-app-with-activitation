import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addActivity } from '../actions'

import './AddActivity.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class AddActivity extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleClick() {
        console.log('clicked!');
        this.props.addActivity(this.state.value);
    }

    render() {
        return (
            <div >
                <input type="text" placeholder="Enter an activity..."  onChange={this.handleChange} />
                <button className="addButton">
                    <Tooltip id="tooltip-fab" title="Add" >
                        <Button variant="fab" aria-label="Add" onClick={this.handleClick}>
                            <AddIcon />
                        </Button>
                    </Tooltip>
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activities: state.activities
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addActivity: bindActionCreators(addActivity, dispatch),
    }
}

AddActivity.propTypes = {
    activities: PropTypes.array,
    addActivity: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AddActivity);