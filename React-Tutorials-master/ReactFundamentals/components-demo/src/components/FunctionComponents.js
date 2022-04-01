import React, { Component } from "react";
import PropTypes from "prop-types";
function Avatar() {
  return (
    <div className="avatar">
      <img src="img_avatar.jpeg" alt="" />
    </div>
  );
}

function MemberInfo() {
  return (
    <div className="info">
      <h2>Nguyễn Văn A</h2>
      <p>Tuổi: 25</p>
    </div>
  );
}

function Comment() {
  return (
    <div className="comment">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit proin sit amet
      neque.
    </div>
  );
}

function Member() {
  return (
    <div className="member">
      <Avatar />
      <MemberInfo />
      <Comment />
    </div>
  );
}

export default Member;
