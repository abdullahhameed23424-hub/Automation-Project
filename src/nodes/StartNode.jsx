import { Handle, Position } from "reactflow";

function StartNode() {
  return (
    <div className="bg-pink-700 text-white rounded-[50px] p-2.75 w-30 text-center">
      <Handle type="source" position={Position.Top} />
      START
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default StartNode;
