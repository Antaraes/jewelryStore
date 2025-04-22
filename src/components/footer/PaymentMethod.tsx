import React from "react";

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({ title }) => {
  return (
    <div className="mt-6">
      <h3 className="mb-3 text-sm font-medium text-gray-700">{title}</h3>
      <div className="flex space-x-4">
        <div className="flex h-8 w-12 items-center justify-center rounded bg-white shadow">
          <span className="font-bold text-blue-900">VISA</span>
        </div>
        <div className="flex h-8 w-12 items-center justify-center rounded bg-white shadow">
          <div className="flex">
            <div className="h-5 w-5 rounded-full bg-gray-400 opacity-70"></div>
            <div className="ml-[-10px] h-5 w-5 rounded-full bg-gray-600 opacity-70"></div>
          </div>
        </div>
        <div className="flex h-8 w-12 items-center justify-center rounded bg-white shadow">
          <span className="font-bold text-blue-900">AMEX</span>
        </div>
        <div className="flex h-8 w-12 items-center justify-center rounded bg-white shadow">
          <span className="font-bold text-gray-900">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                fill="black"
              />
              <path
                d="M15.5 12C15.5 13.93 13.93 15.5 12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div className="flex h-8 w-12 items-center justify-center rounded bg-white shadow">
          <span className="font-bold text-gray-800">₮</span>
        </div>
      </div>
    </div>
  );
};
