import { Link } from 'react-router-dom'
import React, { useEffect } from 'react';

const ResourcesPage = () => {
  useEffect(() => {
    document.title = "Droid | Resources";
  }, []);
  return (
    <main className="bg-custom-color d-flex flex-column min-vh-100 p-4">
        <section className="container text-white">
            <h1>Resources</h1>
            <p>Welcome to the Resources page! Here, you'll find a collection of useful links, tutorials, and tools to help you get started with Arduino development.</p>
                
            <h3>Getting Started</h3>
            <ul>
                <li><Link className="link-offset-2 link-underline link-underline-opacity-0" to="https://www.arduino.cc/" target="_blank">Official Arduino Website</Link> – Official documentation, downloads, and tutorials.</li>
                <li><Link className="link-offset-2 link-underline link-underline-opacity-0" to="https://www.arduino.cc/en/Guide " target="_blank">Arduino Getting Started Guide</Link> – Step-by-step guide for beginners.</li>  
                <li><Link className="link-offset-2 link-underline link-underline-opacity-0" to="https://forum.arduino.cc/" target="_blank">Arduino Forum</Link> – Community discussions and troubleshooting help.</li>
            </ul>
            <h3>Learning Arduino</h3>
            <ul>
                <li><Link className="link-offset-2 link-underline link-underline-opacity-0" to="https://www.youtube.com/arduino" target="_blank">Arduino YouTube Channel</Link> – Video tutorials and project showcases.</li>
                <li><Link className="link-offset-2 link-underline link-underline-opacity-0" to="https://www.youtube.com/@paulmcwhorter" target="_blank">Paul McWhorter Youtube Channel</Link> - Video Tutorials about Arduino and More</li>  
                <li><Link className="link-offset-2 link-underline link-underline-opacity-0" to="https://www.tinkercad.com/" target="_blank">Tinkercad</Link> - Simulation of Basic Arduino Circuits</li>
              </ul>
        </section>
    </main>
  )
}

export default ResourcesPage