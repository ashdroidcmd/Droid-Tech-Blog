# My Arduino Tech Blog
Welcome to my personal tech blog where I share my Arduino projects, tutorials, and insights. This blog is built using React and provides a platform to share my experiments with electronics, coding, and IoT.

## Features
- Responsive Design: The blog is fully responsive, ensuring a smooth experience on both desktop and mobile devices.
- React Framework: Built with React for an interactive, dynamic user interface.
- HashRouter: For handling navigation in a single-page application (SPA) with URL hash-based routing.
- Project Showcase: A dedicated section to showcase personal Arduino projects, including code snippets, wiring diagrams, and step-by-step guides.
- Search and Filter: Easily search and filter through the various Arduino projects and blog posts.

## Technologies Used
- React: A JavaScript library for building user interfaces, enabling a fast, dynamic web experience.
- HashRouter: Used for client-side routing, allowing navigation without full page reloads.
- Bootstrap CSS: A responsive, mobile-first CSS framework used to quickly design and customize the layout of the blog.

## Usage
- Browse through various Arduino projects.
- Read tutorials and explore step-by-step guides for building circuits and writing code.
- Switch between articles and project pages using the app's navigation.
- The design is responsive and adjusts to different screen sizes.

## Contact
If you have any questions or want to discuss any of my projects, feel free to reach out to me:
- Email: ashgesite25@gmail.com
- GitHub: https://github.com/ashdroidcmd


## Problems Encountered
### 1. Issue with React Router after Deploying Github Pages
Fixed with using Relacing Router with HashRouter

### 2. Images won't Load after Deploying Github Pages
Logo Image is not Loading - Put your images files in public/images/logo.png then use this structure of src="/droid-blog-website/images/logo.png" and apply changes and deploy

Images of Each Projects are in json file - remove the /public/images in the json images file path leave only the name of the image ex. "2toggleswitch.jpg", and use this structure of src={`/droid-blog-website/images/${posts.image[0]}`} and apply changes and deploy
You can also check in console when you get an error if the images are not loading. GET https://ashdroidcmd.github.io/droid-blog-website/images//public/images/2toggleswitch.jpg 404 (Not Found) The file paths are wrong thats why remove the /public/images in json file.
