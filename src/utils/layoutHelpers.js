export const getGridPosition = (index) => {
  const position = index % 4;
  return {
    isBig: position === 0 || position === 3,
    hasMargin: position === 1 || position === 3,
    position,
  };
};
