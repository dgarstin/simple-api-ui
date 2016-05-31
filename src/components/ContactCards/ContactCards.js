import React from "react";
import ContactCard from '../ContactCard/ContactCard.js';

class ContactCards extends React.Component {
  render() {

    let contacts = this.props.contacts.map((o, i) => {
      return <ContactCard
                contactData = {o}
                key={o + " " + i} />
    });

    return (
      <div className="ContactCards">
        {contacts}
      </div>
    )
  }
}

export default ContactCards;
