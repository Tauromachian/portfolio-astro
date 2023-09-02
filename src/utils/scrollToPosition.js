export const scrollToPosition = (positionId) => {
  console.log(positionId.split("#").pop());

  const el = document.getElementById(positionId.split("#").pop());

  el.scrollIntoView({ behavior: "smooth" });
};
