import { Link } from "react-router-dom";
import Header from "../Header/Header";

const ErrorPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Header />
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white rounded-lg p-8 shadow-md text-center">
                    <h1 className="text-3xl font-semibold text-red-500 mb-4">
                        Oops! Something went wrong
                    </h1>
                    <p className="text-gray-600 mb-4">
                        The page you are looking for does not exist.
                    </p>
                    <Link
                        to="/"
                        className="text-white bg-blue-400 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-300 hover:text-white"
                    >
                        Go Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
