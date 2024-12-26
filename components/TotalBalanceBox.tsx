"use client";

import React, { useState, useEffect } from "react";
import { formatAmount } from "@/lib/utils";
import { getUser } from "@/server/api";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";
import Loader from "./ui/Loader";

type TotalBalanceBoxProps = {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
};

const TotalBalanceBox: React.FC<TotalBalanceBoxProps> = ({ accounts }) => {
  const [userData, setUserData] = useState<{
    total_amount: number;
    number_of_accounts: number;
  }>({
    total_amount: 0,
    number_of_accounts: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getUser();
        setUserData({
          total_amount: data.total_amount,
          number_of_accounts: data.number_of_accounts,
        });
      } catch (err) {
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <section className="total-balance ">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {userData.number_of_accounts}
        </h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter totalCurrentBalance={userData.total_amount} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
