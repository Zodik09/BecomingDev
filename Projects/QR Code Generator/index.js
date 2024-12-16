/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from '@inquirer/prompts';
import qr from "qr-image";
import fs from "fs";

const URL = await input({ message: 'Generate the QR Code of this link: ' });
const fileName = await input({ message: 'QR Code file name: ' });
const fileType = await input({ message: 'QR Code file type (e.g., png, pdf, svg, eps): ' });
 
var qrCode = qr.image(URL, { type: fileType, margin: 1 });
qrCode.pipe(fs.createWriteStream(`${fileName}.${fileType}`));
 
var qrCodeString = qr.imageSync(URL, { type: fileType });