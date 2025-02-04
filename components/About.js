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
                           Saya adalah mahasiswa tingkat akhir Manajemen Informatika yang memiliki passion dalam menciptakan solusi digital inovatif dan efisien. Dengan pemahaman yang kuat di bidang pengembangan perangkat lunak dan manajemen sistem, saya senang mengubah ide-ide kompleks menjadi aplikasi yang fungsional dan berdampak nyata. Setiap tantangan dalam teknologi adalah peluang untuk belajar dan berkembang, dan saya selalu bersemangat untuk mengeksplorasi hal-hal baru dalam dunia IT.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Selain mengembangkan perangkat lunak, saya juga tertarik pada desain sistem yang intuitif dan pengalaman pengguna yang optimal. Saya percaya bahwa teknologi bukan hanya tentang kode, tetapi juga tentang bagaimana solusi yang diciptakan dapat memberikan manfaat bagi banyak orang. Dengan kombinasi kreativitas dan logika, saya ingin terus berkontribusi dalam menciptakan inovasi yang membawa perubahan positif di berbagai aspek kehidupan.
                        </p>
                        <h3 className="text-xl font-semibold mb-4">Education</h3>
                        <p className="text-gray-600">
                            YPI SMA Tunas Bangsa Palembang<br />
                            Politeknik Negeri Sriwijaya<br />
                            Ekspetasi Kelulusan: 2026
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
