function App() {
    try {
        return (
            <div data-name="app" className="bg-[#1a1625] min-h-screen">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Gallery />
                <Blog />
                <Contact />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
