import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = ({ label, prefix, mockData }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);
  const colors = ['#198754', '#d1e7dd', '#ffc107', '#0dcaf0', '#27e6e6'];

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const { value, total } = mockData[prefix] || { value: 0, total: 100 };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [label, 'Other'],
        datasets: [{
          data: [value, total - value],
          backgroundColor: [
            colors[Math.floor(Math.random() * colors.length)],
            '#e9ecef'
          ],
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                return context.raw > 0
                  ? `INR ${context.raw}Cr (${Math.round((context.raw / total) * 100)}%)`
                  : '';
              }
            }
          }
        }
      }
    });

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, [label, prefix, mockData]);

  return (
    <div style={{ position: "relative", height: "200px" }}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default DoughnutChart;
