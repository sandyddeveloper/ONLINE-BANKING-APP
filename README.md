# Vaulity: Financial SaaS Platform

<div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Django-black?style=for-the-badge&logoColor=white&logo=django&color=092E20" alt="django" />
</div>

---

## 📋 Table of Contents
- [🤖 Introduction](#-introduction)
- [⚙️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🔋 Features](#-features)
- [🤸 Quick Start](#-quick-start)
- [🕸️ Code Snippets to Copy](#%EF%B8%8F-code-snippets-to-copy)
- [🔗 Assets](#-assets)
- [🚀 More](#-more)
- [🚨 Tutorial](#%F0%9F%9A%A8-tutorial)

---

## 🤖 Introduction
Vaulity is a financial SaaS platform built with Next.js, Django, and Appwrite, designed to simplify personal finance management. Users can connect multiple bank accounts, view real-time transactions, transfer funds, and manage their finances with ease.

This project is featured in a step-by-step tutorial on the JavaScript Mastery YouTube channel. Join the JSM family to learn how to build projects like these and more!

If you encounter any issues or need assistance, join our vibrant Discord community of over 34k+ members.

---

## ⚙️ Tech Stack
- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **Appwrite**
- **Django**
- **Plaid**
- **Dwolla**
- **React Hook Form**
- **Zod**
- **Chart.js**
- **ShadCN**

---

## 🔋 Features
- **Authentication:** Secure SSR authentication with robust validations and authorization.
- **Bank Integration:** Integrate with Plaid to link multiple bank accounts.
- **Dashboard:** Displays a financial overview, including total balance, recent transactions, and categorized spending.
- **Bank Management:** Lists connected banks with detailed account information.
- **Transaction History:** Provides pagination and filtering for transaction records.
- **Real-Time Updates:** Reflects changes dynamically when new accounts are added.
- **Fund Transfers:** Enables secure fund transfers using Dwolla with required recipient details.
- **Responsiveness:** Optimized for desktop, tablet, and mobile devices.
- **Code Architecture:** Implements reusable and modular components.

---

## 🤸 Quick Start
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/horizon-financial-saas.git
   ```
2. **Navigate to the Directory:**
   ```bash
   cd horizon-financial-saas
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
5. **Set Up Backend:**
   - Install Django and Appwrite.
   - Configure API keys for Plaid and Dwolla.
6. **Access the App:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🕸️ Code Snippets to Copy
- Authentication Helper:
   ```typescript
   import { getSession } from 'next-auth/react';
   export const authenticateUser = async () => {
       const session = await getSession();
       if (!session) throw new Error('User not authenticated');
   };
   ```

- API Integration Example:
   ```typescript
   import axios from 'axios';
   export const fetchTransactions = async (bankId: string) => {
       const { data } = await axios.get(`/api/transactions/${bankId}`);
       return data;
   };
   ```

---

## 🔗 Assets
- **Logo:** [Download](#)
- **UI Mockups:** [View](#)

---

## 🚀 More
- **Follow us on [YouTube](https://www.youtube.com/@jsmastery).**
- **Join our [Discord Community](https://discord.gg/jsmastery).**

}
