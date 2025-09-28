import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { NextResponse } from "next/server";

export async function GET(request, response) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

export async function POST(request, response) {
  // Do whatever you want
  const rowBody = await request.json();
  try {
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
    // console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL);
    const serviceAccountAuth = new JWT({
      email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow(rowBody);
    return NextResponse.json(
      { message: "success" },
      { status: 201 }
    );
  } catch (e) {
    console.error("Error: ", e);
    return NextResponse.json({ message: "fail" }, { status: 401 });
  }
}
