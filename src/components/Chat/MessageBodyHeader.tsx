import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { SlOptionsVertical } from "react-icons/sl";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MessagesMinimap from "./MessagesMinimap";

const MessageBodyHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = (): void => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex justify-between  items-center px-4 py-3">
        <div>
          <div className="flex items-center">
            <CgMenuLeftAlt onClick={toggleDrawer} className="inline w-8 h-8 mr-4 text-indigo-400 cursor-pointer md:hidden" />
            <div className="mr-4">
              <img
                className="w-11 h-11 rounded-full"
                src="https://images.generated.photos/TF1poQJzPyLbQsqitETSQBeDzgY7vEsSLPl4UVbgZTM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA3MzMwMzAuanBn.jpg"
              />
            </div>
            <div>
              <p className="text-md font-bold text-white">Josh Peters</p>
              <p className="text-sm text-gray-400">last seen today at 14:46</p>
            </div>
          </div>
        </div>
        <div>
          <SlOptionsVertical className="inline w-5 h-5 cursor-pointer text-indigo-400" />
        </div>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left" className="bla bla bla">
        <div className="h-screen bg-[#131c21] overflow-y-auto">
          <MessagesMinimap />
        </div>
      </Drawer>
    </>
  );
};

export default MessageBodyHeader;
