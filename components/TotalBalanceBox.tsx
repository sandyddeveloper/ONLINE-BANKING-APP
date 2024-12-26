import { formatAmount } from "@/lib/utils";
import React from "react";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance flex-col">
      <div className="total-balance-chart">{/* DoughnutChart */}</div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Account: {totalBanks}</h2>
      </div>
      <div className="flex flex-col gap-2">
        <p className="total-balance-label">Total Current Balance</p>
        <p className="total-balance-amount flex-center gap-2">
          {formatAmount(totalCurrentBalance)}
        </p>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
