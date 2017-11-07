import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      //
    break;
  default:
    //no op
  }
});
