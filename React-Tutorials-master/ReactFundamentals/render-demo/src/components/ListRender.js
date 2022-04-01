import React, { Component } from "react";

class ListRender extends Component {
  users = [
    { id: 1, name: "dung" },
    { id: 2, name: "nga" },
  ];
  ListItem(props) {
    return <li>{props.value}</li>;
  }
  render() {
    const nameList = ["dung", "nga", "hang"];
    const userInfo = nameList.map((item, index) => (
      <li key={index.toString()}>{item}</li>
    ));
    return (
      <div>
        <ul>{userInfo}</ul>
        <label>
          users:
          <ul>
            {this.users.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </label>
        <label>
          users2:
          <ul>
            {this.users.map((item) => (
              <this.ListItem key={item.id} value={item.name} />
            ))}
          </ul>
        </label>
      </div>
    );
  }
}

export default ListRender;
