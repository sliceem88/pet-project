export const createBEMclass = (block, element, modificator) => {
  const classCombine = `${block}-${element}`;

  return modificator ? classCombine + `_${modificator}` : classCombine;
};
