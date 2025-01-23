import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-in" />
      <Footer />
    </section>
  );
};

export default SignIn;
