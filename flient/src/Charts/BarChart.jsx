import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = ({ id, data, labels, label, colors }) => {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current;
    if (!ctx) return;

    ctx.style.opacity = 0;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels || ["Apr 21", "Apr 22", "Apr 23", "Apr 24", "Apr 25"],
        datasets: [
          {
            label,
            data,
            backgroundColor: colors || "rgba(54, 162, 235, 0.6)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx.style.transition = "opacity 1s";
            ctx.style.opacity = 1;
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(ctx);

    return () => {
      observer.disconnect();
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data, labels, label, colors]);

  return <canvas ref={canvasRef} id={id} height="200" className="w-100" />;
};

export default BarChart;
