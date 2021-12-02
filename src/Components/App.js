import DuruWebRouter from "./Router";
import GlobalStyles from "./GlobalStyles";
import { HelmetProvider } from "react-helmet-async";

function App() {
  console.log("🚀 What brings you here to the console? -Hyun Jun");
  return (
    <HelmetProvider>
      <DuruWebRouter />
      <GlobalStyles />
    </HelmetProvider>
  );
}

export default App;
