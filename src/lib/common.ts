export const delay = (milliseconds: number = 1000): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const generateRandomId = () => Math.floor(10000 + Math.random() * 90000);

export const getAppPathName = (feature: string) =>
  `/capture-tools/${feature.toLowerCase().replace(/ /g, '-')}`;
