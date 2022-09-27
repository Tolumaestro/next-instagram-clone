import React from "react";
import Stories from "./Stories";

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        {/* Posts */}
      </section>

      {/* Section */}
      {/* Mini Profile */}
      {/* Suggestions */}
    </main>
  );
};

export default Feed;
