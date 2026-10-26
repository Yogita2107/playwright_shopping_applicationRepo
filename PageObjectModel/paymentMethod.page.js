class paymentMethod{
    
    constructor(page){

        this.codRadio = page.locator('//input[@value="COD"]')
        this.internetRadio = page.locator('//input[@value="Internet Banking"]')
        this.debitCreditRadio = page.locator('//input[@value="Debit / Credit card"]')
        this.submitButton = page.locator('//input[@value="submit"]')

        this.paymentHeading = page.getByRole('heading', {
            name: 'CHOOSE PAYMENT METHOD'
        })
    }
}
export default paymentMethod