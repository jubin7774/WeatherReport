# Weather Report API 

## Description

```sh
Api to get the weather report based on longitude and latitude. It will 'return' the current and daily weather report with temperature, humidity, air pressure, rainy, cloudy etc

```

## Api(http://localhost:8081/api/weather/getReport/:latitude/:longitude) response

```sh
URL- http://localhost:8081/api/weather/getReport/{latitude}/{longitude}
Method-Type: GET
Response: {
    "current":{
    "sunrise": "",
    "sunset": "",
    "temp": "",
    "humidity": "",
    "clouds": "",
    "wind_speed": "",
    "weather": [
        {
            "id": "",
            "main": "",
            "description": "",
            "icon": ""
        }
    ]
},
"daily":[{
    "sunrise": "",
    "sunset": "",
    "temp": {

    },
    "humidity": "",
    "clouds": "",
    "wind_speed": "",
    "weather": [
        {
            "id": "",
            "main": "",
            "description": "",
            "icon": ""
        }
    ]
}]
}
```


## Frontend Installation

Step: 1

```sh
cd UI
```

Step: 2

```sh
npm install
```

Step 3:

```sh
npm start
```
