import React, { useState, useEffect } from 'react'

const Car = () => {

  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postsData = await response.json();
      setState(postsData);
    };
    fetchPosts();
  }, [state])

  const stateMap = state.map((post) => {
    return <div key={post.id}>
      <span >{post.title} <br /> </span>
      <span >{post.body}<br /> <br /></span>
    </div>
  })

  return (
    <div>
      {stateMap}
    </div>
  )
}

export default Car