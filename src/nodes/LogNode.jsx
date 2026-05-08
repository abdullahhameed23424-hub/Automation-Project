import { Handle, Position } from "reactflow";

function LogNode({ id, data }) {
  return (
    <div className="p-2 bg-zinc-800 text-white rounded min-w-40">
      <Handle type="target" position={Position.Top} />
      <strong>LOG NODE</strong>
      <input
        type="text"
        placeholder="Write something..."
        value={data.text}
        onChange={(e) => data.updateNodeData(id, "text", e.target.value)}
        className="mt-2 w-full rounded bg-zinc-700 p-1 outline-none"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default LogNode;
