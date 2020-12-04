import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(event) {
    console.log(event.target.value);
  }

  //With this not work state
  /*onFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.term);
  }*/

  //WAY:3
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitProp(this.state.term);
  };

  //WAY:1
  /*onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  };*/
  //WAY:2
  //<div className="ui segment" onSubmit={(event) => this.onFormSubmit(event)}>
  render() {
    return (
      <div className="ui segment" onSubmit={this.onFormSubmit}>
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
//input type="text" onChange={this.onInputChange} />
//<input type="text" onChange={(e)=> console.log(e.target.value)} />

export default SearchBar;
