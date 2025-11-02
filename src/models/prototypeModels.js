import { getSheetData, appendSheetData } from "../database/sheetSync.js";

const SHEET_ID = process.env.PROTOTYPE_SHEET_ID;
const RANGE = "Prototypes!A:D";

export const PrototypeModel = {
  async getAll() {
    const data = await getSheetData(SHEET_ID, RANGE);
    return data.slice(1).map(([id, title, link, status]) => ({ id, title, link, status }));
  },
  async add(prototype) {
    await appendSheetData(SHEET_ID, RANGE, Object.values(prototype));
  },
};
