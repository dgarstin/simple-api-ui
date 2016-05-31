import React from "react";

class TextEdit extends React.Component {
  render() {

      return (
        <div className="TextEdit">
          <input value={this.props.input}/>
        </div>
      )
  }
}

export default TextEdit;
