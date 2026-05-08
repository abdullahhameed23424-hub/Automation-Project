import { Handle, Position } from "reactflow";

function ApiNode() {
  return (
    <div className="bg-amber-300 p-1 rounded-md min-w-35">
      <Handle type="target" position={Position.Top} />
      <strong>API NODE</strong>
      <div className="mt-0.75">Fetch Data</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default ApiNode;
