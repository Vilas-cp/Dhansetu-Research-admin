import axios from "axios";
import { randNum } from "./random";
import { waitForNSeconds } from "./wait";
import chalk from "chalk";

async function retryRequest<T>(
  reqName: string,
  reqFunc: () => T,
  retryTimes: number = 3
) {
  try {
    for (let i = 0; i < retryTimes; i++) {
      const apiRes = await reqFunc();
      if (apiRes !== null && apiRes !== undefined) {
        return apiRes;
      }
      await waitForNSeconds(randNum(2, 3));
    }
    console.log(
      chalk.red(`Failed request ${reqName} for retries of ${retryTimes} times`)
    );
    return null;
  } catch (error: any) {
    console.log(chalk.red("Axios Error: "), error?.message, error?.code);
    return null;
  }
}

async function getBufferFromImgURL(imgURL: string) {
  return await retryRequest("getBufferFromImgURL", async () => {
    try {
      const imgData = await axios.get(imgURL, { responseType: "arraybuffer" });
      return Buffer.from(imgData.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  });
}

export { getBufferFromImgURL };
