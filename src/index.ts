const makeExpressCallback = require("makeExpressCallback");
import { WAConnection } from '@adiwajshing/baileys'

import * as fs from 'fs'


async function sendToWhatsApp (id) {
    const conn = new WAConnection() 
await conn.connect() // connect

conn.on ('open', () => {
    // save credentials whenever updated
    console.log (`credentials updated!`)
    const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
    fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})


    await conn.sendMessage (id, 'new test', MessageType.text)

}
// run in main file
sendToWhatsApp ('+96407705344322')
