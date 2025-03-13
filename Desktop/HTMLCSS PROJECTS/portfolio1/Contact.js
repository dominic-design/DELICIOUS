function Contact() {
    try {
        return (
            <section id="contact" data-name="contact-section" className="bg-gray-50 section-padding">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 data-name="contact-title" className="text-3xl md:text-4xl font-bold text-center mb-12">Get in Touch</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div data-name="contact-info" className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-phone contact-icon"></i>
                                <div>
                                    <h3 className="text-lg font-medium">Phone</h3>
                                    <p className="text-gray-600">+254724285680</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-envelope contact-icon"></i>
                                <div>
                                    <h3 className="text-lg font-medium">Email</h3>
                                    <p className="text-gray-600">dominic.komen@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <i className="fas fa-map-marker-alt contact-icon"></i>
                                <div>
                                    <h3 className="text-lg font-medium">Location</h3>
                                    <p className="text-gray-600">Nairobi, Kenya</p>
                                </div>
                            </div>
                        </div>
                        <form data-name="contact-form" className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input 
                                    type="email" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea 
                                    rows="4" 
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
