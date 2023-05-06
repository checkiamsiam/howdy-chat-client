import { RouterProvider } from "react-router-dom";
import router from "./app/router";
import store from "./app/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
