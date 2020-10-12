const assert = require("assert");
describe("Test Automation ", function() {
    it("Test script", function() {
        browser.url("http://automationpractice.com/index.php");
        
		//browser.pause(5000);
       //******************** */
		//Signin page
		//******************** */
		//Click Signin
		const signinlink = $("//*[@id='header']/div[2]/div/div/nav/div[1]/a");
		signinlink.waitForExist(4000);
		signinlink.click();
		//Enter Email address
		const emailid = $("//*[@id='email_create']");
		emailid.waitForExist(4000);
		$("//*[@id='email_create']").setValue("test.t51@test123.com");//sriram.sri121@gmail.com");
		//Click on Create Account
		const myElem=$("//*[@id='SubmitCreate']");	
		myElem.waitForExist(4000);
		myElem.click();

		//******************** */
		//Register page
		//******************** */
		//Title
		const myElem1=$("//*[@id='id_gender1']");
		myElem1.waitForExist(20000);
		$("//*[@id='id_gender1']").click();
		browser.setTimeout({ 'implicit': 5000 });
		//browser.pause(5000);
		//First name *
		$("//*[@id='customer_firstname']").setValue("sriram");browser.setTimeout({ 'implicit': 5000 });
		//Last name *
		$("//*[@id='customer_lastname']").setValue("srinivasan");browser.setTimeout({ 'implicit': 5000 });
		//Password *
		$("//*[@id='passwd']").setValue("srisri123");//browser.pause(7000);
		browser.setTimeout({ 'implicit': 5000 });
		//Date of Birth
		const selectBox1 = $("//*[@id='days']");
		selectBox1.selectByIndex(4);
    	//selectBox1.selectByAttribute('value', '27');
		//browser.pause(3000);
		browser.setTimeout({ 'implicit': 5000 });
		const selectBox2 = $("//*[@id='months']");
    	selectBox2.selectByIndex(10);//selectByAttribute('value', '10');
		browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		const selectBox3 = $("//*[@id='years']");
    	selectBox3.selectByIndex(12);//selectByAttribute('value', '1982');
		//browser.pause(5000);
		browser.setTimeout({ 'implicit': 5000 });
		
		//Sign up for our newsletter!
		$("//*[@id='newsletter']").click();
		browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Receive special offers from our partners!
		$("//*[@id='optin']").click();
		browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		
		//First name *
		$("//*[@id='firstname']").setValue("sriram");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Last name *
		$("//*[@id='lastname']").setValue("srinivasan");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Company
		$("//*[@id='company']").setValue("test company");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Address *
		$("//*[@id='address1']").setValue("#325, 4th cross testcity 11");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Address (Line 2)
		$("//*[@id='address2']").setValue("#16, 4th cross testcity 22");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//City *
		$("//*[@id='city']").setValue("Test city123");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//State *
		const selectBox4 = $("//*[@id='id_state']");
    	selectBox4.selectByVisibleText("Georgia");
		browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Zip/Postal Code *
		$("//*[@id='postcode']").setValue("35675");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);		
		//Country *
		const selectBox5 = $("//*[@id='id_country']");
    	selectBox5.selectByIndex(1);
		browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Additional information
		$("//*[@id='other']").setValue("Test additional information");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);	
		//Home phone
		$("//*[@id='phone']").setValue("246523645");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Mobile phone *
		$("//*[@id='phone_mobile']").setValue("67868868");browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Assign an address alias for future reference. *
		$("//*[@id='alias']").setValue("addr alias :: #4564, testcity");//browser.setTimeout({ 'implicit': 5000 });//browser.pause(5000);
		//Submit account
		const subacnt=$("//*[@id='submitAccount']");
		subacnt.waitForExist(8000);
		//subacnt.waitForDisplayed();
		subacnt.click();browser.setTimeout({ 'implicit': 100000 });
		
		
		//Validate on the landing screen - correct name and surname is displayed
		const myElem2 = $('//*[@id="header"]/div[2]/div/div/nav/div[1]/a/span');
		myElem2.waitForExist(8000);
		assert.strictEqual(myElem2.getText(),"sriram srinivasan");
		console.log("Get name :: "+myElem2.getText());
		browser.setTimeout({ 'pageLoad': 10000 });
		
		// Add a product to the cart
		//Click T-Shirt   
		$("//*[@id='block_top_menu']/ul/li[3]/a").click();browser.setTimeout({ 'implicit': 5000 });
		
		
		//Capture TShirtName
		const CartTShirtName=$("//*[@id='center_column']/ul/li/div/div[2]/h5/a").getText();
		console.log("CartTShirtName :: "+CartTShirtName);
		browser.setTimeout({ 'implicit': 5000 });
		
		//Click Add to cart
		$("//*[@id='center_column']/ul/li/div/div[2]/div[2]/a[1]").click();browser.setTimeout({ 'implicit': 5000 });
		
		//Click Proceed to checkout
		$("//*[@id='layer_cart']/div[1]/div[2]/div[4]/a").click();browser.setTimeout({ 'implicit': 5000 });

		//Capture TShirtCost
		const CartTShirtCost=$("//*[@id='total_price']").getText();
		console.log("CartTShirtCost :: "+CartTShirtCost);

		//Click Proceed to checkout
		$("//*[@id='center_column']/p[2]/a[1]").click();browser.setTimeout({ 'implicit': 10000 });
		
		const button1 = $("//*[@id='center_column']/form/p/button");
		button1.waitForExist(4000);
		
		button1.click();
		
		
		//Validate on the payments page if the product details are correct.
		//SHIPPING
		//Terms of service
		$("//*[@id='cgv']").click();browser.setTimeout({ 'implicit': 5000 });
		//Proceed to checkout
		$("//*[@id='form']/p/button").click();browser.setTimeout({ 'implicit': 5000 });

		//************** */
		//payment page
		//************** */
		console.log("Validate on the payments page if the product details are correct.");
		browser.setTimeout({ 'implicit': 5000 });
		const PaymentTShirtName=$("//*[starts-with(@id,'product_1_1')]/td[2]/p/a").getText();
		console.log("PaymentTShirtName :: "+PaymentTShirtName);
		console.log("CartTShirtName :: "+CartTShirtName);
		assert.strictEqual(CartTShirtName,PaymentTShirtName);
		browser.setTimeout({ 'implicit': 5000 });
		let PaymentTShirtCost=$("//*[@id='total_price']").getText();
		console.log("PaymentTShirtCost :: "+PaymentTShirtCost);
		console.log("CartTShirtCost :: "+CartTShirtCost);
		//assert.equal(PaymentTShirtCost,CartTShirtCost);
		assert.strictEqual(PaymentTShirtCost,CartTShirtCost);
		console.log("Check price :: CartTShirtCost :: "+CartTShirtCost);//console.log(CartTShirtCost);
		console.log("Check price :: PaymentTShirtCost :: "+PaymentTShirtCost);//console.log(PaymentTShirtCost);
		
    });
});