import realEstate from '../assets/projects-image/realEstate.png';
import disaster from '../assets/projects-image/disaster.png';
import ecommerce from '../assets/projects-image/ecommerce.png';
const Projects = () => {
    const projects = [
      {
        image: realEstate,
        title: "Real Estate Website",
        description: "A real estate platform for listing and booking properties, featuring an admin dashboard and search functionality.",
        link: "https://your-real-estate-demo-link.com",
      },
      {
        image: disaster,
        title: "Natural Disaster Management Website",
        description: "MERN stack Natural disaster response platform with real-time messaging, resource management, and alerts, featuring a responsive, user-friendly.",
        link: "https://your-food-delivery-demo-link.com",
      },
      {
        image: ecommerce,
        title: "E-Commerce Website",
        description: "A fully functional Reactjs stack e-commerce platform with user authentication, product management, and payment integration.",
        link: "https://your-ecommerce-demo-link.com",
      },
      {
        title: "Crypto Website",
        description: "Reactjs fully functional fronrend website for purchasing, exchanging, monitoring crypto currency.",
        link: "https://your-portfolio-demo-link.com",
      },
    ];
  
    return (
      <section id="projects" className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-slate-600 text-4xl font-bold text-center mb-8">My Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
              >
                <img src={project.image} alt="image" />
                <h3 className="truncate text-2xl font-semibold text-slate-600 mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  