import React, { Component } from "react";

class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogPost: [],
      finishedLoading: true
    };
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8000/api/blogPosts/all");
    const json = await response.json();
    this.setState({ blogPost: json.blogPosts, finishedLoading: false });
  }

  reload = async () => {
    const response = await fetch("http://localhost:8000/api/blogPosts/all");
    const json = await response.json();
    this.setState({ blogPost: json.blogPosts, finishedLoading: true });
  };

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