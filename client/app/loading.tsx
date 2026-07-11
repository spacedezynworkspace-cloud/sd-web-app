'use client';
import { Triangle } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center gap-8">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#f19645"
        ariaLabel="triangle-loading"
      />
    </div>
  );
}
