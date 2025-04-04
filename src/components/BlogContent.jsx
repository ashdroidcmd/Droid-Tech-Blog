import React from 'react';
import Posts from '../posts.json'
import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player';


const BlogContent = () => {
  const { slug } = useParams();
  const post = Posts.find((p) => p.slug === slug);

  if (!post) return <h2>Post not found</h2>;

  console.log(Posts)
  return (
    <section className="dark-background">
      <div className="container">   
        <article className="blog-post"> 
          <li className="list-group-item mt-3 rounded-3 text-white" key={post.id}>

            {/* Title */}
            <h2 className="fw-bolder mb-2 mt-5">{post.title}</h2>
            <p className="secondary-text-color">{post.date}</p>

            {/* Video Link */}
            <div className="ratio ratio-16x9 mb-4">
              <ReactPlayer className="w-100 h-100" url={post.video} />
            </div>

            {/* Description */}
            <p>{post.content}</p>
            <p>Here’s how you can do it:</p>
            
            <h4>Component Needed:</h4>
              <ul>
                {post.components.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

            <h4>Wiring Diagram</h4>
              <img className="img-fluid" src={`${process.env.PUBLIC_URL}/droid-blog-website/images/${post.image[1]}`} alt="Wiring Diagram" />

            {post.diagram && Object.entries(post.diagram).map(([category, steps], index) => (
              <div className="mt-3" key={index}>
                <h4>{category}</h4>
                <ul>
                  {steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h4>Arduino Code</h4>
              <pre className='bg-dark p-5 rounded-3'>
              <code className="fs-6 text-code-color">{post.code}</code>
              </pre>

            <h4>Explanation</h4>
              <ul>
              {post.explanation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              </ul>
          </li>
        </article>
      </div>  
    </section>
  )
}

export default BlogContent