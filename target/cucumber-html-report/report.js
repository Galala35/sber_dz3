$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/HomeGuardTest.feature");
formatter.feature({
  "id": "тестирование-страницы-\"защита-дома\"",
  "description": "",
  "name": "Тестирование страницы \"Защита дома\"",
  "keyword": "Функционал",
  "line": 3,
  "comments": [
    {
      "value": "# language: ru",
      "line": 1
    }
  ]
});
formatter.before({
  "duration": 66176384792,
  "status": "passed"
});
formatter.scenario({
  "id": "тестирование-страницы-\"защита-дома\";проверка-наличия-информации-на-странице",
  "tags": [
    {
      "name": "@testphones",
      "line": 5
    }
  ],
  "description": "",
  "name": "проверка наличия информации на странице",
  "keyword": "Сценарий",
  "line": 6,
  "type": "scenario"
});
formatter.step({
  "name": "пользователь находится на странице \"http://www.sberbank.ru/\"",
  "keyword": "Дано ",
  "line": 7
});
formatter.step({
  "name": "пользователь вводит в поле \"Поиск\" значение \"Защита дома\" и нажимает кнопку \"Enter\"",
  "keyword": "Когда ",
  "line": 8
});
formatter.step({
  "name": "пользователь открывает ссылку \"«Сбербанк» - Защита дома\"",
  "keyword": "И ",
  "line": 9
});
formatter.step({
  "name": "открывается страница \"Программа страхования Защита дома\"",
  "keyword": "Тогда ",
  "line": 10
});
formatter.step({
  "name": "страница содержит информацию",
  "keyword": "И ",
  "line": 11,
  "rows": [
    {
      "cells": [
        "900"
      ],
      "line": 12
    },
    {
      "cells": [
        "8 (800) 555 55 57"
      ],
      "line": 13
    },
    {
      "cells": [
        "8 (800) 555-55-50"
      ],
      "line": 14
    },
    {
      "cells": [
        "+7 (495) 500-55-50"
      ],
      "line": 15
    }
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.sberbank.ru/",
      "offset": 36
    }
  ],
  "location": "CommonSteps.i_am_on_main(String)"
});
formatter.result({
  "duration": 29891515031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Поиск",
      "offset": 28
    },
    {
      "val": "Защита дома",
      "offset": 45
    },
    {
      "val": "Enter",
      "offset": 77
    }
  ],
  "location": "CommonSteps.i_search(String,String,String)"
});
formatter.result({
  "duration": 3261398178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "«Сбербанк» - Защита дома",
      "offset": 31
    }
  ],
  "location": "CommonSteps.i_click_link(String)"
});
formatter.result({
  "duration": 12727941182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Программа страхования Защита дома",
      "offset": 22
    }
  ],
  "location": "CommonSteps.i_am_open_homeguard(String)"
});
formatter.result({
  "duration": 20066735776,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.i_seek_phones(DataTable)"
});
formatter.result({
  "duration": 154619158200,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[contains(text(),\\\"8 (800) 555-55-50\\\")]\"}\nCommand duration or timeout: 150.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027comp\u0027, ip: \u002710.37.122.214\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_67\u0027\n*** Element info: {Using\u003dxpath, value\u003d.//*[contains(text(),\"8 (800) 555-55-50\")]}\nSession ID: 8e5ee480-9104-4872-99d5-ed7aeb75b51a\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dWINDOWS, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, browserName\u003dfirefox, handlesAlerts\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, rotatable\u003dfalse, locationContextEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue, version\u003d33.0.2}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:57)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:526)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sber.dz.dz3.steps.CommonSteps.i_seek_phones(CommonSteps.java:89)\r\n\tat ✽.И страница содержит информацию(features/HomeGuardTest.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[contains(text(),\\\"8 (800) 555-55-50\\\")]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027comp\u0027, ip: \u002710.37.122.214\u0027, os.name: \u0027Windows XP\u0027, os.arch: \u0027x86\u0027, os.version: \u00275.1\u0027, java.version: \u00271.7.0_67\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/DOCUME~1/9335~1/LOCALS~1/Temp/anonymous4774146570251254685webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10770)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/DOCUME~1/9335~1/LOCALS~1/Temp/anonymous4774146570251254685webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:625)\r\n"
});
});