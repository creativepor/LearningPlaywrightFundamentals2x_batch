// created this file to check if the test-data.ts file is working

import TestData from "../Data/test-data";

const makeAppntTestData = TestData.makeAppointmentTestData();
//Access the data

 for (const appData of makeAppntTestData) {
    console.log(`>> Test data: ${JSON.stringify(appData)}`);
 }