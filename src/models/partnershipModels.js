import { getSheetData, appendSheetData } from "../database/sheetSync.js";

const SHEET_ID = process.env.PARTNERSHIP_SHEET_ID;
const RANGE = "Partnerships!A:D";

export const PartnershipModel = {
  async getAll() {
    const data = await getSheetData(SHEET_ID, RANGE);
    return data.slice(1).map(([id, name, email, status]) => ({ id, name, email, status }));
  },
  async add(partner) {
    await appendSheetData(SHEET_ID, RANGE, Object.values(partner));
  },
};
