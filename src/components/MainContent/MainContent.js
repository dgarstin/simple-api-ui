import React from "react";
import ContactCards from '../ContactCards/ContactCards.js';

class MainContent extends React.Component {
  render() {

      return (
        <div className="MainContent">
          <ContactCards contacts={this.props.contacts}/>
        </div>
    )
  }
}

export default MainContent;
