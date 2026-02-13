import React from 'react'

interface DashboardHeaderProps {
  title: string;
  description?: string;
}
const DashboardHeader = ({ title, description }: DashboardHeaderProps) => {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{title}</h1>
      {description && <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>}
    </div>
  )
}

export default DashboardHeader