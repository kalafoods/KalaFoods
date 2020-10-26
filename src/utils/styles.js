// With all the colors and styling created within objects, this file may be used in any projects, as central source for styling
export const colors = {
  // A Color object can hold all teh colors that would be used in the projec
  mainWhite: `#fff`,
  mainBlack: `#262626`,
  mainGold: `#d2aa5c`,
  mainYellow: `#F2AF29`,
  mainGrey: `#474747`,
}
export const textSlanted = `font-family:'Caveat', cursive;`

export const transDefault = "transition:all 0.5s ease-in-out"
export const transFunction = (
  property = "all",
  time = "0.5s",
  type = "linear"
) => {
  return `transition:${property} ${time} ${type}` // These values will be filled up with default val passed into the fn, else would be-
  //- replaced by the values provided by the user, during the function call
}
export const transObject = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const transition = ({
  property = "all",
  time = "0.5s",
  type = "ease-in-out",
}) => {
  return `transition: ${property} ${time} ${type}`
}

export const border = ({
  width = "0.15rem",
  type = "solid",
  color = "white",
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = "0.1rem" }) => {
  return `letter-spacing:${spacing}`
}
