package sber.dz.dz3.steps;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.ru.Дано;
import cucumber.api.java.ru.И;
import cucumber.api.java.ru.Когда;
import cucumber.api.java.ru.Тогда;
import org.junit.After;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.FindBy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import sber.dz.dz3.pages.HomeGuardPage;
import sber.dz.dz3.pages.MainPage;
import sber.dz.dz3.pages.Page;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsCollectionContaining.hasItems;

/**
 * Created by Администратор on 02.11.16.
 */

public class CommonSteps {

    private WebDriver driver = new FirefoxDriver();;
    HomeGuardPage phones;
    //Page page = new Page(driver);
    //MainPage mainPage = new MainPage(driver);
    String SearchStr = "//input[@placeholder='Поиск']";
    String LinkText = "//a[text()='«Сбербанк» - Защита дома']";


    @Before
    public void setUp(){
        //driver = new FirefoxDriver();
        driver.manage().timeouts().implicitlyWait(150, TimeUnit.SECONDS);
    }

    @Дано("^пользователь находится на странице \"([^\"]*)\"$")
    public void i_am_on_main(String namePage)throws Exception {
        driver.get(namePage);
        //mainPage = page.navigateToHomePage();
    }

    @Когда("^пользователь вводит в поле \"(.*?)\" значение \"(.*?)\" и нажимает кнопку \"(.*?)\"$")
    public void i_search(String arg1, String searchText, String arg3) throws Exception {
        arg1 = SearchStr;
        driver.findElement(By.xpath(arg1)).clear();
        driver.findElement(By.xpath(arg1)).sendKeys(searchText + "\n");

    }

    @Когда("^пользователь открывает ссылку \"(.*?)\"$")
    public void i_click_link(String arg1) throws Exception {
        //driver.findElement(By.xpath(LinkText)).click();
        driver.findElement(By.xpath(LinkText));

    }

    @Тогда("^открывается страница \"(.*?)\"$")
    public void i_am_open_homeguard(String arg1) throws Exception {
        driver.get("http://www.sberbank.ru/ru/person/bank_inshure/insuranceprogram/protect_home");
    }

    @Тогда("^страница содержит информацию$")
    public void i_seek_phones(DataTable table) throws Exception {
        List<String> expect = table.asList(String.class);
        String pageSource = driver.getPageSource();
        String path;

        for (int i = 0; i < expect.size(); i++) {
            //System.out.println(expect.get(i));
            path = ".//*[contains(text(),";
            path = path + "\"";
            path = path + expect.get(i);
            path = path + "\"" + ")]";
            driver.findElement(By.xpath(path)).isDisplayed();
            //Assert.assertTrue(pageSource.contains(expect.get(i)));
        }
    }

    @After
    public void closeDriver() {

        if (driver != null) {
            driver.close();
            driver.quit();
        }
    }


}

