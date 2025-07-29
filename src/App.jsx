import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { RoutineSession } from "./pages/RoutineSession";
import { NotFound } from "./pages/NotFound";
import { ServerError } from "./pages/ServerError";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { Landing } from "./pages/Landing";
import { PremadeRoutine } from "./pages/PremadeRoutine";
import CreateProgram from "./pages/CreateProgram";
import { BrowserProvider } from "./BrowserProvider";
import { useUsers } from "./hook/useUsers";
function App() {
  const { data, isLoading, isFetching } = useUsers();

  if (isLoading || isFetching) {
    return null;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* No authentication required */}
        <Route index element={<Landing title="BodyBoddy" />} />
        {/* <Route
          path="/enter"
          element={<AuthenticationOptions title="Welcome to BodyBuddy" />}
        /> */}
        {/* <Route path="/signin" element={<SignIn title="Sign In" />} />
        <Route path="/signup" element={<SignUp title="Sign Up" />} /> */}

        {/* Authentication required (MainLayout is applied) */}
        <Route
          path="/"
          element={
            true ? <PremadeRoutine /> : isLoading ? null : <Navigate to="/" />
          }
        >
          {/* <Route path="/dashboard" element={<Dashboard title="Dashboard" />} /> */}
          {/* <Route path="/profile" element={<Profile title="Profile" />} /> */}
          {/* <Route path="/learning" element={<Learn title="Learn" />} />
          <Route
            path="/learn/:exercise_id"
            element={<LearnExercise title="Learn Exercise" />}
          /> */}
          {/* <Route
            path="/training"
            element={<TrainingProgram title="Training" />}
          /> */}
          <Route
            path="/training/:routine_id"
            element={<PremadeRoutine title="Premade Routine" />}
          />
        </Route>
        <Route
          path="/create-program"
          element={
            <CreateProgram
              AssessmentDone={data[0].isAssessmentDone}
              isEntered={data[0].isEntered}
              title="Create Custom Program"
            />
          }
        />
        <Route path="/error" element={<ServerError title="Server Error" />} />
        <Route path="*" element={<NotFound title="Not found" />} />
        {/* Authentication required (MainLayout is NOT applied) */}
        <Route
          path="/routine"
          element={<RoutineSession title="RoutineSession" />}
        />
      </>
    )
  );

  return (
    // Wrapped with ThemeProvider to apply theme.js styles
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserProvider>
        <RouterProvider router={router} />
      </BrowserProvider>
    </ThemeProvider>
  );
}

export default App;
