$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Qtrac.feature");
formatter.feature({
  "line": 2,
  "name": "Qtrac login functionality",
  "description": "",
  "id": "qtrac-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@MobileApp"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Verification of login functionality",
  "description": "",
  "id": "qtrac-login-functionality;verification-of-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@demo"
    },
    {
      "line": 5,
      "name": "@Dev"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open the browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter Username and Password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on speedometer dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "click on Pagebucket dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "QtracStepdef.LoginPage()"
});
formatter.result({
  "duration": 55764702012,
  "status": "passed"
});
formatter.match({
  "location": "QtracStepdef.enterdetails()"
});
formatter.result({
  "duration": 9024777516,
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Could not proxy. Proxy error: Could not proxy command to remote server. Original error: 404 - \"\" (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027QKNBK474\u0027, ip: \u0027172.20.191.241\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: /home/radmin/build/raid-dat..., appActivity: com.qk.q_trac.MainActivity, appPackage: com.qk.q_trac, autoGrantPermissions: true, automationName: uiautomator2, databaseEnabled: false, desired: {app: /home/radmin/build/raid-dat..., appActivity: com.qk.q_trac.MainActivity, appPackage: com.qk.q_trac, autoGrantPermissions: true, automationName: uiautomator2, deviceName: 48, deviceType: phone, noSign: true, pCloudy_ApiKey: jfx5ppmbyng7x8mv2z9hvzqz, pCloudy_ApplicationName: Qtrac.apk, pCloudy_DeviceFullName: Samsung_GalaxyJ4Plus_Androi..., pCloudy_DurationInMinutes: 60, pCloudy_Username: nikita.shinde@qualitykiosk.com, platformName: ANDROID, udid: 879ee013}, deviceApiLevel: 27, deviceManufacturer: samsung, deviceModel: SM-J415F, deviceName: 879ee013, deviceScreenDensity: 280, deviceScreenSize: 720x1480, deviceType: phone, deviceUDID: 879ee013, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, noSign: true, pCloudy_ApiKey: jfx5ppmbyng7x8mv2z9hvzqz, pCloudy_ApplicationName: Qtrac.apk, pCloudy_DeviceFullName: Samsung_GalaxyJ4Plus_Androi..., pCloudy_DurationInMinutes: 60, pCloudy_Username: nikita.shinde@qualitykiosk.com, pixelRatio: 1.75, platform: LINUX, platformName: ANDROID, platformVersion: 8.1.0, statBarHeight: 42, takesScreenshot: true, udid: 879ee013, viewportRect: {height: 1354, left: 0, top: 42, width: 720}, warnings: {}, webStorageEnabled: false}\nSession ID: 91e16b39-9c84-4ad3-8b2a-e8294df71f61\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.listener.EventFiringAppiumCommandExecutor.execute(EventFiringAppiumCommandExecutor.java:150)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:45)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\r\n\tat io.appium.java_client.android.$Proxy37.getTitle(Unknown Source)\r\n\tat com.qaprosoft.carina.demo.utils.PerfEventHandler.afterClickOn(PerfEventHandler.java:39)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$0(EventFiringWebDriver.java:84)\r\n\tat com.sun.proxy.$Proxy36.afterClickOn(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:418)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement$1.doTap(ExtendedWebElement.java:1442)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.executeAction(ExtendedWebElement.java:1266)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.overrideAction(ExtendedWebElement.java:1408)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.doAction(ExtendedWebElement.java:1393)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.doAction(ExtendedWebElement.java:1345)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.click(ExtendedWebElement.java:493)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.click(ExtendedWebElement.java:481)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.click(ExtendedWebElement.java:472)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.clickIfPresent(ExtendedWebElement.java:594)\r\n\tat com.qaprosoft.carina.core.foundation.webdriver.decorator.ExtendedWebElement.clickIfPresent(ExtendedWebElement.java:582)\r\n\tat com.qaprosoft.carina.demo.mobile.gui.pages.android.QtracLoginPage.clickonSignin(QtracLoginPage.java:38)\r\n\tat com.qaprosoft.carina.demo.cucumber.steps.QtracStepdef.enterdetails(QtracStepdef.java:34)\r\n\tat ✽.When Enter Username and Password(src/test/resources/features/Qtrac.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "QtracStepdef.ClickOnLoginBtn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QtracStepdef.clickonspeedometerdashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "QtracStepdef.clickonPagebucketdashboard()"
});
formatter.result({
  "status": "skipped"
});
});