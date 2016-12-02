package sber.dz.dz3.pages;

/**
 * Created by Администратор on 25.10.16.
 */
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class HomeGuardPage extends Page{

//    public static final String URL = "http://www.sberbank.ru/ru/person/bank_inshure/insuranceprogram/protect_home";

    public HomeGuardPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }


        //http://www.slideshare.net/ssuser500b10/x-path-selenium-web-driver-39369363
        //https://habrahabr.ru/post/114772/
        //http://www.zvon.org/xxl/XPathTutorial/General_rus/examples.html


}

