//Creating a data file for demostrating the Parameterization 

export default class TestData{
    /**
     * Test data Combinations
     * 
     * 1. Dropdown
     * - Tokyo CURA Healthcare Center
     * - Hongkong CURA Healthcare Center
     * - Seoul CURA Healthcare Center
     * 
     * 2. Healthcare Program
     * - Medicare
     * - Medicaid
     * - None
     * 
     * 3. Different Date
     * - 05/08/2026
     * - 05/09/2026
     * - 08/10/2026
     * 
     */

    static makeAppointmentTestData(){
        return [
            {testID: "TC001", facility: "Tokyo CURA Healthcare Center", hcp: "Medicare", visitDt: "05/08/2026"},
            {testID: "TC002", facility: "Hongkong CURA Healthcare Center", hcp: "Medicaid", visitDt: "05/09/2026"},
            {testID: "TC003", facility: "Seoul CURA Healthcare Center", hcp: "None", visitDt: "08/10/2026"}

        ]

    }
}