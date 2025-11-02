import { getSheetData, appendSheetData } from "../database/sheetSync.js";

const SHEET_ID = process.env.PRODUCT_SHEET_ID;
const RANGE = "Products!A:E";

export const ProductModel = {
  async getAll() {
    const data = await getSheetData(SHEET_ID, RANGE);
    return data.slice(1).map(([id, name, desc, link, status]) => ({
      id, name, desc, link, status
    }));
  },
  async add({ id, name, desc, link, status }) {
    await appendSheetData(SHEET_ID, RANGE, [id, name, desc, link, status]);
  },
};
