import crypto from "crypto";

type Params = {
    mkey: string;
    txnid: string;
    amount: string;
    productinfo: string;
    firstname: string;
    lastName: string;
    email: string;
    phone: string;
    surl: string;
    furl: string;
    udf1: string;
    udf2: string;
    udf3: string;
    udf4: string;
    udf5: string;
    hash: string;
};

function sha512(str: string) {
  return crypto.createHash("sha512").update(str).digest("hex");
}

function genHash(params: Params, salt: string) {
  const hashString = `${params["mkey"]}|${params["txnid"]}|${params["amount"]}|${params["productinfo"]}|${params["firstname"]}|${params["email"]}|${params["udf1"]}|${params["udf2"]}|${params["udf3"]}|${params["udf4"]}|${params["udf5"]}||||||${salt}`;
  const hash = sha512(hashString);
  return hash;
}

function genHashV2(mKey: string, command: string, var1: string, salt: string) {
  const hashString = `${mKey}|${command}|${var1}|${salt}`;
  const hash = sha512(hashString);
  return hash;
}

function generateOrder(
  mKey: string,
  salt: string,
  userId: number,
  emailId: string,
  firstName: string,
  lastName: string,
  phone: string,
  surl: string,
  furl: string,
  amount: string, 
  productInfo: string,
) {
  const txnId = `TXN-${userId}-${Date.now()}`;
  console.log(txnId);
  const params: Params = {
    mkey: mKey,
    txnid: txnId,
    amount: amount,
    productinfo: productInfo,
    firstname: firstName,
    lastName: lastName,
    email: emailId,
    phone: phone,
    surl: surl,
    furl: furl,
    udf1: "",
    udf2: "",
    udf3: "",
    udf4: "",
    udf5: "",
    hash: "",
  };
  params["hash"] = genHash(params, salt);
  return params;
}


export { generateOrder, genHashV2 };
