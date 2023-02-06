import React, { Suspense } from "react";
import "./App.css";
import AsyncComponent from "./components/AsyncSuspendableComponent";
import AutoBatchedComponent from "./components/AutoBatchedComponent";
function App() {
  return (
    <div className="App">
      <h2>Even Odd Counter</h2>
      <AutoBatchedComponent />
      <h2>List of American Universities</h2>
      <Suspense fallback={<p>Loading, please wait...</p>}>
        <AsyncComponent />
      </Suspense>
    </div>
  );
}
export default App;