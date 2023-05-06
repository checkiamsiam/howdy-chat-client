const LoginForm = () => {
  return (
    <form>
      <div>
        <div className="text-sm font-bold text-white tracking-wide">Email Address</div>
        <input
          className="w-full text-lg p-2 rounded-md border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="howdy-chat@gmail.com"
        />
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <div className="text-sm font-bold text-white tracking-wide">Password</div>
        </div>
        <input
          className="w-full text-lg p-2 rounded-md border-b border-gray-300 focus:outline-none focus:border-indigo-500"
          type=""
          placeholder="Enter your password"
        />
      </div>
      <div className="mt-10">
        <button
          className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-400
                                shadow-lg"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
