"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type DoughnutChartProps = {
  accounts: Account[];
};
const mockAccounts = [{ balance: 5000 }, { balance: 3000 }, { balance: 2000 }];
const DoughnutChart: React.FC<DoughnutChartProps> = () => {
  const accounts = mockAccounts; // Use mock data directly for testing

  console.log("Accounts Data:", accounts);
  const data = {
    datasets: [
      {
        label: "Banks",
        data: accounts.map((account) => account.balance),
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: accounts.map((account, index) => `Bank ${index + 1}`),
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
