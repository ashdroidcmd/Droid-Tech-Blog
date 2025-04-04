import React, { useEffect } from 'react';
import BlogContent from '../components/BlogContent'
import SideContent from '../components/SideContent'


const ProjectPage = () => {
return (
    <>
    <section className="bg-custom-color">
        <div className="container-fluid">   
            <div className="row g-2">
                <div className="col-md-9">
                    <BlogContent />
                </div>
                <div className="col-md-3">
                    <SideContent />
                </div>
            </div>
        </div>
    </section>
    </>
)
}

export default ProjectPage