export const getSkills = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_END_POINT}/skills`);
  if (!result.ok) {
    throw new Error("Oops! Something Went Wrong!!!");
  }
  return result.json();
};
