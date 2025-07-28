import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./utils/AuthProvider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

{
  /* <Route
  path="/create-program"
  element={
    !user ? (
      <CreateProgram title="Create Custom Program" />
    ) : (
      <Navigate to="/routine" />
    )
  }
/>

<Route
  path="/routine"
  element={
    user ? (
      <PremadeRoutine title="Premade Routine" />
    ) : (
      <Navigate to="/create-program" />
    )
  }
/> */
}
