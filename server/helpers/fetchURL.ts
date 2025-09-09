import axios from "axios";
import { randNum } from "./random";
import { waitForNSeconds } from "./wait";
import chalk from "chalk";
import { genHashV2 } from "./orders";

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

async function getPaymentDetails(payUId: string, mKey: string, salt: string) {
  return await retryRequest("getPaymentDetails", async () => {
    try {
      const url = "https://test.payu.in/merchant/postservice.php?form=2";

      const body = new URLSearchParams();
      const command = "check_payment";
      body.append("key", mKey);
      body.append("command", command);
      body.append("var1", payUId);
      const hashv2 = genHashV2(mKey, command, payUId, salt);
      body.append(
        "hash",
        hashv2
      );
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });
      const resJson = await res.json();
      // console.log(resJson);
      return resJson;
    } catch (error) {
      console.log(error);
      return null;
    }
  });
}

export { getPaymentDetails };
