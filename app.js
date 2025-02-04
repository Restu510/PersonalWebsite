function App() {
    return (
        <div data-name="app-container">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
