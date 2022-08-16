const fs = require('node:fs/promises');
const process = require("node:process")
const config = require("./config");

const styles = `
:root {
    $main-color: ${config.mainColor};
    $secondary-color: ${config.secondaryColor};
    $tertiary-color: ${config.tertiaryColor};
    $error-color: ${config.errorColor};
    $background-color: ${config.backgroundColor};
    $text-color: ${config.textColor};
    $main-color__tint: lighten($main-color, 30%);
    $main-color__shade: darken($main-color, 30%);
    $secondary-color__tint: lighten($secondary-color, 30%);
    $secondary-color__shade: darken($secondary-color, 30%);
    $tertiary-color__tint: lighten($tertiary-color, 30%);
    $tertiary-color__shade: darken($tertiary-color, 30%);
    $error-color__tint: lighten($error-color, 30%);
    $error-color__shade: darken($error-color, 30%);
    $background-color__tint: lighten($background-color, 35%);
    $background-color__shade: darken($background-color, 35%);
  }
`


fs.writeFile("./src/styles/variables.scss", styles).then(() => { console.info("The styles have succesfully been written") })
    .catch(() => { console.error(message => { console.error("There was an error writing styles to the disk \n" + message); process.exit(1) }) })