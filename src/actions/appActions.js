import AppDispatcher from '../dispatchers/appDispatcher.js';
import AppConstants from '../constants/appConstants.js';
import AppApi from '../api/appApi.js';

const AppActions = {

  getContacts: function() {
    AppDispatcher.dispatch({
      actionType: AppConstants.actions.GET_CONTACTS,
    });
    AppApi.getContacts();
  },

};

export default AppActions;
