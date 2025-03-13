function App() {
    try {
        return (
            <div data-name="app-container">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
