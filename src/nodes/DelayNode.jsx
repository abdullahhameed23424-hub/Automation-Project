import { Handle, Position } from "reactflow";
function DelayNode({ id, data }) {
  return (
    <div className="bg-cyan-900 text-white p-2.75 rounded-lg min-w-35">
      <Handle type="target" position={Position.Top} />
      <strong>DELAY NODE</strong>
      <input
        type="time"
        value={data.delay === 0 ? "" : data.delay}
        onChange={(e) => data.updateNodeData(id, "delay", e.target.value)}
        className="mt-1.25 w-full rounded bg-cyan-800 p-1 outline-none"
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default DelayNode;
