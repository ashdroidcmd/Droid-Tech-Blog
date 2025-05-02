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

    // Show only 4 projects
    const displayedProjects = (isHome
        ? projects.filter(p => p.tags && p.tags.includes("arduino")).slice(0, 4)
        : projects.filter(p => p.tags && p.tags.includes("arduino"))
    );

    return (
        <section className="container my-4">
            <h1 className="text-white ">{isHome ? "Arduino" : "Arduino"}</h1>
            <div className="row row-cols-1 row-cols-md-4 g-2">
                {displayedProjects.map((project) => (
                    <div className="col" key={project.id}>
                        <div className="border border-primary recent-projects h-100 bg-custom-color2 ">
                            <Link
                                className="text-decoration-none recent-projects"
                                to={`/posts/${project.slug}`}
                            >
                                <img
                                    className="img-fluid rounded-3"
                                    src={`${import.meta.env.BASE_URL}images/${project.image[0]}`}
                                    alt={project.title}
                                />
                                <div className="p-3">
                                    <h6 className="text-white">{project.title}</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RecentPosts