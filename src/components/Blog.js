import React, { Component } from "react";
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogPost: [],
      finishedLoading: true,
    };
  }
  componentDidMount() {
    axios.get(`${REACT_APP_SERVER_URL}/api/blogPosts/all`)
      .then(res => {
        const data = res.data;
        this.setState({ blogPost: data.blogPosts });
      })
  }

  render() {
    if (this.state.blogPost.length === 0) {
      return (
        <div className="App">
          <h1>No blogposts have been posted!</h1>
        </div>
      );
    }
    return this.state.blogPost.map((blog, key) => (
      <div class="blogPost" key={key}>
        <h2>{blog.title}</h2>
        <p> Author: {blog.author}</p>
        <p>{blog.content}</p>
        <p>Comments:</p>
        <ul>
          {blog.comments.length > 0 ? (
            blog.comments.map((c, k) => <li key={key}>{c}</li>)
          ) : (
            <li>No comments.</li>
          )}
        </ul>
      </div>
    ));
  }
}

export default Blog;
