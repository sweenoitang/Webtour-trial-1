var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21509997077059673,
        "pitch": -0.011979126749858793,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.021180977406778823,
          "pitch": -0.24747581554332498,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3156579959680883,
          "pitch": -0.2565631569345115,
          "title": "Welcome to the Faculty of Engineering",
          "text": "Hello there! Join us for a tour of the faculty! :)&nbsp;"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.004553032831289272,
        "pitch": -0.23228634148482108,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -2.570574910100145,
          "pitch": 0.020656783866352058,
          "rotation": 7.853981633974483,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.10323706797431598,
          "pitch": -0.1638189164701167,
          "title": "Students' life",
          "text": "At the atrium where our students meet to socialise over coffee and snacks!&nbsp;"
        },
        {
          "yaw": -1.8689833183649078,
          "pitch": -0.06216500524498869,
          "title": "Need caffeine?",
          "text": "Always good to have coffee!&nbsp;"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.30092384164944264,
        "pitch": -0.2295861502848222,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.05343542039462257,
          "pitch": 0.06442601999771824,
          "rotation": 0,
          "target": "1-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2756625332407445,
          "pitch": 0.06642304904792873,
          "title": "The Atrium&nbsp;",
          "text": "Come on in to check out where our students hang out! :)&nbsp;"
        }
      ]
    }
  ],
  "name": "Workshop Webtour :) ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
