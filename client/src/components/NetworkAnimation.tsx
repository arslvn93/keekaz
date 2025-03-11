import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  size: number;
}

interface Line {
  from: number;
  to: number;
}

export default function NetworkAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [lines, setLines] = useState<Line[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      setDimensions({ width, height });

      // Create nodes
      const nodeCount = 15;
      const newNodes: Node[] = [];

      for (let i = 0; i < nodeCount; i++) {
        newNodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 3 + 2,
        });
      }
      setNodes(newNodes);

      // Create connections
      const newLines: Line[] = [];
      for (let i = 0; i < newNodes.length; i++) {
        for (let j = i + 1; j < newNodes.length; j++) {
          if (Math.random() > 0.7) continue; // Only connect some nodes
          newLines.push({ from: i, to: j });
        }
      }
      setLines(newLines);
    };

    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="ai-network absolute inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${node.x}px`,
            top: `${node.y}px`,
            width: `${node.size}px`,
            height: `${node.size}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.1 
          }}
        />
      ))}

      {/* Lines */}
      {lines.map((line, index) => {
        if (!nodes[line.from] || !nodes[line.to]) return null;
        
        const fromNode = nodes[line.from];
        const toNode = nodes[line.to];
        
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        return (
          <motion.div
            key={`line-${index}`}
            className="absolute h-[1px] bg-primary/30 origin-left"
            style={{
              left: `${fromNode.x}px`,
              top: `${fromNode.y}px`,
              width: `${distance}px`,
              transform: `rotate(${angle}deg)`,
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 0.3, scaleX: 1 }}
            transition={{ duration: 1, delay: index * 0.05 }}
          />
        );
      })}
    </div>
  );
}
