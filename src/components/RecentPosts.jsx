import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const RecentPosts = ({ isHome = false }) => {
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

    // If it's the home page, show only 3 projects
    const displayedProjects = isHome ? projects.slice(0, 3) : projects;

return (
    <section className="container">
        <h1 className="text-white my-4">{isHome ? "Recent Projects" : "All Projects"}</h1>
        {displayedProjects.map((projects) => (
            <li className="list-group-item my-3" key={projects.id}>
                <div className="card border-primary recent-projects">
                    <Link className="text-decoration-none bg-custom-color2 recent-projects" to={`/posts/${projects.slug}`}>  
                        <div className="row no-gutters ">
                            <div className="col-md-4 ">
                                <img className="img-fluid rounded-3" src={`/Droid-Tech-Blog/images/${projects.image[0]}`} alt={projects.title}/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title text-white">{projects.title}</h5>
                                    <p className="card-text "><small className="secondary-text-color">{projects.date}</small></p>
                                    <p className="card-text mb-0 text-white">{projects.content}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </li>
))}
    </section>
)
}

export default RecentPosts