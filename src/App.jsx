import { useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

/// NODES
import LogNode from "./nodes/LogNode";
import ColorNode from "./nodes/ColorNode";
import DelayNode from "./nodes/DelayNode";
import ApiNode from "./nodes/ApiNode";
import StartNode from "./nodes/StartNode";
import AddNode from "./nodes/AddNode";

let id = 1;

/// NODE TYPES
const nodeTypes = {
  logNode: LogNode,
  colorNode: ColorNode,
  delayNode: DelayNode,
  apiNode: ApiNode,
  startNode: StartNode,
  addNode: AddNode,
};

function App() {
  const [nodes, setNodes] = useState([
    {
      id: "0",
      type: "startNode",
      position: { x: 250, y: 50 },
      data: {
        label: "Start",
      },
    },
  ]);
  const [edges, setEdges] = useState([]);

  /// [ADD_NODE]
  const addNode = (type) => {
    const newNode = {
      id: String(id++),
      type,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      data: {
        text: "",
        color: "#ff0000",
        delay: 0,

        updateNodeData: (id, key, value) => {
          setNodes((nds) =>
            nds.map((node) => {
              if (node.id === id) {
                return {
                  ...node,
                  data: {
                    ...node.data,
                    [key]: value,
                  },
                };
              }

              return node;
            }),
          );
        },
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  /// [CHANGE_NODE_POSITION]
  const onNodesChange = useCallback(
    (changes) => {
      setNodes((nds) => applyNodeChanges(changes, nds));
    },
    [setNodes],
  );

  /// [CONNECT_BETWEEN_NODES]
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds));
  }, []);

  /// [RUN_AUTOMATION]
  const runAutomation = async () => {
    console.clear();

    /// [FIND_START_NODE]
    const startNode = nodes.find((node) => node.type === "startNode");

    if (!startNode) {
      console.log("No Start Node Found");
      return;
    }

    let currentNode = startNode;

    while (currentNode) {
      console.log("RUN:", currentNode.type);

      /// [EXECUTE_NODE]
      switch (currentNode.type) {
        case "logNode":
          console.log(currentNode.data.text);
          break;
        case "colorNode":
          console.log(
            `%c${currentNode.data.text}`,
            `color:${currentNode.data.color}; font-size:16px;`,
          );
          break;
        case "delayNode":
          console.log(`Waiting ${currentNode.data.delay}`);
          await new Promise((resolve) =>
            setTimeout(resolve, currentNode.data.delay),
          );
          break;
        case "apiNode":
          console.log("Fetching API...");
          break;
        case "addNode":
          const x = Number(currentNode.data.number1);
          const y = Number(currentNode.data.number2);
          console.log(x, "+", y, "=", x + y);
          break;
        default:
          break;
      }

      /// [FIND_NEXT_EDGE]
      const nextEdge = edges.find((edge) => edge.source === currentNode.id);
      if (!nextEdge) {
        currentNode = null;
        break;
      }
      /// [FIND_NEXT_NODE]
      currentNode = nodes.find((node) => node.id === nextEdge.target);
    }

    console.log("AUTOMATION FINISHED");
  };

  return (
    <div style={{ height: "100vh" }}>
      {/* [BUTTONS] */}
      <div className="absolute z-10 top-2.5 left-2.5 flex gap-2.5">
        <button className="btn-style" onClick={() => addNode("logNode")}>
          Add Log
        </button>
        <button className="btn-style" onClick={() => addNode("colorNode")}>
          Add Color
        </button>
        <button className="btn-style" onClick={() => addNode("delayNode")}>
          Add Delay
        </button>
        <button className="btn-style" onClick={() => addNode("apiNode")}>
          Add API
        </button>
        <button className="btn-style" onClick={() => addNode("addNode")}>
          Add Math
        </button>
        <button
          className="btn-style  border-cyan-400! bg-cyan-900! "
          onClick={runAutomation}
        >
          Run Automation
        </button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
