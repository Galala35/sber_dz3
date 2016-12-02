package sber.dz.dz3.pages;

/**
 * Created by Администратор on 02.11.16.
 */

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.PageFactory;
import org.springframework.beans.factory.annotation.Autowired;
import javax.annotation.PostConstruct;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class Page {

/*
    @PostConstruct
    public void setUp() {
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }
*/

    //WebDriver driver = new FirefoxDriver();
    WebDriver driver;

    /*public void setUp(){
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }
*/
    public Page(WebDriver driver){
        this.driver = driver;
    }

    public MainPage navigateToHomePage(){
        driver.get("http://www.sberbank.ru");
        return PageFactory.initElements(driver, MainPage.class);
    }

    protected WebElement WE(String xpath, String args) {
        return driver.findElement(By.xpath(String.format(xpath, args)));
    }


    protected final List<WebElement> ListWE(By by) {
        return driver.findElements(by);
    }

/*    protected WebElement $(By by) {
        return driver.findElement(by);
    }
*/
}
// сюда посмотреть http://automated-testing.info/t/webdriver/2077/7, про список элементов
/*
public class SummaryReportsPage {
WebDriver driver;
public SummaryReportsPage(WebDriver driver) {
this.driver = driver;
}
protected final  List <WebElement> findElements(By by) {
return (List<WebElement>) driver.findElements(by);
}
}

 */