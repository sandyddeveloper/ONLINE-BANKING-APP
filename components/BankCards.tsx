import { getUser } from "@/server/api";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type AccountType = {
  id: string;
  name: string;
  currentBalance: number;
  mask: string;
};

type CreditCardProps = {
  account?: AccountType;
  userName?: string;
  showBalance?: boolean;
};

const BankCards: React.FC<CreditCardProps> = ({ account }) => {
  const [firstName, setFirstName] = useState<string>("Guest");
  const [lastName, setLastName] = useState<string>("");
  const [bankName, setBankName] = useState<string>("N/A");
  const [userData, setUserData] = useState<{
    total_amount: number;
    number_of_accounts: number;
  }>({
    total_amount: 0,
    number_of_accounts: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser();
        setFirstName(userData.first_name || "Guest");
        setLastName(userData.last_name || "");
        setBankName(userData.account_name || "N/A");
        setUserData({
          total_amount: parseFloat(userData.total_amount) || 0,
          number_of_accounts: userData.number_of_accounts || 0,
        });
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!account) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading account data...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Link href={`/transaction-history/?id`} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{bankName}</h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {userData.total_amount}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                {firstName}
                {lastName}
              </h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image src="/icons/Paypass.svg" width={20} height={24} alt="pay" />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>
    </div>
  );
};

export default BankCards;
