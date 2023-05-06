import SendMessageReq from "./SendMessageReq";

const MinimapHeader = () => {
  return (
    <div className="flex h-[10vh] items-center px-4 py-3">
      <div className="flex-1">
        <div className="cursor-pointer flex items-center">
          <div>
            <img src="/logo.png" className="w-14 h-11 text-indigo-500" alt="" />
          </div>
          <div className="text-2xl text-indigo-400 tracking-wide ml-2 font-semibold">Chats</div>
        </div>
      </div>
      <div className="flex-1 text-right">
        <SendMessageReq />
      </div>
    </div>
  );
};

export default MinimapHeader;
