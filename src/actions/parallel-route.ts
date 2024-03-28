"use server";

/**
 * A server action that simulates fake api call for parallel routing demo
 * @param timeOutValue
 * @param searchParam
 */
export const fakeAPI = async (timeOutValue: number, searchParam: string) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${searchParam}`);
    }, timeOutValue);
  });
  await promise;
};
