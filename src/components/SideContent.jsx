import React from 'react'
import Posts from '../posts.json'
import { Link } from 'react-router-dom'

const SideContent = () => {
return (
    <aside className="mt-5">
        <h4 className="fst-italic text-white">Recent posts</h4>
        <ul className="list-unstyled">
            {Posts.map((posts) =>(
                <li className="list-group-item" key={posts.id}>

                  <Link className="aside-custom d-flex flex-column flex-lg-row align-items-start align-items-lg-center my-3 text-decoration-none gap-2" to={`/posts/${posts.slug}`}>
                        <div className="col-lg-6">
                        <img className="img-fluid rounded-3" src={`/droid-blog-website/images/${posts.image[0]}`} alt={posts.title}/>
                        </div>
                        <div className="col-lg-6">
                          <h6 className="mb-0 text-white ">{posts.title}</h6>
                          <small className="secondary-text-color">{posts.date}</small>
                        </div>
                  </Link>

                </li>
            ))}
          </ul>
    </aside>
)
}

export default SideContent