export const OPEN_TIME_VALUE = "-1";
export const CLOSE_TIME_VALUE = "25";
export const EVENTS_BETWEEN_ADS = 3;
export const INITIAL_FILTER = {
  hobo: false,
  jc: false,
  brunch: false,
  lunch: false,
  dinner: false,
  apps: false,
  cocktails: false,
  drinks: false,
  trivia: false,
  live: false,
  dj: false,
  comedy: false,
  active: false,
};
export const DEAL_QUERY_PARAM = "deal_id";
export const FILTER_VALUES = [
  {
    "Location":[
      {
        val:"hobo",
        label: "Hoboken"
      },
      {
        val:"jc",
        label: "Jersey City"
      }
    ]
  },
  {
    "Food":[
      {
        val:"brunch",
        label: "Brunch"
      },
      {
        val:"lunch",
        label: "Lunch"
      },
      {
        val:"dinner",
        label: "Dinner"
      },
      {
        val:"apps",
        label: "Apps"
      }
    ]
  },
  {
    "Drinks":[
      {
        val:"cocktails",
        label: "Cocktails"
      },
      {
        val:"drinks",
        label: "Other Drinks"
      }
    ]
  },
  {
    "Entertainment": [
      {
        val: "trivia",
        label: "Trivia"
      },
      {
        val: "live",
        label: "Music - Live"
      },
      {
        val: "dj",
        label: "Music - DJ"
      },
      {
        val: "comedy",
        label: "Comedy"
      },      
    ]
  }
]
