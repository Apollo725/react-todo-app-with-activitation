import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteActivity, selectActivity } from '../actions'

import './Activity.css';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Favorite from '@material-ui/icons/Favorite';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';

class Activity extends Component {
    constructor(props){
        super(props);
        this.deleteClick = this.deleteClick.bind(this);
        this.editClick = this.editClick.bind(this);
        
        this.state = {
            content: props.content,
            editable: false
        };
    }
    deleteClick(){
        const { activity_id } = this.props;
        console.log("remove this: " + activity_id);
        this.props.deleteActivity(activity_id);
    }
    editClick(){
        this.setState({ editable: !this.state.editable });
    }

    handleSelect() {
        const { activity_id } = this.props;
        this.props.selectActivity(activity_id);
    }

    handleChange(e) {
        this.setState({ content: e.target.value });
    }

    handleKeyPress(e) {
        if (e.key == 'Enter')
            this.setState({ editable: false });
    }
  render() {
    const checked = this.props.like ? "checked" : "";
    const { content, editable } = this.state;
    const editableInput = <Input className="editableInput"
                        inputProps={{ 'aria-label': 'Description' }} 
                        value={content} 
                        onChange={this.handleChange.bind(this)} 
                        onKeyPress={this.handleKeyPress.bind(this)} />
    return (
        <div className="todoWrapper">
            { editable ? editableInput : content }
            <Button className='edit_button' variant="fab" color="secondary" aria-label="edit" onClick={this.editClick} >
                <Icon>edit_icon</Icon>
            </Button>
            <FormControlLabel
                className="favorite"
                onClick={ this.handleSelect.bind(this) }
                control={
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedH" checked={checked}/>
                }
            />
            <Tooltip id="tooltip-icon" title="Delete">
                <IconButton className="removeTodo" aria-label="Delete" onClick={this.deleteClick}>
                    <DeleteIcon />
                </IconButton>
                
            </Tooltip>
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
        deleteActivity: bindActionCreators(deleteActivity, dispatch),
        selectActivity: bindActionCreators(selectActivity, dispatch),
    }
}

Activity.propTypes = {
    activities: PropTypes.array,
    deleteActivity: PropTypes.func,
    selectActivity: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
