"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchStrapi } from "@/utils/fetch";

import "./index.scss";

function BroadcastButton({ title, off }) {
  const [live, setLive] = useState(false);

  const getLive = async () => {
    const res = await fetchStrapi("broadcast?populate=*");
    const { live, video_id, title } = res.data.attributes;

    if (live) {
      localStorage.setItem("broadcast", JSON.stringify({ video_id, title }));
    } else {
      localStorage.removeItem("broadcast");
    }

    setLive(res.data.attributes.live);
  };

  useEffect(() => {
    getLive();
  }, []);

  return (
    <button className="ui-broadcast-button">
      <Link href={live ? "/broadcast" : "#"}>
        {live && <span className="live-indicator"></span>}
        <p>{title}</p>
        {/* {live ? null : <p className="off">{off}</p>} */}
      </Link>
    </button>
  );
}

export default BroadcastButton;
