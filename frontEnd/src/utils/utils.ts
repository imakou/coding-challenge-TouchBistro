const generateUniqueID = (): string => {
  return Math.floor(Math.random() * Date.now()).toString();
};

export { generateUniqueID };
