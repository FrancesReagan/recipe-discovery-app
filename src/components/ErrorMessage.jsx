// error display//
// component to display error messages//
const ErrorMesssage = ({  message }) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mx-4 my-4">
      <div className="flex items-center">
        <svg className-"w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
       </svg>
       <span>Oops! {message}</span>
      </div>
    </div>
  );
};

export default ErrorMessage;