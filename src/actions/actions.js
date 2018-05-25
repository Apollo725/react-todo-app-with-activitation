import {
    ADD_ACTIVITY,
    DELETE_ACTIVITY,
    SELECT_ACTIVITY
} from '../constants/ActionTypes'

export function addActivity(activityName) {
    return {
        type: ADD_ACTIVITY,
        payload: activityName
    }
}

export function deleteActivity(activityId) {
    return {
        type: DELETE_ACTIVITY,
        payload: activityId
    }
}

export function selectActivity(activityId) {
    return {
        type: SELECT_ACTIVITY,
        payload: activityId
    }
}