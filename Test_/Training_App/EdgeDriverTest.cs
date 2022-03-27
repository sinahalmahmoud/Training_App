using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Support.UI;
using System;

namespace Training_App
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = @"C:\Users\Firas\Downloads";
        private const string bradUrl = "http://127.0.0.1:5501/index.html";
        private EdgeDriver browser;

        // This is run before each test.
        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            // We want to go to the same URL for all tests.
            browser.Url = bradUrl;
        }

        [TestMethod]
        public void CheckPageTitle()
        {
            // Check the page title.
            Assert.AreEqual("Traning App", browser.Title);
        }

        [TestMethod]
        public void CheckArms()
        {
            var btn = browser.FindElementsByCssSelector("button");
            var armsparagraf = browser.FindElementsByClassName("parmss");
            btn[1].Click();
            var root = browser.FindElementByCssSelector("html");
            Assert.IsTrue(root.Text.Contains("Arms"));
        }

        [TestMethod]
        public void CheckNoTraining()
        {

            var btn = browser.FindElementsByCssSelector("button");
            ///var armsparagraf = browser.FindElementsByClassName("parmss");
            btn[5].Click();
            
            var root = browser.FindElementByCssSelector("html");
            Assert.IsTrue(root.Text.Contains("Hello you bairnd in all workouts0 kcal"));
        }

        [TestMethod]
        public void CheckArmsCounter()
        {
            var btn = browser.FindElementsByCssSelector("button");
            var armsparagraf = browser.FindElementsByClassName("parmss");
            btn[1].Click();
            var btnn = browser.FindElementsByCssSelector("button");
            btnn[5].Click();
            var wait = new WebDriverWait(browser, TimeSpan.FromSeconds(5));
            var root = browser.FindElementByCssSelector("html");
            wait.Until(b => root.Text.Contains("you trained:4 sec"));
            btnn[6].Click();
            btnn[8].Click();
            Assert.IsTrue(root.Text.Contains("0.6666666666666666"));
        }



    }
}
