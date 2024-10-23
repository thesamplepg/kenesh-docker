"use client";

import React, { useEffect, useState } from "react";
import PageInfoSection from "@/components/PageInfoSection";
import Youtube from "react-youtube";

import "./index.scss";

function Broadcast() {
  const [videoId, setVideoId] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("broadcast");

    if (data) {
      const parsedData = JSON.parse(data);

      setVideoId(parsedData.video_id);
      setTitle(parsedData.title);
    }
  }, []);

  return (
    <>
      <PageInfoSection
        title={title}
        path={[{ title: "Прямой эфир", path: "/broadcast" }]}
      />
      <main className="page-broadcast section container mx-auto">
        <div className="title"></div>
        <div className="livebroadcast">
          {videoId ? <Youtube videoId={videoId} /> : ""}
        </div>
      </main>
    </>
  );
}

export default Broadcast;
