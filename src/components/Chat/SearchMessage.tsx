import { BiSearchAlt } from "react-icons/bi";

const SearchMessage = () => {
  return (
    <form>
      <div className="relative text-gray-600 focus-within:text-gray-200">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <BiSearchAlt className="inline w-6 h-6 cursor-pointer" />
          </button>
        </span>
        <input
          type="text"
          name="q"
          className="w-full py-2 text-sm text-white bg-gray-600 rounded-full pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
          placeholder="Search or start new chat"
        />
      </div>
    </form>
  );
};

export default SearchMessage;
