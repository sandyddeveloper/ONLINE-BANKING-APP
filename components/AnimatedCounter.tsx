import { getUser } from "@/server/api";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
type AnimatedCounterProps = {
  totalCurrentBalance: number;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({}) => {
  const [userData, setUserData] = useState<{
    total_amount: number;
  }>({
    total_amount: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getUser();
      setUserData({
        total_amount: data.total_amount,
      });
    };

    fetchUserData();
  }, []);
  return (
    <div className="w-full">
      <CountUp
        decimal="."
        prefix="₹ "
        decimals={2}
        end={userData.total_amount}
      />
    </div>
  );
};

export default AnimatedCounter;
