function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', formData);
            alert('Thank you for your message! I will get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            reportError(error);
            alert('There was an error sending your message. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section id="contact" data-name="contact-section" className="section bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <h2 data-name="contact-title" className="text-3xl font-bold text-center mb-12">Kirim Pesan</h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <div data-name="contact-info" className="slide-up">
                        <h3 className="text-xl font-semibold mb-6">Ayo Terhubung!!</h3>
                        <p className="text-gray-600 mb-8">
                            Saya selalu terbuka terhadap peluang baru dan proyek menarik. 
                            Jangan ragu untuk menghubungi saya!
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <a 
                                    href="https://github.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 social-icon"
                                >
                                    <i className="fab fa-github text-2xl"></i>
                                </a>
                                <a 
                                    href="https://linkedin.com" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 social-icon"
                                >
                                    <i className="fab fa-linkedin text-2xl"></i>
                                </a>
                                <a 
                                    href="mailto:john@example.com"
                                    className="text-gray-600 hover:text-gray-900 social-icon"
                                >
                                    <i className="fas fa-envelope text-2xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form data-name="contact-form" onSubmit={handleSubmit} className="space-y-6 slide-up">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
