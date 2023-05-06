import MessageBodyFooter from "./MessageBodyFooter";
import MessageBodyHeader from "./MessageBodyHeader";
import MessageBodyItems from "./MessageBodyItems";

const MessageBody = () => {
  return (
    <main id="messageBody" className="w-full bg-whatsapp relative overflow-y-auto">
      <div className="main-header z-40 sticky top-0 lg:h-[10vh] h-[8vh] right-0 left-0 text-gray-400">
        <MessageBodyHeader />
      </div>
      <div className="main-messages flex flex-col justify-end  lg:h-[79vh] h-[84vh] px-4 py-3 ">
        <MessageBodyItems />
      </div>
      <div className="main-footer sticky lg:h-[11vh] h-[8vh] bottom-0 right-0 left-0 text-gray-400">
        <MessageBodyFooter />
      </div>
    </main>
  );
};

export default MessageBody;
