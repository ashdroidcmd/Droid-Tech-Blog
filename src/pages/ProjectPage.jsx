import RecentPosts from '../components/RecentPosts'

import React, { useEffect } from 'react';

const Postpage = () => {
  useEffect(() => {
    document.title = "Droid | Projects"; 
  }, []);

return (
    <>
    <RecentPosts />
      <div className="container text-white">
        <h1 className="mb-3">Raspberry Pi</h1>
        <h2 className="mb-3 text-center">Coming Soon...</h2>
        <h1 className="mb-3">Homelab</h1>
        <h2 className="mb-3 text-center">Coming Soon...</h2>
      </div>
    </>
)
}

export default Postpage
