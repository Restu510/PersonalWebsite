function About() {
    const skills = [
        "JavaScript", "React", "Node.js", "Python",
        "HTML/CSS", "SQL", "Git", "UI/UX Design"
    ];

    return (
        <section id="about" data-name="about-section" className="section bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 data-name="about-title" className="text-3xl font-bold text-center mb-12">About Me</h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div data-name="about-content" className="slide-up">
                        <h3 className="text-xl font-semibold mb-4">Background</h3>
                        <p className="text-gray-600 mb-6">
                            I'm a final year Computer Science student passionate about creating innovative web solutions. 
                            With a strong foundation in both frontend and backend development, I love turning complex 
                            problems into simple, beautiful solutions.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-4">Education</h3>
                        <p className="text-gray-600">
                            BSc in Computer Science<br />
                            University of Technology<br />
                            Expected Graduation: 2024
                        </p>
                    </div>

                    <div data-name="skills-section" className="slide-up">
                        <h3 className="text-xl font-semibold mb-4">Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span 
                                    key={index}
                                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
