import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
export interface Bank {
  $id: string;
  id: string;
  name: string;
  mask: string;
  currentBalance: number;
  accountNumber: string;
  balance: number;
  branch: string;
  currency: string;
}

export function getAccountTypeColors(type: AccountTypes) {
  switch (type) {
    case "depository":
      return {
        bg: "bg-blue-25",
        lightBg: "bg-blue-100",
        title: "text-blue-900",
        subText: "text-blue-700",
      };

    case "credit":
      return {
        bg: "bg-success-25",
        lightBg: "bg-success-100",
        title: "text-success-900",
        subText: "text-success-700",
      };

    default:
      return {
        bg: "bg-green-25",
        lightBg: "bg-green-100",
        title: "text-green-900",
        subText: "text-green-700",
      };
  }
}
