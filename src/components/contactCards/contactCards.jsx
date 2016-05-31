import React from "react";
import ContactCard from '../ContactCard/ContactCard.jsx';

class ContactCards extends React.Component {
  render() {

    let contacts = this.props.contacts.map((o, i) => {
      return <ContactCard
                name={o.name}
                username={o.username}
                email={o.email}
                mobile={o.mobile}
                location={o.location}
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
