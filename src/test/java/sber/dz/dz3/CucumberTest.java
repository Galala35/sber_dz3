package sber.dz.dz3;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Администратор on 23.10.16.
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty"},
        format = ( "html:target/cucumber-html-report" ),
        features = "classpath:features",
        glue = "sber.dz.dz3.steps",
        tags = {"@testphones"}

)
public class CucumberTest {

}
