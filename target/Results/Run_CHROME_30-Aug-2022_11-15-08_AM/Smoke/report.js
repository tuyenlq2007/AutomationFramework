$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExportWeatherData.feature");
formatter.feature({
  "line": 2,
  "name": "Export Weather Data",
  "description": "As a user\r\nI want to extract Singapore weather data based on selected timeframe",
  "id": "export-weather-data",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ExportWeatherData"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "SWD_01 - Export weather data into test report",
  "description": "",
  "id": "export-weather-data;swd-01---export-weather-data-into-test-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@SWD_01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user launches application under test",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\"FORECAST_PAGE\" shows up",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#When user clicks on menu following orders \"Weather \u003e Yesterday/Past Weather\""
    }
  ],
  "line": 11,
  "name": "user clicks on \"FORECAST_PAGE_PAST_WEATHER_LINK\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "\"PAST_WEATHER_PAGE\" shows up",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "\"PAST_WEATHER_PAGE_WEATHER_LINKS_AREA\" is present",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select \"PAST_WEATHER_PAGE_SELECT_MONTH_DROPDOWN\" as \"\u003ctimeframe\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user export weather data into test report",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "export-weather-data;swd-01---export-weather-data-into-test-report;",
  "rows": [
    {
      "cells": [
        "timeframe"
      ],
      "line": 18,
      "id": "export-weather-data;swd-01---export-weather-data-into-test-report;;1"
    },
    {
      "cells": [
        "Past 2 Weeks"
      ],
      "line": 19,
      "id": "export-weather-data;swd-01---export-weather-data-into-test-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1484333,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "SWD_01 - Export weather data into test report",
  "description": "",
  "id": "export-weather-data;swd-01---export-weather-data-into-test-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ExportWeatherData"
    },
    {
      "line": 6,
      "name": "@SWD_01"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user launches application under test",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "\"FORECAST_PAGE\" shows up",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#When user clicks on menu following orders \"Weather \u003e Yesterday/Past Weather\""
    }
  ],
  "line": 11,
  "name": "user clicks on \"FORECAST_PAGE_PAST_WEATHER_LINK\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "\"PAST_WEATHER_PAGE\" shows up",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "\"PAST_WEATHER_PAGE_WEATHER_LINKS_AREA\" is present",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select \"PAST_WEATHER_PAGE_SELECT_MONTH_DROPDOWN\" as \"Past 2 Weeks\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user export weather data into test report",
  "keyword": "Then "
});
formatter.match({
  "location": "CommonSteps.userLaunchesApplicationUnderTest()"
});
formatter.result({
  "duration": 11254709541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FORECAST_PAGE",
      "offset": 1
    }
  ],
  "location": "CommonSteps.pageShowUp(String)"
});
formatter.result({
  "duration": 3444285125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FORECAST_PAGE_PAST_WEATHER_LINK",
      "offset": 16
    }
  ],
  "location": "CommonSteps.userClicksOnElement(String)"
});
formatter.result({
  "duration": 10927852458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PAST_WEATHER_PAGE",
      "offset": 1
    }
  ],
  "location": "CommonSteps.pageShowUp(String)"
});
formatter.result({
  "duration": 684072416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PAST_WEATHER_PAGE_WEATHER_LINKS_AREA",
      "offset": 1
    }
  ],
  "location": "CommonSteps.elementIsPresent(String)"
});
formatter.result({
  "duration": 175058458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PAST_WEATHER_PAGE_SELECT_MONTH_DROPDOWN",
      "offset": 13
    },
    {
      "val": "Past 2 Weeks",
      "offset": 58
    }
  ],
  "location": "CommonSteps.user_select_as(String,String)"
});
formatter.result({
  "duration": 77433500,
  "status": "passed"
});
formatter.match({
  "location": "CommonSteps.user_export_weather_data_into_test_report()"
});
formatter.write("----------Past Weather in Singapore — Graph----------");
formatter.write("dateTime \u003d Tuesday, 30 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 27 / 25 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 88%");
formatter.write("barometer \u003d 1009 mbar");
formatter.write("windDesc(1) \u003d SW");
formatter.write("windDesc(2) \u003d 4 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Monday, 29 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 26 / 25 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 85%");
formatter.write("barometer \u003d 1008 mbar");
formatter.write("windDesc(1) \u003d N");
formatter.write("windDesc(2) \u003d 0 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Sunday, 28 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 25 / 25 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 94%");
formatter.write("barometer \u003d 1009 mbar");
formatter.write("windDesc(1) \u003d NW");
formatter.write("windDesc(2) \u003d 1 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Saturday, 27 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 25 / 24 °C");
formatter.write("tempDesc(2) \u003d Fog.");
formatter.write("humidity \u003d 93%");
formatter.write("barometer \u003d 1010 mbar");
formatter.write("windDesc(1) \u003d ENE");
formatter.write("windDesc(2) \u003d 1 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Friday, 26 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 26 / 26 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 94%");
formatter.write("barometer \u003d 1008 mbar");
formatter.write("windDesc(1) \u003d NNE");
formatter.write("windDesc(2) \u003d 2 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Thursday, 25 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 27 / 26 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 85%");
formatter.write("barometer \u003d 1008 mbar");
formatter.write("windDesc(1) \u003d S");
formatter.write("windDesc(2) \u003d 7 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Wednesday, 24 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 25 / 25 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 94%");
formatter.write("barometer \u003d 1010 mbar");
formatter.write("windDesc(1) \u003d WSW");
formatter.write("windDesc(2) \u003d 0 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Tuesday, 23 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 28 / 28 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 79%");
formatter.write("barometer \u003d 1010 mbar");
formatter.write("windDesc(1) \u003d SE");
formatter.write("windDesc(2) \u003d 7 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Monday, 22 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 27 / 27 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 78%");
formatter.write("barometer \u003d 1009 mbar");
formatter.write("windDesc(1) \u003d SSW");
formatter.write("windDesc(2) \u003d 13 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Sunday, 21 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 26 / 24 °C");
formatter.write("tempDesc(2) \u003d Thunderstorms. Passing clouds.");
formatter.write("humidity \u003d 91%");
formatter.write("barometer \u003d 1009 mbar");
formatter.write("windDesc(1) \u003d W");
formatter.write("windDesc(2) \u003d 8 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Saturday, 20 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 28 / 26 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 82%");
formatter.write("barometer \u003d 1009 mbar");
formatter.write("windDesc(1) \u003d S");
formatter.write("windDesc(2) \u003d 7 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Friday, 19 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 29 / 28 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 73%");
formatter.write("barometer \u003d 1009 mbar");
formatter.write("windDesc(1) \u003d SE");
formatter.write("windDesc(2) \u003d 8 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Thursday, 18 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 29 / 27 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 78%");
formatter.write("barometer \u003d 1009 mbar");
formatter.write("windDesc(1) \u003d SSE");
formatter.write("windDesc(2) \u003d 8 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Wednesday, 17 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 27 / 26 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 88%");
formatter.write("barometer \u003d 1010 mbar");
formatter.write("windDesc(1) \u003d SSE");
formatter.write("windDesc(2) \u003d 1 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Tuesday, 16 August 2022, 00:00 — 06:00");
formatter.write("tempDesc(1) \u003d 28 / 26 °C");
formatter.write("tempDesc(2) \u003d Passing clouds.");
formatter.write("humidity \u003d 83%");
formatter.write("barometer \u003d 1010 mbar");
formatter.write("windDesc(1) \u003d NNE");
formatter.write("windDesc(2) \u003d 2 km/h");
formatter.write("------------------------------------");
formatter.write("dateTime \u003d Monday, 15 August 2022, 06:00 — 12:00");
formatter.write("tempDesc(1) \u003d 31 / 30 °C");
formatter.write("tempDesc(2) \u003d Thundershowers. Scattered clouds.");
formatter.write("humidity \u003d 68%");
formatter.write("barometer \u003d 1010 mbar");
formatter.write("windDesc(1) \u003d S");
formatter.write("windDesc(2) \u003d 16 km/h");
formatter.write("------------------------------------");
formatter.result({
  "duration": 57196545250,
  "status": "passed"
});
formatter.write("-\u003e Browser: CHROME");
formatter.write("-\u003e TestData: N/A");
formatter.after({
  "duration": 5111791,
  "status": "passed"
});
});