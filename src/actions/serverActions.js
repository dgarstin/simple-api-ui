import AppDispatcher from '../dispatchers/appDispatcher.js';
import AppConstants from '../constants/appConstants.js';

const ServerActions = {

  receiveContacts: function(response) {
    AppDispatcher.dispatch({
      actionType: AppConstants.actions.GET_CONTACTS_RESPONSE,
      response: response
    });
  },

};

export default ServerActions;
