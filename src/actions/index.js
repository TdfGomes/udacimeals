export const ADD_RECIPE           = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'

export function addRecipe({ day, meal, recipe }) {
  return {
    type:ADD_RECIPE,
    day,
    meal,
    recipe
  }
}

export function removeFromCalendar({day, meal}) {
  return {
    type:REMOVE_FROM_CALENDAR,
    day,
    meal
  }
}