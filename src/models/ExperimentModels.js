import { getSheetData, appendSheetData } from "../database/sheetSync.js";

const SHEET_ID = process.env.EXPERIMENT_SHEET_ID;
const RANGE = "Experiments!A:E";

export const ExperimentModel = {
  async getAll() {
    const data = await getSheetData(SHEET_ID, RANGE);
    return data.slice(1).map(([id, title, researcher, result, link]) => ({
      id, title, researcher, result, link
    }));
  },
  async add(exp) {
    await appendSheetData(SHEET_ID, RANGE, Object.values(exp));
  },
};
