import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class InsertOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleInsertSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      id: "",
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
    };

    axios
      .post("/api/insert", newItem)
      .then((res) => {
        let news = this.state.news;
        news = [newItem, ...news];
        this.setState({ news: news });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <h2>Add an item</h2>
        <form onSubmit={this.handleInsertSubmit}>
          <table>
            <tbody>
              <tr>
                <th>
                  <label>Title</label>
                </th>
                <td>
                  <input
                    name="title"
                    type="text"
                    onChange={this.handleInputChange}
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>Description</label>
                </th>
                <td>
                  <textarea
                    name="description"
                    onChange={this.handleInputChange}
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label>Content</label>
                </th>
                <td>
                  <textarea name="content" onChange={this.handleInputChange} />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit">Submit</button>
        </form>

        <hr />

        {/* <ul>
          {this.state.news.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <div>{item.description}</div>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

InsertOrder.propTypes = {};

export default InsertOrder;
