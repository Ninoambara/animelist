export const fetchData = async (query, addon) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/${query}?${addon}`
  );

  const data = await response.json();
  return data;
};
