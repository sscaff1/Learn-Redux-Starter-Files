import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo';
import Comments from './Comments';

export default function Single(props) {
  const { posts, params, comments } = props;
  const index = posts.findIndex((post) => post.code === params.postId);
  const post = posts[index];
  const postComments = comments[params.postId] || [];
  return (
    <div className="single-photo">
      <Photo index={index} post={post} {...props} />
      <Comments {...props} postComments={postComments} />
    </div>
  )
}
