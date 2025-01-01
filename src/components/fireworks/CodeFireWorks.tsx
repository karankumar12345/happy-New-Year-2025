import React, { useEffect, useRef } from 'react';
import { generateCodeSnippet } from '../../utils/codeSnippets';

interface CodeFireworksProps {
  name: string;
}

export function CodeFireworks({ name }: CodeFireworksProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Function to resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.min(window.innerHeight / 2, 300); // Restrict canvas height
    };

    resizeCanvas(); // Initial size set
    window.addEventListener('resize', resizeCanvas); // Handle resizing

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#FF69B4', '#4169E1', '#FFD700', '#7CFC00', '#FF4500'];

    // Function to create code fireworks
    function createCodeFirework(x: number, y: number) {
      const particleCount = 20;
      const snippet = generateCodeSnippet();

      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 2 + Math.random() * 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          text: snippet,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
        });
      }
    }

    // Animation loop
    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.alpha -= 0.01;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.font = '12px monospace';
        ctx.fillText(p.text, p.x, p.y);
        ctx.restore();

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      if (Math.random() < 0.05) {
        createCodeFirework(
          Math.random() * canvas.width,
          canvas.height - Math.random() * 100 // Restrict firework starting positions
        );
      }

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      particles.length = 0; // Clear particles on unmount
      window.removeEventListener('resize', resizeCanvas); // Clean up event listener
    };
  }, [name]);

  return (
    <canvas
      ref={canvasRef}
      className=" pointer-events-none z-50"
    />
  );
}
