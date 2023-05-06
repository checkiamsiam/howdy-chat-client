import { ImAttachment } from "react-icons/im";
import { IoSend } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const MessageBodyFooter = () => {
  return (
    <div className="flex items-center px-4 py-1">
      <div className="flex-none">
        <MdOutlineEmojiEmotions className="inline w-6 h-6 cursor-pointer text-indigo-400" />
        <ImAttachment className="inline w-5 h-5 ml-2 -mt-1 cursor-pointer text-indigo-400" />
      </div>
      <div className="flex-grow">
        <div className="px-4 py-2 w-full">
          <div className="relative text-gray-600 focus-within:text-gray-200">
            <input
              type="text"
              name="q"
              className="message-input w-full py-3 text-sm text-white bg-gray-700 rounded-full pl-5 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Type a message"
            />
          </div>
        </div>
      </div>
      <div className="flex-none text-right">
        <IoSend className="inline w-6 h-6 cursor-pointer text-indigo-400" />
      </div>
    </div>
  );
};

export default MessageBodyFooter;
