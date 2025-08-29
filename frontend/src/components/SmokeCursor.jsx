import React, { useEffect, useRef } from 'react';

const SmokeCursor = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    const neonColors = [
      'rgba(0, 255, 255, 0.8)', 
      'rgba(255, 0, 255, 0.8)', 
      'rgba(0, 255, 127, 0.8)', 
      'rgba(255, 255, 0, 0.8)', 
      'rgba(255, 105, 180, 0.8)', 
    ];

    const createParticle = (x, y) => {
      const length = Math.random() * 8 + 5; // length of the neon line
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      const speedX = (Math.random() - 0.5) * 1.5;
      const speedY = (Math.random() - 0.5) * 1.5;
      particles.current.push({ x, y, length, color, speedX, speedY, alpha: 1 });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, i) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.015;

        if (p.alpha <= 0) {
          particles.current.splice(i, 1);
        } else {
          ctx.beginPath();
          ctx.lineWidth = 2.5;
          ctx.shadowBlur = 20;
          ctx.shadowColor = p.color;
          
          ctx.strokeStyle = p.color.replace('0.8', p.alpha.toFixed(2));

          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.speedX * p.length, p.y - p.speedY * p.length);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        createParticle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default SmokeCursor;
