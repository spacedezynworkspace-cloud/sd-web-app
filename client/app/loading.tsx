'use client';
import { Triangle } from 'react-loader-spinner';

export default function Loading() {
  return (
    <div className="flex absolute h-full w-full dark:bg-black bg-white justify-center items-center">
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
