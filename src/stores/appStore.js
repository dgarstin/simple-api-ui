import AppDispatcher from "../dispatchers/AppDispatcher.js";
import { EventEmitter } from "events";
import AppConstants from "../constants/AppConstants.js";
import AppApi from "../api/AppApi.js";
import assign from "object-assign";
import _ from "lodash";

const CHANGE_EVENT = "change";

function _initData() {
  return {
    contacts : [],
  };
}

let appData = _initData();

const AppStore = assign({}, EventEmitter.prototype, {

  getContacts : function() {
    return appData.contacts
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(payload) {

  switch(payload.actionType) {

    case AppConstants.actions.GET_CONTACTS_RESPONSE:

      appData.contacts = payload.response;
      AppStore.emit(CHANGE_EVENT);
      break;

    default:
      return true;
  }
});



export default AppStore;
