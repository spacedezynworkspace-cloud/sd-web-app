'use client';

import OperationDetails from '@/components/Dashboard/Operations/OperationDetails';
import React from 'react';
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const projectID = slug.split('-').pop(); // get last part

  return <OperationDetails projectId={projectID || ''} />;
}
