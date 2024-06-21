const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349161392844";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDM3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDQsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY3LFxuICAgICAgICA2MixcbiAgICAgICAgODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMixcbiAgICAgICAgMTgyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYzLFxuICAgICAgICA2OCxcbiAgICAgICAgODQsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUWNOZDM3NjlUelNERFdEWm43bkk3RVg3dERXUG52c0hiQWg3VSs0NVcwbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTYxMzkyODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCNjIzMDQ0MUFDMzE1MUUxMzQ4QUMzN0ZEMzJFNERGMVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5OTE0MTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTYxMzkyODQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3RDAyMjZDOEEyRTQxNzA5Q0Q4Mjg2NEY5N0YzQzZFRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg5OTE0MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSmZRS3BmYUpUblM1QjVRMllKc1JnZ1wiLFxuICBcInBob25lSWRcIjogXCI2OWM1ZGVjOC0zZTBmLTRlNzgtYTMyZS0yNzE4ZGFhNzE1ZDZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgMTA0LFxuICAgICAgMTU2LFxuICAgICAgMTIsXG4gICAgICA2OSxcbiAgICAgIDIzMixcbiAgICAgIDIsXG4gICAgICAyNDYsXG4gICAgICAxNDYsXG4gICAgICA2MCxcbiAgICAgIDI0OCxcbiAgICAgIDE2LFxuICAgICAgMzUsXG4gICAgICAyMzYsXG4gICAgICAyMjAsXG4gICAgICAxMjQsXG4gICAgICA5MSxcbiAgICAgIDIxNCxcbiAgICAgIDEyMSxcbiAgICAgIDkzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMTA5LFxuICAgICAgODgsXG4gICAgICA0NSxcbiAgICAgIDYsXG4gICAgICAxMyxcbiAgICAgIDE3LFxuICAgICAgMTAyLFxuICAgICAgNDQsXG4gICAgICA3MSxcbiAgICAgIDIwNSxcbiAgICAgIDE5OSxcbiAgICAgIDEzNyxcbiAgICAgIDEwNCxcbiAgICAgIDIzMSxcbiAgICAgIDI0NyxcbiAgICAgIDExNCxcbiAgICAgIDMwLFxuICAgICAgMTczLFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1DNjlWWFZKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYxMzkyODQ0OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPYmlkaWEgT255ZWtzXCIsXG4gICAgXCJsaWRcIjogXCIxNjIwMzIwNzA0MzkwMzg6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQMldpYndIRUxQMDFyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhHWndMK2FXbkdlenZGT0NLNWFqTGExZ2xMK1grdDFPaTNPZEJ6VnpLbU09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmllUHl4UkJnZzVEYTdVcHdRQllRUHZSYi9sZnV3VGtLVnRURzJDRjR6SkczM3Zwa1htOWsyS3NadmpQbVhPZ1FkOVRZeVcwWHoxdFFXUEhuZlBDQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMU9lbHlLSCtSbGp1OXAyeXdDa2ozdEZIbkpYSVhSc3lNVUpkWVk0aElvaklmNjhUWUZGWEVGcVcvLzlrYUxaT20xbDREZGNkT1RQTlN0dWhYUWVaQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2MTM5Mjg0NDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODk5MTQxNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1lbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTWVsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGt4ZGtwNGl0TEs0TjNHS0kwQW9HVzh3NU9lTDUvc3g5a2Z0WWdvTzNLZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA1MDI3NzA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg5OTE0MTc2ODFcIn0iCn0"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
