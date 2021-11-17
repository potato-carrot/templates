import React, { useState, useEffect } from 'react';

export default () => {
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
