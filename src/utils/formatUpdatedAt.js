export const formatUpdatedAt = (inputDate, withText = true) => {
  try {
    const date = new Date(inputDate);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'UTC',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return `${withText ? 'Updated at ' : ''}${formattedDate}`;
  } catch (error) {
    return inputDate
  }
};
