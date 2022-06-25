import { MouseEvent } from 'react';

import ReactFlow, {
    Background,
    BackgroundVariant,
    Node,
    useNodesState,
    // Edge,
    // useReactFlow
  } from 'react-flow-renderer';


// Methods
// const resetTransform = (instance) => {instance.setViewport({ x: 0, y: 0, zoom: 1 })};

const NodeEditor = () => {

    // const instance = useReactFlow();

    const initialNodes = []
    const edges = []

    const createNode = (event) => {
        console.log("pane click -> Adding node")
        console.log(event)

        nodes.push(
            {
                id: '1',
                type: 'input',
                data: { label: 'asd' },
                position: { x: event.pageX, y: event.pageY},
              },
        )
    }

    const [nodes, ,onNodesChange] = useNodesState(initialNodes);

    return (
        <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onPaneClick={createNode}
        onNodesChange={onNodesChange}
        zoomOnDoubleClick={false}

        >
        <Background variant={BackgroundVariant.Lines} />
        </ReactFlow>
    )
}

export default NodeEditor