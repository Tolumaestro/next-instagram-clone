import React from "react";

const Story = ({ img, username }) => {
  return (
    <div>
      <img
        src={img}
        alt="username"
        className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition-all ease-out duration-200"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
