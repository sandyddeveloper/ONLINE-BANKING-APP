import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

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

export const authFormSchema = (type: string) =>
  z.object({
    email: z.string().email().max(50),
    password: z.string().min(8).max(20),
    conformpassword:
      type === "sign-in" ? z.string().optional() : z.string().min(8).max(20),
    pancard:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .regex(/^([A-Z]{5}[0-9]{4}[A-Z]{1})$/)
            .min(10)
            .max(10),
    dob:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .regex(/^\d{2}\/\d{2}\/\d{4}$/)
            .min(10)
            .max(10),
    pincode:
      type === "sign-in"
        ? z.string().optional()
        : z
            .string()
            .regex(/^\d{6}$/)
            .min(6)
            .max(6),
    confirmPassword: type === "sign-up"
            ? z.string().min(6, "Confirm Password is required")
            : z.optional(z.string()),
    state:
      type === "sign-in" ? z.string().optional() : z.string().min(3).max(50),
    address:
      type === "sign-in" ? z.string().optional() : z.string().min(10).max(100),
    lastName:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(30),
    firstName:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(30),
    city:
      type === "sign-in" ? z.string().optional() : z.string().min(2).max(30),
  });
