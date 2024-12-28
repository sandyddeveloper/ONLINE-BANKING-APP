"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  accounts: Account[];
};

const DoughnutChart: React.FC<DoughnutChartProps> = ({ accounts }) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: accounts.map((account) => account.balance), // Assuming `balance` is a field in `Account`
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accounts.map((account, index) => `Bank ${index + 1}`), // Custom labels for each bank
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
