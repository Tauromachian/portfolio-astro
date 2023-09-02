export const scrollToPosition = (positionId) => {
  const el = document.getElementById(positionId.split("#").pop());
  el.scrollIntoView({ behavior: "smooth" });
};
