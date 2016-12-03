import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
    this.form = null;
    this.author = null;
    this.comment = null;
  }
  handleSubmit(event) {
    event.preventDefault();
    const { postId } = this.props.params;
    const author = this.author.value;
    const comment = this.comment.value;
    this.props.actions.addComment(postId, author, comment);
    this.form.reset();
  }
  renderComment(comment, index) {
    return (
      <div key={index} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button onClick={() => this.props.actions.removeComment(this.props.params.postId, index)} className="remove-comment">&times;</button>
        </p>
      </div>
    );
  }

  render() {
    const { postComments } = this.props;
    return (
      <div>
        <div className="comments">
          {postComments.map(this.renderComment)}
        </div>
        <form ref={(ref) => this.form = ref} className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref={(ref) => this.author = ref} placeholder="author"/>
          <input type="text" ref={(ref) => this.comment = ref} placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
