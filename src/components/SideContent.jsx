import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const SideContent = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(collection(db, "projects"), orderBy("id", "desc"));
      const querySnapshot = await getDocs(q);

      const projectData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  return (
    <aside className="mt-5">
      <h4 className="fst-italic text-white">Recent Posts</h4>
      <ul className="list-unstyled">
        {projects.map((project) => (
          <li className="list-group-item" key={project.id}>
            <Link className="aside-custom d-flex flex-column flex-lg-row align-items-start align-items-lg-center my-3 text-decoration-none gap-2" to={`/posts/${project.slug}`}>
              <div className="col-lg-6">

                <img className="img-fluid rounded-3" src={`${import.meta.env.BASE_URL}images/${project.image[0]}`} alt={project.title} />
              </div>
              <div className="col-lg-6">
                <p className="mb-0 text-white">{project.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideContent;
