import RecentPosts from '../components/RecentPosts'

import React, { useEffect } from 'react';

const Postpage = () => {
  useEffect(() => {
    document.title = "Droid | Projects"; 
  }, []);
  return (
    <RecentPosts />
  )
}

export default Postpage
