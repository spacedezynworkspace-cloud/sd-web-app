export const formatDate = (date: string) => {
  const d = new Date(date);

  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC',
  });
};

export const formatDateAndTime = (isoString: string) => {
  if (!isoString) return '';

  const date = new Date(isoString);

  return date.toLocaleString('en-US', {
    timeZone: 'Africa/Lagos',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

export const isPastDate = (dateString: string) => {
  const inputDate = new Date(dateString);
  const today = new Date();

  // normalize both to start of day (important for accurate comparison)
  inputDate.setUTCHours(0, 0, 0, 0);
  today.setUTCHours(0, 0, 0, 0);

  return inputDate < today;
};
