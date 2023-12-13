"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {

  const router = useRouter()

  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });

        console.log('>>', res.ok)

        if(res.ok){
          router.refresh()
          // router.replace(router.asPath);
        }
      } catch (error) {
        console.log("error:", error);
      }
    }
  };

  // const handleClick = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
  //       method: "DELETE",
  //     });
  //   } catch (error) {
  //     console.log("error:", error);
  //   }
  // };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
