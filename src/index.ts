import * as fs from "fs";
// const makeExpressCallback = require("makeExpressCallback");
import { WAConnection, MessageType } from "@adiwajshing/baileys";
const conn = new WAConnection();

async function sendToWhatsApp() {
  conn.loadAuthInfo("./auth_info.json"); // will load JSON credentials from file
  conn.on("open", () => {
    // save credentials whenever updated
    console.log(`credentials updated!`);
    const authInfo = conn.base64EncodedAuthInfo(); // get all the auth info we need to restore this session
    fs.writeFileSync("./auth_info.json", JSON.stringify(authInfo, null, "\t")); // save this info to a file
  });
  await conn.connect();

  setInterval(async () => {
    await conn.sendMessage(
      `96407705344322@s.whatsapp.net`,
      "no phone test",
      MessageType.text
    );
  }, 2000);
}
// run in main file
sendToWhatsApp().catch((err) => console.log("unexpected error: " + err)); // catch any errors
