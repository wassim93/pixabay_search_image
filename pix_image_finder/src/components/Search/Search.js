import React, { Component } from "react";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import axios from "axios";
export class Search extends Component {
  state = {
    searchText: "",
    amout: 15,
    apiUrl: "https://pixabay.com/api/",
    apiKey: "25015327-bbdd746e3de04d1e2bc552e25",
    images: [],
  };
  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField
          name="search"
          value={this.state.searchText}
          floatingLabelText="Search for images"
          onChange={this.onTextChange}
          fullWidth={true}
        />
        <br />
        <SelectField
          name="amount"
          floatingLabelText="amount"
          value={this.state.amout}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
      </div>
    );
  }

  onTextChange = (e) => {
    const { searchText } = this.state;
    this.setState({ searchText: e.target.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amout}&safesearch=true`
        )
        .then((res) => this.setState({ images: res.data.hits }))
        .catch((err) => console.log(err));
    });
    console.log("textchange");
  };
  onAmountChange = (e) => {
    /* const { amount } = this.state;
    this.setState({ amount: e.target.value });
    console.log("amountchange"); */
  };
}

export default Search;
