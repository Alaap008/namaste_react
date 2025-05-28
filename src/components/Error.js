import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
          <h2 className="text-xl text-gray-600 mb-4">Something went wrong</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600 font-medium">
              {err.status}: {err.statusText}
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            Go Back Home
          </Link>
          <button 
            onClick={() => window.location.reload()}
            className="block w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-lg font-medium transition-colors duration-200"
          >
            Try Again
          </button>
        </div>
        
        <p className="text-gray-500 text-sm mt-6">
          If the problem persists, please contact our support team.
        </p>
      </div>
    </div>
  )
}

export default Error
