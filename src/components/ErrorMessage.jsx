
// component to display error messages//
const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center py-12">
      {/* error box with red styles */}
     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md mx-auto">
      <p> ❌ {message} </p>
     </div>
    </div>
  );
}

export default ErrorMessage;