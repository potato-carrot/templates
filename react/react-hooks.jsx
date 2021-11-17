import React, { useState, useEffect } from 'react';

const MyComponent =  () => {
  const [title, setTitle] = useState('标题');

  const init  = ()=>{

  }

  useEffect(() => {
    init()
  }, []);

  return (
    <>
      <div>{title}</div>
    </>
  );
};

export default MyComponent