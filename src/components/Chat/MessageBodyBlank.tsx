import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { MdNotificationsNone } from "react-icons/md";
import Drawer from "react-modern-drawer";
import MessagesMinimap from "./MessagesMinimap";

const MessageBodyBlank = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const toggleDrawerMenu = (): void => {
    setIsOpenMenu((prevState) => !prevState);
  };
  return (
    <>
      <main id="messageBody" className="w-full bg-whatsapp relative overflow-y-auto">
        <div className="main-header z-40 sticky top-0 lg:h-[10vh] h-[8vh] right-0 left-0 text-gray-400">
          <div className="flex justify-between  items-center px-4 py-3">
            <div>
              <div>
                <div className="flex items-center">
                  <CgMenuLeftAlt onClick={toggleDrawerMenu} className="inline w-8 h-8 mr-4 text-indigo-400 cursor-pointer md:hidden" />
                  <div className="text-2xl text-indigo-400 tracking-wide ml-2 font-semibold">Howdy Chats</div>
                </div>
              </div>
            </div>
            <div>
              <MdNotificationsNone className="inline w-6 h-6 cursor-pointer text-indigo-400" />
            </div>
          </div>
        </div>
        <div className="main-messages flex flex-col justify-end  lg:h-[90vh] h-[92vh] px-4 py-3 ">
          <div className="flex items-center justify-center w-full h-screen">
            <div className="md:max-w-xs max-w-[15rem] transform duration-200 hover:scale-110 cursor-pointer">
              <img src="/logo.png" className="mx-auto" alt="" />
            </div>
          </div>
        </div>
      </main>
      <Drawer open={isOpenMenu} onClose={toggleDrawerMenu} direction="left" className="bla bla bla">
        <div className="h-screen bg-[#131c21] overflow-y-auto">
          <MessagesMinimap />
        </div>
      </Drawer>
    </>
  );
};

export default MessageBodyBlank;
