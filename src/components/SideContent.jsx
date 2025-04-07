import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Make sure to import db from your firebase.js file

const SideContent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      // Query the projects collection ordered by the 'date' field (or 'id' if you prefer)
      const q = query(collection(db, "projects"), orderBy("id", "desc"));
      const querySnapshot = await getDocs(q);
      
      // Map the documents to an array of project data
      const projectData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      // Update the state with the fetched projects
      setProjects(projectData);
    };

    fetchProjects();
  }, []); // Empty array ensures this runs once on component mount

  return (
    <aside className="mt-5">
      <h4 className="fst-italic text-white">Recent Posts</h4>
      <ul className="list-unstyled">
        {projects.map((project) => (
          <li className="list-group-item" key={project.id}>
            <Link className="aside-custom d-flex flex-column flex-lg-row align-items-start align-items-lg-center my-3 text-decoration-none gap-2" to={`/posts/${project.slug}`}>
              <div className="col-lg-6">
                {/* Make sure the image path is correct */}
                <img className="img-fluid rounded-3" src={`/Droid-Tech-Blog/images/${project.image[0]}`} alt={project.title} />
              </div>
              <div className="col-lg-6">
                <h6 className="mb-0 text-white">{project.title}</h6>
                <small className="secondary-text-color">{project.date}</small>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideContent;
