import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddActivity from './AddActivity'
import Activity from './Activity'
import Divider from '@material-ui/core/Divider';

class Wrapper extends Component {
  render() {
    const { activities } = this.props;
    console.log("JON:"+ JSON.stringify(activities));
    let dividerVisible = false;
    return (
      <div>
        <AddActivity/>
        {   
            activities.map( (item, index) => {
              if (!item.like)         
                return <Activity content={item.name} key={index} activity_id={index} like={item.like}/>
              else
                dividerVisible = true;
            })
        }
        {dividerVisible && <Divider style={{margin:'15px 0px', width: '80%', marginLeft:'10%'}}/>}
        {   
            activities.map( (item, index) => {
              if (item.like)         
                return <Activity content={item.name} key={index} activity_id={index} like={item.like}/>
            })
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps)(Wrapper);