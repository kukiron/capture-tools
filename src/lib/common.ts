export const delay = (milliseconds: number = 1000): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

export const getAppPathName = (feature: string) =>
  `/capture-tools/${feature.toLowerCase().replace(/ /g, '-')}`;
