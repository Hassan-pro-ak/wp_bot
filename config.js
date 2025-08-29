const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS05ZVHJFUXNvVkJrOG50RFdicWJ0RUJQdWYwOWZrOTZSY25EQUY1dXNIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGtQRzRtSStVTWhJaU1sQWFFaFMzYjdEMmlzYk05UjhrY1MrV3lIbDUzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSUV1WTV3L1ZoZW0zMUQyZHdlZnpqaG54VnlucTRvaGNlRm94RTZjK1hFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJISUd6czByVFFCRkx5Y1A0S2NyOVVwSG5jbG1LeWdlZ0N5T1E4ek5NK2xnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRDT0FXOFE1cXkzbHE4Rk5MVlpqc0VSOEpWMWdhR1ozdGR6R2pvVE9EVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRlWFJkRngzNzVqU1VNeTdyMkU3SHUra2lJN3NyQVVlQVd5eTU4dTVOUWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNLUm53eGpsQWdYK3RwbStjRzd0anJSSjlRTGpRUnpxa3dzZDZjb2dHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmhNcXhKbE8wSzV0WDlVblJyTFVxeCsrUXk4QVBIV2lPRmt1bDZVcFdtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMvWFA0TS9kaEVOblo4ZmtrWEliUVF1QThJQnAyYUFmQ3JoVWFNMklJVXZFc29hZVNpSW94K3Rxc3R1SlU4QlNaYlRWMVdFS1p3a1JnVDRkY2YrVEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM4LCJhZHZTZWNyZXRLZXkiOiJFU2N4VXk3a0tOWkhLWW5uZ3hxRklUTWx2Mkg3NGhyTFE0Tm85QWlFRHRnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkzNzY1NDQwMzgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQyRDE4RUJBQjJCMjM0RDZGQTJFMTE1QTBCODIzQjREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY1MDMxMDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkzNzY1NDQwMzgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQyRTI2ODM1QjMzQzE1RkZGMjYxQTdGODNFMDIzMDREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY1MDMxMTB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkzNzY1NDQwMzgyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjJENEVBNjU3OTg0NTk1RUI3MzEwOTU0QjcyNUQ4NzREIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY1MDMxMTJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkZHMllSTDlYIiwibWUiOnsiaWQiOiI5Mzc2NTQ0MDM4MjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkITwnZCn8J2QnPCdkKvwnZCy8J2QqfCdkK3wnZCe8J2QnSDwnZCV8J2QovCdkJvwnZCeIiwibGlkIjoiMTI5Mjg3NzU5OTA0OTUzOjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMMkQrSjBIRU1DNHlNVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoeGRxOWlhRUQzNXRiWVVYK0s4UHFzb203OXNkMXFONTNpdVU1aGR3ZmpJPSIsImFjY291bnRTaWduYXR1cmUiOiJ4NElUZFd2QzF4SW1sbGoxN1lVVU9PUHg5ajZZYTI4WE5hZEZQRVpYSE41akUwS0d3ekduV2s0dEc2Rml3MGxOR3pnYkVkWThjc1VabThubDZLUFFCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlpFWERrV3lQY21KOFk3U3JUSGtlWmR5Z1RSOTg5NXdQdUhEWVFHL3B1UWdEeXlDRkhSTTJzdFczV1hxNEtXMlpoa0swbXk4eklqMHMycVpnWXhrQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5Mzc2NTQ0MDM4MjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlljWGF2WW1oQTkrYlcyRkYvaXZENnJLSnUvYkhkYWplZDRybE9ZWGNINHkifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NjUwMzEwOCwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFIKyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐒𝐲𝐜𝐡𝐨_𝐁𝐨𝐭",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
