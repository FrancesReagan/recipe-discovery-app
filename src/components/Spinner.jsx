// not sure will make spinner component for showing loading --afterall//
// loading spinner component--which I may or may not use//
function Spinner() {
  return (
    <div className="flex justify-center items-center py-12">
      {/* spinning circle animation */}
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default Spinner;
