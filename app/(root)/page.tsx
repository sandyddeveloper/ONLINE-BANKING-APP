import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={0}
            totalCurrentBalance={0}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar
        user={{
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
        }}
        banks={[
          {
            $id: "bank1",
            id: "1",
            mask: "5678",
            name: "Bank B",
            balance: 58,
            branch: "gudu",
            accountNumber: "9876543210",
            currentBalance: 2000,
            currency: "USD",
          },
          {
            $id: "bank2",
            id: "2",
            mask: "5678",
            name: "Bank B",
            balance: 58,
            branch: "gudu",
            accountNumber: "9876543210",
            currentBalance: 2000,
            currency: "USD",
          },
        ]}
      />
    </section>
  );
};

export default Home;
