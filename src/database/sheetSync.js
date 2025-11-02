// src/database/sheetSync.js
import { connectGoogle } from "./dbConnect.js";

export const getSheetData = async (sheetId, range) => {
  const { sheets } = await connectGoogle();
  const res = await sheets.spreadsheets.values.get({ spreadsheetId: sheetId, range });
  return res.data.values || [];
};

export const appendSheetData = async (sheetId, range, values) => {
  const { sheets } = await connectGoogle();
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    resource: { values: [values] },
  });
};
