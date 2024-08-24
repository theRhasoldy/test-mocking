import "./__mock_/challenge.ts";

const getChallenges = async () => {
  const res = await fetch("/api/Challenges");
  return await res.json();
};

getChallenges();
