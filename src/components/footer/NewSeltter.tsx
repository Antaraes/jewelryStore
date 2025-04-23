"use client";
import React, { useState, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNotification } from "@/context/NotitifcationContext";

type NewsletterFormProps = Record<string, never>;

export const NewsletterForm: React.FC<NewsletterFormProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { addNotification } = useNotification();

  useEffect(() => {
    // Count down if timer is active
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Do nothing if countdown is active
    if (countdown > 0) {
      return;
    }

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const submittedEmail = email;
      handleNewsletterSubmit(submittedEmail);

      // Show notification instead of alert
      addNotification(
        `Thank you! Your subscription has been processed for ${submittedEmail}`,
        "success"
      );

      setEmail("");
      setIsSubmitting(false);

      // Start 30 second countdown
      setCountdown(30);
    }, 500);
  };

  return (
    <div className="space-y-2">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0"
      >
        <div className="flex-grow">
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={countdown > 0}
            aria-label="Email Address"
            className={error ? "border-red-500" : ""}
          />
          {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
        <Button
          type="submit"
          className="h-10 w-full md:w-auto"
          disabled={isSubmitting || countdown > 0}
          aria-label="Subscribe"
        >
          {isSubmitting ? (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
          ) : countdown > 0 ? (
            <span>{countdown}s</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          )}
        </Button>
      </form>
      {countdown > 0 && (
        <p className="text-sm text-gray-500">
          Please wait {countdown} seconds before submitting again.
        </p>
      )}
    </div>
  );
};

// Updated submission handler that uses the context
export const handleNewsletterSubmit = (email: string) => {
  console.log(
    `Sending newsletter subscription to ${process.env.EMAIL_ADDRESS} for email: ${email}`
  );
  // The notification is now handled in the form component via context
};
