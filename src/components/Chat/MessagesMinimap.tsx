import MessageItem from "./MessageItem";
import MinimapHeader from "./MinimapHeader";
import SearchMessage from "./SearchMessage";

const MessagesMinimap = () => {
  return (
    <div className="border-r border-gray-800 relative">
      <div className="aside-header sticky  top-0 right-0 left-0 z-40 text-gray-400">
        <MinimapHeader />
        <div className="search-bar px-4 py-2 w-full">
          <SearchMessage />
        </div>
      </div>
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </div>
  );
};

export default MessagesMinimap;
