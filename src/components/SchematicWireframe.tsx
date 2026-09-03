import React, { useEffect, useRef, useState } from "react";

export default function SchematicWireframe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 25, y: -35 });
  const [coords, setCoords] = useState({ x: "128.4", y: "64.2" });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const relY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      
      setRotation({
        x: 25 - relY * 18,
        y: -35 + relX * 25,
      });

      setCoords({
        x: ((e.clientX % 1000) / 10).toFixed(1),
        y: ((e.clientY % 1000) / 10).toFixed(1),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 3D cube vertices projected to 2D isometric view
  const radX = (rotation.x * Math.PI) / 180;
  const radY = (rotation.y * Math.PI) / 180;

  const project = (x: number, y: number, z: number) => {
    // Rotation Y
    const x1 = x * Math.cos(radY) + z * Math.sin(radY);
    const z1 = -x * Math.sin(radY) + z * Math.cos(radY);
    // Rotation X
    const y2 = y * Math.cos(radX) - z1 * Math.sin(radX);
    const z2 = y * Math.sin(radX) + z1 * Math.cos(radX);
    
    // Orthographic projection to center (200, 160)
    const scale = 75;
    return {
      x: 200 + x1 * scale,
      y: 155 + y2 * scale,
    };
  };

  const vertices = [
    project(-1, -1, -1), // 0
    project(1, -1, -1),  // 1
    project(1, 1, -1),   // 2
    project(-1, 1, -1),  // 3
    project(-1, -1, 1),  // 4
    project(1, -1, 1),   // 5
    project(1, 1, 1),    // 6
    project(-1, 1, 1),   // 7
  ];

  // Additional internal coordinate axes
  const origin = project(0, 0, 0);
  const axisX = project(1.3, 0, 0);
  const axisY = project(0, 1.3, 0);
  const axisZ = project(0, 0, 1.3);

  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // back face
    [4, 5], [5, 6], [6, 7], [7, 4], // front face
    [0, 4], [1, 5], [2, 6], [3, 7], // connecting edges
  ];

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg aspect-[4/3] rounded border border-[#2E2B28] bg-[#1A1918]/80 p-4 font-mono select-none overflow-hidden shadow-2xl backdrop-blur-sm"
    >
      {/* Schematic Header Bar */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#2E2B28] text-[10px] tracking-widest text-[#A8A29E] uppercase">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse"></span>
          <span>SCHEMATIC // FIG 0.1</span>
        </div>
        <span className="text-[#635F5B]">GPU PIPELINE WIREFRAME</span>
      </div>

      {/* SVG Projection Viewport */}
      <svg
        viewBox="0 0 400 310"
        className="w-full h-[230px] stroke-[#A8A29E]/60 transition-transform duration-75 ease-out"
      >
        {/* Background Grid Lines */}
        <defs>
          <pattern id="archivalGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2E2B28" strokeWidth="0.5" strokeDasharray="1,3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#archivalGrid)" />

        {/* Diagonal Reference Rays */}
        <line x1="0" y1="0" x2="400" y2="310" stroke="#2E2B28" strokeWidth="0.5" strokeDasharray="3,3" />
        <line x1="400" y1="0" x2="0" y2="310" stroke="#2E2B28" strokeWidth="0.5" strokeDasharray="3,3" />

        {/* 3D Wireframe Edges */}
        {edges.map(([start, end], idx) => (
          <line
            key={idx}
            x1={vertices[start].x}
            y1={vertices[start].y}
            x2={vertices[end].x}
            y2={vertices[end].y}
            stroke="#D97706"
            strokeWidth={idx < 4 ? "0.8" : "1.2"}
            strokeOpacity={idx < 4 ? "0.4" : "0.85"}
          />
        ))}

        {/* Coordinate Axes */}
        <line x1={origin.x} y1={origin.y} x2={axisX.x} y2={axisX.y} stroke="#10B981" strokeWidth="1" strokeDasharray="2,2" />
        <line x1={origin.x} y1={origin.y} x2={axisY.x} y2={axisY.y} stroke="#38BDF8" strokeWidth="1" strokeDasharray="2,2" />
        <line x1={origin.x} y1={origin.y} x2={axisZ.x} y2={axisZ.y} stroke="#F5F2EB" strokeWidth="1" strokeDasharray="2,2" />

        {/* Vertex Nodes */}
        {vertices.map((v, idx) => (
          <circle
            key={idx}
            cx={v.x}
            cy={v.y}
            r="2.5"
            className="fill-[#F5F2EB] stroke-[#141312]"
            strokeWidth="1"
          />
        ))}

        {/* Dimension Callout Annotations */}
        <text x="20" y="285" fill="#635F5B" fontSize="9" letterSpacing="0.1em">
          PROJECTION MATRIX: M_PROJ · V_VIEW · M_WORLD
        </text>
        <text x={vertices[6].x + 8} y={vertices[6].y - 4} fill="#D97706" fontSize="9">
          V6 [HLSL KERNEL]
        </text>
      </svg>

      {/* Schematic Telemetry Footer */}
      <div className="pt-2 border-t border-[#2E2B28] flex items-center justify-between text-[10px] text-[#A8A29E]">
        <span className="text-[#635F5B]">ANGULAR TILT: {rotation.x.toFixed(0)}° / {rotation.y.toFixed(0)}°</span>
        <span className="font-mono text-[#D97706]">CURSOR: [{coords.x}, {coords.y}]</span>
      </div>
    </div>
  );
}
