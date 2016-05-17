import React from "react";
import AppStore from '../../stores/appStore.js';
import ServerActions from '../../actions/serverActions.js';
import AppActions from '../../actions/appActions.js';
import MainContent from '../mainContent/mainContent.jsx';

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
