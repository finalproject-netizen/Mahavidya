import { getSheetData, appendSheetData } from "../database/sheetSync.js";

const SHEET_ID = process.env.TOKEN_SHEET_ID;
const RANGE = "Tokens!A:D";

export const TokenModel = {
  async getAll() {
    const data = await getSheetData(SHEET_ID, RANGE);
    return data.slice(1).map(([id, user, amount, reason]) => ({
      id, user, amount, reason
    }));
  },
  async reward({ id, user, amount, reason }) {
    await appendSheetData(SHEET_ID, RANGE, [id, user, amount, reason]);
  },
};
