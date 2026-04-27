"use client";

import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [text, setText] = useState("");
  const [audio, setAudio] = useState("");

  const generate = async () => {
    const res = await axios.post(
      "http://localhost:8000/tts",
      { text },
      { responseType: "blob" }
    );

    const url = URL.createObjectURL(res.data);
    setAudio(url);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Voice Playground</h1>

      <textarea onChange={(e) => setText(e.target.value)} />

      <br />

      <button onClick={generate}>Generate Voice</button>

      {audio && <audio controls src={audio}></audio>}
    </div>
  );
}
