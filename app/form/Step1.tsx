"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "@/schemas/schemas";
import { z } from "zod";
import { FormWrapper } from "@/components/FormWrapper";

type FormData = z.infer<typeof step1Schema>;

export default function Step1({
  onNext,
}: {
  onNext: (data: FormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(step1Schema),
  });

  return (
    <FormWrapper title="Step 1: Personal Info">
      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div>
          <input placeholder="Full Name" {...register("fullName")} className="input" />
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        </div>
        <div>
          <input placeholder="Email" {...register("email")} className="input" />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <input placeholder="Phone" {...register("phone")} className="input" />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>
        <button type="submit" className="btn-primary">Next</button>
      </form>
    </FormWrapper>
  );
}
