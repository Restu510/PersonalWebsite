function ProjectCard({ title, description, image, tags, link }) {
    return (
        <div data-name="project-card" className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
            <img src={image} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600">
                            {tag}
                        </span>
                    ))}
                </div>
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                    View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    );
}

function Projects() {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with React and Node.js",
            image: "https://via.placeholder.com/400x300",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Task Management App",
            description: "A responsive task management application with real-time updates",
            image: "https://via.placeholder.com/400x300",
            tags: ["React", "Firebase", "Tailwind"],
            link: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A weather forecast application using modern APIs",
            image: "https://via.placeholder.com/400x300",
            tags: ["JavaScript", "API", "CSS"],
            link: "#"
        }
    ];

    return (
        <section id="projects" data-name="projects-section" className="section">
            <h2 data-name="projects-title" className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </section>
    );
}
