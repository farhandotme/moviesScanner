const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce delay-300"></div>
        <div className="w-3 h-3 bg-gray-900 rounded-full animate-bounce delay-450"></div>
      </div>
    </div>
  );
};

export default Loading;
