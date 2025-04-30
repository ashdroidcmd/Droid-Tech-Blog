import { useEffect, useState } from "react";
import { doc, getDoc, query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const BlogContent = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Query the collection where slug matches
        const q = query(collection(db, "projects"), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log("No post found with that slug");
          setPost(null);
        } else {
          const postData = querySnapshot.docs[0].data();
          setPost(postData);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="vh-100">
      <h1 className="text-center text-white my-5">Loading...</h1>
    </div>;
  }

  if (!post) {
    return <div className="vh-100">
      <h1 className="text-center text-white my-5">Page not found</h1>
    </div>;
  }

  return (
    <section className="dark-background">
      <div className="container text-white">
        <article className="blog-post">
          <h2 className="fw-bolder mb-2 mt-5">{post.title}</h2>
          <p className="secondary-text-color">{post.date}</p>

          <div className="ratio ratio-16x9 mb-4">
            <ReactPlayer className="w-100 h-100" url={post.video} controls={true} />
          </div>

          <p>{post.content}</p>
          <p>Here’s how you can do it:</p>

          <h4>Component Needed:</h4>
          <ul>
            {post.components.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h4>Wiring Diagram</h4>
          <img className="img-fluid" src={`/Droid-Tech-Blog/images/${post.image[1]}`} alt="Wiring Diagram" />

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
        </article>
      </div>
    </section>
  );
};

export default BlogContent;
