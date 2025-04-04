import React from 'react'
import Posts from '../posts.json'
import { Link } from 'react-router-dom'

const RecentPosts = ({ isHome = false }) => {
    const projects = isHome ? Posts.slice(0, 3) : Posts;
    // console.log(projects)
return (
    <section className="container">
        <h1 className="text-white my-4">{isHome ? "Recent Projects" : "All Projects"}</h1>
        {projects.map((posts) => (
            <li className="list-group-item my-3" key={posts.id}>
                <div className="card border-primary recent-projects">
                    <Link className="text-decoration-none bg-custom-color2 recent-projects" to={`/posts/${posts.slug}`}>  
                        <div className="row no-gutters ">
                            <div className="col-md-4 ">
                                <img className="img-fluid rounded-3" src={`${process.env.PUBLIC_URL}/droid-blog-website/images/${posts.image[0]}`} alt={posts.title}/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title text-white">{posts.title}</h5>
                                    <p className="card-text "><small className="secondary-text-color">{posts.date}</small></p>
                                    <p className="card-text mb-0 text-white">{posts.content}</p>
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