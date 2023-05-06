import MessageBodyBlank from "../components/Chat/MessageBodyBlank";
import MessagesMinimap from "../components/Chat/MessagesMinimap";

const Chat = () => {
  return (
    <div>
      <div className="w-full h-screen flex green-border bg-[#131c21]">
        <div className="md:block hidden">
          <div className="w-[30vw] h-screen bg-[#131c21] overflow-y-auto">
            <MessagesMinimap />
          </div>
        </div>
        {/* <MessageBody /> */}
        <MessageBodyBlank />
      </div>
    </div>
  );
};

export default Chat;
