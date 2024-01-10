import ErrorBoundary from "./Errorboundary";
import ComponentA from "./component/ComponentA";


function App() {
  return (
   <>
   <ErrorBoundary>
   <ComponentA/>
   </ErrorBoundary>
   </>
  );
}

export default App;
