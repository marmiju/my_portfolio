export const getProfileData = async () => {
  const url = `${process.env.NEXT_PUBLIC_END_POINT}/profile`;
  const result = await fetch(url);
  console.log(result);
  return result.json();
};
