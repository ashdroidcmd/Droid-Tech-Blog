import Hero from '../components/Hero'
import RecentPosts from '../components/RecentPosts'
import React, { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    document.title = "Droid | Home";
  }, []);
  return (
    <>
        <Hero />
        <RecentPosts isHome={true} />
    </>
)
}

export default HomePage