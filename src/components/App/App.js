import React from "react";
import AppStore from '../../stores/AppStore.js';
import ServerActions from '../../actions/ServerActions.js';
import AppActions from '../../actions/AppActions.js';
import MainContent from '../mainContent/MainContent.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = _getAppState();
  }

  componentDidMount() {
    AppStore.addChangeListener(this.onAppStoreChange.bind(this));
    AppActions.getContacts();
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onAppStoreChange.bind(this))
  }

  onAppStoreChange() {
    this.setState(_getAppState())
  }

  render() {
    return (
      <div className="App">
        <MainContent contacts={this.state.contacts} />
      </div>
    )
  }
}

function _getAppState() {
  return {
    contacts : AppStore.getContacts()
  };
}
