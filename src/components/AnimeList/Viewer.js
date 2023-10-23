import { Eye } from "@phosphor-icons/react";

const Viewer = () => {
  return (
    <div className="flex flex-row px-3 rounded py-1 bg-gray-800 gap-1">
      <Eye className="text-white" size={18} />
      <p>1100</p>
    </div>
  );
};

export default Viewer;
