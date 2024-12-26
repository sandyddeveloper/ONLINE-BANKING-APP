"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

type HeaderBoxProps = {
  type?: "title" | "greeting";
  title: string;
  subtext?: string;
  apiUrl: string;
};

const HeaderBox: React.FC<HeaderBoxProps> = ({
  type = "title",
  title,
  subtext = "",
  apiUrl,
}) => {
  const [firstName, setFirstName] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(apiUrl);
        setFirstName(response.data.first_name);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setFirstName("Guest");
      }
    };

    fetchUser();
  }, [apiUrl]);

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
