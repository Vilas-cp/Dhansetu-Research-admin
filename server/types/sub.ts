type Sub = {
  id: number,
  subId: string,
  subName: string,
  subTime: number,
  amount: number,
}

type PayUBody = {
  mihpayid: string;
  mode: string;
  status: string;
  unmappedstatus: string;
  key: string;
  txnid: string;
  amount: string;
  discount: string;
  net_amount_debit: string;
  addedon: string;
  productinfo: string;
  firstname: string;
  lastname: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  email: string;
  phone: string;
  udf1: string;
  udf2: string;
  udf3: string;
  udf4: string;
  udf5: string;
  udf6: string;
  udf7: string;
  udf8: string;
  udf9: string;
  udf10: string;
  hash: string;
  field1: string;
  field2: string;
  field3: string;
  field4: string;
  field5: string;
  field6: string;
  payment_source: string;
  PG_TYPE: string;
  bank_ref_num: string;
  bankcode: string;
  error: string;
  error_Message: string;
};

export { Sub, PayUBody };