"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "@/schemas/schemas";
import { z } from "zod";
import { FormWrapper } from "@/components/FormWrapper";

type FormData = z.infer<typeof step3Schema>;

export default function Step3({
  onNext,
  onBack,
}: {
  onNext: (data: FormData) => void;
  onBack: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(step3Schema),
  });

  return (
    <FormWrapper title="Step 3: Account Setup">
      <form onSubmit={handleSubmit(onNext)} className="space-y-4">
        <div>
          <input {...register("username")} placeholder="Username" className="w-full px-3 py-2 border rounded" />
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>
        <div>
          <input {...register("password")} type="password" placeholder="Password" className="w-full px-3 py-2 border rounded" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <div>
          <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded" />
          {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={onBack} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Back</button>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next</button>
        </div>
      </form>
    </FormWrapper>
  );
}
