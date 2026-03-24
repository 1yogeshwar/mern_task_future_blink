import { useState } from "react";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import InputNode from "./components/InputNode";
import ResultNode from "./components/ResultNode";

const nodeTypes = {
  inputNode: InputNode,
  resultNode: ResultNode,
};

function App() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const nodes = [
    {
      id: "1",
      type: "inputNode",
      position: { x: 100, y: 200 },
      data: { prompt, onChange: setPrompt },
    },
    {
      id: "2",
      type: "resultNode",
      position: { x: 500, y: 200 },
      data: { answer },
    },
  ];

  const edges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

  const runFlow = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/api/ask-ai`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      },
    );
    const data = await response.json();
    setAnswer(data.answer);
  };

  const saveFlow = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, answer }),
    });
    alert("Saved successfully!");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#111" }}>
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={runFlow}
          style={{
            padding: "10px 20px",
            background: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Run Flow
        </button>
        <button
          onClick={saveFlow}
          style={{
            padding: "10px 20px",
            background: "#2196F3",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
