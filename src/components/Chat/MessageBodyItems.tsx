const MessageBodyItems = () => {
  return (
    <>
      <div className="flex justify-end">
        <div className="single-message rounded-tl-lg rounded-bl-lg text-gray-200 rounded-br-lg bg-indigo-400 mb-4 px-4 py-2">
          Hey! Thought I'd reach out to say how are you? 😊{" "}
          <span className="text-xs inline-block">
            13:00{" "}
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/60/60727.svg?token=exp=1611581819~hmac=ebbc941635810f019c46f5b4f9b1ff89"
              className="w-4 h-4 inline -mt-1 ml-2"
              alt=""
            />
          </span>
        </div>
        <span>
          <svg className="text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
            <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
            <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
          </svg>
        </span>
      </div>
      <div className="flex">
        <span>
          <svg className="incoming-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
            <path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path>
            <path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path>
          </svg>
        </span>
        <div className="single-message rounded-tr-lg text-gray-200 rounded-bl-lg rounded-br-lg mb-4 px-4 py-2">
          Hey Pal! I'm doing good, how have you been? Cold at the moment aye!
        </div>
      </div>
    </>
  );
};

export default MessageBodyItems;
