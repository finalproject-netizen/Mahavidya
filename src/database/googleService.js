// src/database/googleService.js
import fs from "fs";
import { connectGoogle } from "./dbConnect.js";

export const uploadToDrive = async (filePath, folderId) => {
  const { drive } = await connectGoogle();
  const fileMetadata = { name: filePath.split("/").pop(), parents: [folderId] };
  const media = { body: fs.createReadStream(filePath) };
  
  const res = await drive.files.create({
    resource: fileMetadata,
    media,
    fields: "id, webViewLink",
  });

  return res.data.webViewLink;
};
