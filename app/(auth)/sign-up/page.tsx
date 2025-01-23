import AuthForm from "@/components/AuthForm";
import Footer from "@/components/Footer";
import React from "react";

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
      <Footer />
    </section>
  );
};

export default SignUp;

