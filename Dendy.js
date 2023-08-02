describe("Sign up", () => {
    it("Positif Case 1", async () => {
      await driver.$('//android.widget.TextView[@content-desc="wdio demo app"]').click();
      await driver.$('//android.widget.Button[@content-desc="Login"]').click();
      await driver.$('//android.view.ViewGroup[@content-desc="button-sign-up-container"]').click();
      await driver.$('//android.widget.EditText[@content-desc="input-email"]').setValue('example@example.com')
      await driver.$('//android.widget.EditText[@content-desc="input-password"]').setValue('example@example.com')
      await driver.$('//android.widget.EditText[@content-desc="input-repeat-password"]').setValue('example@example.com')
      await driver.$('//android.view.ViewGroup[@content-desc="button-SIGN UP"]').click();
      const alertTitle = await driver.$('android=new UiSelector().resourceId("android:id/alertTitle")');
      expect(await alertTitle.getText()).toBe('Signed Up!');
    });
  });