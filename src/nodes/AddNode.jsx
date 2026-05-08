import { Handle, Position } from "reactflow";

function AddNode({ id, data }) {
  const result = Number(data.number1) + Number(data.number2);

  return (
    <div className="bg-green-900 text-white p-3 rounded-lg min-w-45">
      <Handle type="target" position={Position.Top} />
      <strong>ADD NODE</strong>
      <input
        type="number"
        placeholder="x"
        value={data.number1}
        onChange={(e) => data.updateNodeData(id, "number1", e.target.value)}
        className="mt-2 w-full rounded bg-green-700 p-1 outline-none"
      />
      <input
        type="number"
        placeholder="y"
        value={data.number2}
        onChange={(e) => data.updateNodeData(id, "number2", e.target.value)}
        className="mt-2 w-full rounded bg-green-700 p-1 outline-none"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default AddNode;
