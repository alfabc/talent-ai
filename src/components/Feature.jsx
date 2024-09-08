import React from 'react';
import { Button } from "@/components/ui/button";

export const Feature = ({ title, description, buttonText, onClick }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Button onClick={onClick}>{buttonText}</Button>
  </div>
);