const pipetwoFunctions = (f, g) => (...args) => g(f(...args));
export const pipe = (...fns) => fns.reduce(pipetwoFunctions);

export default pipe;
