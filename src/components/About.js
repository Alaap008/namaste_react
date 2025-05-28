const About = () =>{
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">About FoodieExpress</h1>
                    <p className="text-xl opacity-90">Bringing delicious food to your doorstep</p>
                </div>
            </div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            Welcome to FoodieExpress, your ultimate destination for ordering delicious food online. 
                            We connect you with the best restaurants in your city, bringing a world of flavors right to your doorstep.
                        </p>
                        <p className="mb-4">
                            This project is part of the Namaste React Web Series, showcasing modern web development 
                            practices with React, Tailwind CSS, and responsive design principles.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-orange-600 mb-2">Fast Delivery</h3>
                                <p className="text-gray-600">Quick and reliable delivery service to satisfy your cravings.</p>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-orange-600 mb-2">Quality Food</h3>
                                <p className="text-gray-600">Partnered with the best restaurants to ensure quality meals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;