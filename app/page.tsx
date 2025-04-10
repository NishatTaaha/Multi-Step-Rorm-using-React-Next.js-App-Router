"use client";

import { useState } from "react";
import Step1 from "./form/Step1";
import Step2 from "./form/Step2";
import Step3 from "./form/Step3";
import Summary from "./form/Summary";

export default function Home() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateData = (values: Partial<typeof data>) => {
    setData((prev) => ({ ...prev, ...values }));
    nextStep();
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", data);
    alert("Form submitted!");
  };

  switch (step) {
    case 1:
      return <Step1 onNext={(values) => updateData(values)} />;
    case 2:
      return <Step2 onNext={(values) => updateData(values)} onBack={prevStep} defaultValues={data} />;
    case 3:
      return <Step3 onNext={(values) => updateData(values)} onBack={prevStep} defaultValues={data} />;
    case 4:
      return <Summary data={data} onBack={prevStep} onSubmit={handleSubmit} />;
    default:
      return null;
  }
}
