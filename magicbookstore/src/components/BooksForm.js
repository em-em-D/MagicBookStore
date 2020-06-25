import React from "react";

class BooksForm extends React.Component {
  state = {
    title: "",
    category: ""
  };

  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, category } = this.state;
    if (title && category) {
      console.log(title, category);
      this.setState({
        title: "",
        category: ""
      });
    }
  };

  render() {
    const { title, category } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BooksForm;
