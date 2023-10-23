import { ChatCircleDots } from "@phosphor-icons/react";

const Comment = () => {
  return (
    <div className="flex flex-row px-3 rounded py-1 bg-gray-800 gap-1">
      <ChatCircleDots className="text-white" size={18} />
      <p>11</p>
    </div>
  );
};

export default Comment;
