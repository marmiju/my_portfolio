export const getSkills = async () => {
  const result = await fetch("http://localhost:5000/api/skills");
  if (!result.ok) {
    throw new Error("Oops! Something Went Wrong!!!");
  }
  return result.json();
};
