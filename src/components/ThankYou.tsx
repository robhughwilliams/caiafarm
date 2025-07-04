import React from "react";

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><circle cx="12" cy="12" r="10" /><path d="M9 12l2 2l4-4" /></svg>
      <h2 className="text-2xl font-bold text-green-700 mb-2">Thank you for your enquiry</h2>
      <p className="text-lg text-green-800 text-center">We'll aim to be in touch within 48 hours.</p>
    </div>
  );
} 