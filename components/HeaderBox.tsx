"use client";

import React, { useState, useEffect } from "react";
import { getUser } from "@/server/api";

type HeaderBoxProps = {
  type?: "title" | "greeting";
  title: string;
  subtext?: string;
};

const HeaderBox: React.FC<HeaderBoxProps> = ({
  type = "title",
  title,
  subtext = "",
}) => {
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser();
      setFirstName(userData.first_name || "Guest");
    };

    fetchUserData();
  }, []);

  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && firstName && (
          <span className="text-bankGradient">&nbsp;{firstName}</span>
        )}
      </h1>
      {subtext && <p className="header-box-subtext">{subtext}</p>}
    </div>
  );
};

export default HeaderBox;
