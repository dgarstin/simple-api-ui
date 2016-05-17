import Request from 'superagent';
import ServerActions from '../actions/ServerActions.js';

const AppApi = {

  getContacts : function() {
      Request.get('http://localhost:3333/contacts')
        .withCredentials()
        .end(function(err, response) {
          if (err) return console.error(err);

          ServerActions.receiveContacts(response.body);
        });
  }

};

export default AppApi;
