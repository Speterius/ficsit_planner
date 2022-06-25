import Header from "./components/Header";
import BasicFlow from "./components/ExampleFlow";
import ReactFlowProvider from 'react-flow-renderer';

// function App() {
//   return (
//     <div className='container'>
//       <Header/>
//       <ReactFlowProvider>
//         <Flow/>
//       </ReactFlowProvider>
//     </div>
//   )
// }

function App() {
  return (
    <div className='container'>
      <Header/>
      <div style={{ height: 800 }}>
        <ReactFlowProvider>
          <BasicFlow/>
        </ReactFlowProvider>
      </div>
    </div>
  )
}

export default App;
