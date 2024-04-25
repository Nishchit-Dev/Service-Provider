export const convertDate = (d) => {
  const dateString = d;
  // Create a Date object from the provided date string
  const date = new Date(dateString);

  // Get the day of the week, month, date, and year from the date object
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const year = date.getFullYear();

  // Construct the desired format
  const formattedDate = `${dayOfWeek} ${month} ${day} ${year}`;
  return formattedDate;
};
