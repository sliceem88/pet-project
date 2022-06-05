const MOD_VALUE_INDEX = 0;

export const createBEMclass = (block, element, modificator) => {
  const classCombine = `${block} ${block}-${element}`;

  if(modificator && Object.values(modificator)[MOD_VALUE_INDEX]) {

    const mod = Object.keys(modificator)[MOD_VALUE_INDEX];
    return classCombine + ` ${block}-${element}_${mod}`;
  }

  return classCombine;
};
