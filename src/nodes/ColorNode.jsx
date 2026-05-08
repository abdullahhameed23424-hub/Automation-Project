import { Handle, Position } from "reactflow";

function ColorNode({ id, data }) {
  return (
    <div
      className=" text-white p-2.75 rounded-lg min-w-35"
      style={{
        background: data.color || "red",
      }}
    >
      <Handle type="target" position={Position.Top} />
      <strong>COLOR NODE</strong>
      <input
        type="color"
        value={data.text}
        onChange={(e) => data.updateNodeData(id, "text", e.target.value)}
        className="mt-2 w-full rounded bg-red-800 p-1 outline-none"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default ColorNode;
