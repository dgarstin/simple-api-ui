import React from "react";

class ContactCard extends React.Component {
  render() {

      return (
        <div className="ContactCard">
          <p>{this.props.name}</p>
          <p>{this.props.username}</p>
          <p>{this.props.email}</p>
          <p>{this.props.mobile}</p>
          <p>{this.props.location}</p>
        </div>
      )
  }
}

export default ContactCard;
