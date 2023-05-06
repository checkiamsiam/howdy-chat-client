const MessageItem = () => {
  return (
    <div id="mainMessages" className="aside-messages cursor-pointer">
      <div className="message text-gray-300 px-4 py-3 border-b border-gray-700">
        <div className="flex items-center relative">
          <div className="w-1/6">
            <img className="w-11 h-11 rounded-full" id="personHeadshot" src="" />
          </div>
          <div className="w-5/6">
            <div className="text-lg text-white" id="personName">
              Josh Peters
            </div>
            <div className="text-sm truncate" id="messagePreview">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
            </div>
          </div>
          <span className="absolute right-0 top-0 text-xs mt-1">13:00</span>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
