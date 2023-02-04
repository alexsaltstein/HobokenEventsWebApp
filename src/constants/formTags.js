const foodTags = [
    {value: 'brunch', label: 'Brunch'},
    {value: 'lunch', label: 'Lunch'},
    {value: 'dinner', label: 'Dinner'},
    {value: 'apps', label: 'Apps'},
]
const drinkTags = [
  {value: 'drinks', label: 'Drinks'},
  {value: 'cocktails', label: 'Cocktails'},
]
const eventTags = [
  {value: 'trivia', label: 'Trivia'},
]
const entertainmentTags = [
  {value: 'comedy', label: 'Comedy'},
  {value: 'music_Live', label: 'Music: Live'},
  {value: 'music_DJ', label: 'Music: DJ'},
]

export const groupedTags = [
  {
    label: "Food",
    options: foodTags,
  },
  {
    label: "Drinks",
    options: drinkTags,
  },
  {
    label: "Event",
    options: eventTags,
  },
  {
    label: "Entertainment",
    options: entertainmentTags,
  },
]