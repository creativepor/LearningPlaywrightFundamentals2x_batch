//This script is to geterate a log which will be displayed in 
// the console/ terminal and will be shown as a message or info in the Allure reports.

import { test } from "@playwright/test";
import chalk from "chalk";

type Level = "log" | "info" | "warn" | "error";

export async function log(level: Level, message: string) {
    const plainLine = `[${level.toUpperCase()}]: ${message}`;  //For Report (Allure/ HTML)
    let colouredLine = plainLine;

    //pick color vased on log level

    switch (level) {
        case "info":
             colouredLine = chalk.blue(plainLine);
             break;
        case "warn":
            colouredLine = chalk.yellow(plainLine);
            break;
        case "error":
            colouredLine = chalk.redBright(plainLine);
            break;
        default:
            colouredLine = chalk.white(plainLine);

    }
    //print coloured text interminal

    (console[level] || console.log)(colouredLine);

    //send plain text to allure

    await test.step(plainLine, async() => {});

}




    
