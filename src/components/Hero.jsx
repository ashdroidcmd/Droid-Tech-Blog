import '../App.css'


import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";


const Hero = () => {
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
  const displayedProjects = projects.slice(0, 4);
  return (
    <section>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-8">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper">
              {projects.map((projects) => (
                <SwiperSlide key={projects.id}>
                  <Link className="text-decoration-none " to={`/posts/${projects.slug}`}>
                    <div className="slide-content text-white recent-projects p-1">
                      <img
                        src={`${import.meta.env.BASE_URL}images/${projects.image[0]}`}
                        className="img-fluid rounded-2"
                        alt={projects.title}
                      />
                      <h3>{projects.title}</h3>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          <div className="col-lg-4">
            <h2 className="text-white">Latest Posts</h2>
            {displayedProjects.map((projects) => (
              <li className="list-group-item my-2" key={projects.id}>
                <div className="recent-projects">
                  <Link className="text-decoration-none bg-custom-color2 recent-projects" to={`/posts/${projects.slug}`}>
                    <div className="row">
                      <div className="col-5 ">
                        <img className="img-fluid rounded-3 ps-0" src={`${import.meta.env.BASE_URL}/images/${projects.image[0]}`} alt={projects.title} />
                      </div>
                      <div className="col-7 py-3 px-0">
                        <h6 className="text-white ">{projects.title}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero