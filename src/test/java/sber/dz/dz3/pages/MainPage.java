package sber.dz.dz3.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.springframework.stereotype.Component;

@Component
public class MainPage extends Page{

    //@FindBy(xpath = "//input[@placeholder='Поиск']")
    private WebElement search;

    public MainPage(WebDriver driver) {
        super(driver);
    }

    public void searchInput(String key) {
        search.sendKeys(key + "\n");
        search.click();
    }


}

