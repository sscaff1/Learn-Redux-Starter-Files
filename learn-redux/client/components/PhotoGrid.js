import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

export default function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, i) => (
        <Photo key={`post-${i}`} {...props} index={i} post={post} />
      ))}
    </div>
  )
}
