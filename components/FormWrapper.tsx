"use client";

export const FormWrapper = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <div className="max-w-md mx-auto p-6 border rounded-xl shadow-md mt-10 bg-white dark:bg-gray-800">
    <h2 className="text-2xl font-semibold mb-4 text-center">{title}</h2>
    {children}
  </div>
);
