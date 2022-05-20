import { Provider } from "react-redux";
import store from "./store/store";
import CustomRoutes from "./routes";
import 'antd/dist/antd.css';
import './app.css'
function App() {
  return (
    <Provider store={store}>
      <CustomRoutes />
    </Provider>
  );
}

export default App;
