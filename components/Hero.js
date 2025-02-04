function Hero() {
    return (
        <section data-name="hero-section" className="bg-gradient-to-b from-black to-red-900 min-h-screen flex items-center text-white">
            <div className="container mx-auto px-6 py-20 md:py-40">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 fade-in">
                        <h1 data-name="hero-title" className="text-4xl md:text-6xl font-bold mb-4">
                            Restu Cipta Hadi Kusuma
                        </h1>
                        <p data-name="hero-tagline" className="text-xl md:text-2xl mb-8">
                            Mahasiswa Manajemen Informatika
                        </p>
                        <a 
                            href="#contact" 
                            data-name="hero-cta"
                            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition duration-300"
                        >
                            Kirim Pesan
                        </a>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0">
                        <img 
                            data-name="hero-image"
                            src="https://pbs.twimg.com/profile_images/1858656005103484928/-mrntALz_400x400.jpg" 
                            alt="John Doe" 
                            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-white shadow-lg fade-in"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
