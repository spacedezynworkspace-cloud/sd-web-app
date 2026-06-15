'use client';
import { Spinner } from '@heroui/react';

export default function Loading() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center gap-8">
      <Spinner label="Loading..." size="lg" variant="spinner" color="warning" />
    </div>
  );
}
