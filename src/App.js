import React, { Suspense } from "react";
import "./App.css";
import AsyncComponent from "./components/Suspense/AsyncSuspendableComponent";
import AutoBatchedComponent from "./components/AutoBatchedComponent";
import Transition from "./components/Transitions/Transition";
import Spinner from "./components/Spinner";
function App() {
  return (
    <div className="App">
      <h1>AutoBatching example: Even Odd Counter</h1>
      <p>
        Open up the Javascript console. When automatic batching is on, you will
        see only one render when you click on the "+1" button. When it is off,
        you will see two renders.
      </p>
      <AutoBatchedComponent />
      <h1>Suspense Example: Full List of American Universities</h1>
      <Suspense fallback={<Spinner className="loader-lg" />}>
        <div className="results-panel">
          <AsyncComponent />
        </div>
      </Suspense>
      <h1>Transition example: Rendering grids of different sizes</h1>
      <Transition />
    </div>
  );
}
export default App;
