import React, { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "Droid | About";
  }, []);
  return (
    <main className="bg-custom-color d-flex flex-column min-vh-100 p-4">
        <section className="container text-white">
            <h1>Aboutt</h1>
            <h2>Welcome to My Arduino Projects</h2>
            <p>Hello! I'm Ash, an electronics enthusiast and a passionate maker who loves building Arduino projects.</p>
                
            <p>Through this website, I share my journey, beginner-friendly tutorials, circuits, and creative projects to help others get started with Arduino.</p>
                
            <h3>What You’ll Find Here:</h3>
            <ul>
                <li>Step-by-step Arduino tutorials</li>
                <li>Creative IoT, automation, and robotics projects</li>
                <li>Beginner-friendly circuit diagrams and code</li>
                <li>Helpful troubleshooting tips</li>
            </ul>

            <p>Whether you're a beginner or an advanced maker, there's something for you! 🚀</p>

            <h3>Why Arduino?</h3>
            <p>Arduino makes electronics easy and fun. From controlling LEDs to building home automation systems, it's an amazing platform for learning, prototyping, and innovating.</p>
                
            <p>Join me on this journey as we explore the world of electronics! 🎉</p>

            <h5>Send Me a Message:</h5>
            <p><a className="text-white link-offset-2 link-underline link-underline-opacity-0" href="ashgesite25@gmail.com" target="_blank">ashgesite25@gmail.com</a></p>
        </section>
    </main>
  )
}

export default AboutPage