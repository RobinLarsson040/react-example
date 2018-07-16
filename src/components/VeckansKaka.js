import React from "react";
import axios from "axios";

class VeckansKaka extends React.Component {
  state = {
    kaka: undefined
  };

  componentDidMount() {
      let random = Math.floor((Math.random() * 52) + 1);
    axios
      .get("https://cors.io/?http://api.fredagskakan.se/v/" + random)
      .then(res => {
        const result = res.data.pic;
        console.log(result);
        this.setState(() => {
          return {
            kaka: result
          };
        });
      });
  }

  render() {
    return (
      <div>
        <img src={this.state.kaka}></img>
      </div>
    );
  }
}

export default VeckansKaka;
