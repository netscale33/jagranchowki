import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotSpeed: number;
  opacity: number;
}

export const FlowerShower: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Reduced Particle Count for Subtle, Pure White Jasmine Flower Shower
    const particleCount = window.innerWidth < 768 ? 10 : 15;

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.5,
      size: Math.random() * 6 + 10,
      speedY: Math.random() * 1.1 + 0.7,
      speedX: (Math.random() - 0.5) * 0.5,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.35 + 0.6,
    });

    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle());
    }

    // ONLY Pure White Jasmine Blossoms (Mogra / Mogra Flower)
    const drawWhiteJasmine = (p: Particle) => {
      ctx.fillStyle = '#FFFFFF'; // Pure White Petals
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const angle = (i * Math.PI * 2) / 5;
        ctx.ellipse(
          Math.cos(angle) * (p.size * 0.4),
          Math.sin(angle) * (p.size * 0.4),
          p.size * 0.35,
          p.size * 0.65,
          angle,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      // Gentle Gold/Cream Center
      ctx.fillStyle = '#FEF08A';
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.25, 0, Math.PI * 2);
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render ONLY when scrolled near the top fold (< 350px)
      if (window.scrollY < 350) {
        particles.forEach((p) => {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = p.opacity;

          drawWhiteJasmine(p);

          ctx.restore();

          // Update position
          p.y += p.speedY;
          p.x += p.speedX;
          p.rotation += p.rotSpeed;

          // Recycle particle once off-screen
          if (p.y > canvas.height + 20) {
            p.y = -20;
            p.x = Math.random() * canvas.width;
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-500"
    />
  );
};
