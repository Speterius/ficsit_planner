import Header from "./components/Header";
// import BasicFlow from "./components/ExampleFlow";
import ReactFlowProvider from "react-flow-renderer";
import NodeEditor from "./components/NodeEditor";

function App() {
  return (
    <div className='container'>
      <Header className="header"/>
      <div className="node-editor">
        <ReactFlowProvider>
          <NodeEditor/>
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default App;
