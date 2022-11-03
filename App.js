import { store } from "./src/app/store";
import { Provider } from "react-redux";
import AppWrapper from "./AppWrapper";
export default function App() {
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  );
}
