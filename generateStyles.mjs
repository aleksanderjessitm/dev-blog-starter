
import fs from 'node:fs/promises';
import process from "node:process";
import {config} from "./config.mjs";

const styles = `
$main-color: ${config.mainColor};
$secondary-color: ${config.secondaryColor};
$tertiary-color: ${config.tertiaryColor};
$error-color: ${config.errorColor};
$background-color: ${config.backgroundColor};
$text-color: ${config.textColor};
$text-color__tint: adjust-color($text-color, $lightness: 30%);
$text-color__shade: adjust-color($text-color, $lightness: -30%);
$main-color__tint: adjust-color($main-color, $lightness: 30%);
$main-color__shade: adjust-color($main-color, $lightness: -30%);
$secondary-color__tint: adjust-color($secondary-color, $lightness: 30%);
$secondary-color__shade: adjust-color($secondary-color, $lightness: -30%);
$tertiary-color__tint: adjust-color($tertiary-color, $lightness: 30%);
$tertiary-color__shade: adjust-color($tertiary-color, $lightness: -30%);
$error-color__tint: adjust-color($error-color, $lightness: 30%);
$error-color__shade: adjust-color($error-color, $lightness: -30%);
$background-color__shade: adjust-color($background-color,$lightness: -35%);
`


fs.writeFile("./src/styles/variables.scss", styles).then(() => { console.info("The styles have succesfully been written") })
    .catch(() => { console.error(message => { console.error("There was an error writing styles to the disk \n" + message); process.exit(1) }) })