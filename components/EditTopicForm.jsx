"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newDesc, setNewDesc] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(id)

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDesc }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }

      router.push("/");
      router.refresh();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Title"
          value={newTitle}
        />

        <input
          onChange={(e) => setNewDesc(e.target.value)}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Topic Description"
          value={newDesc}
        />

        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Update Topic
        </button>
      </form>
    </div>
  );
};

export default EditTopicForm;
