const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 4;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 8;
      break;
    case "friday":
      return 5;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 9;
      break;
  }
};

const getActualSleepHours = () =>
  getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    return "You got a perfect amount of sleep!";
  } else if (actualSleepHours > idealSleepHours) {
    return "You got even more sleep than needed!";
  } else if (actualSleepHours < idealSleepHours) {
    return "Get some rest! You got " + (idealSleepHours - actualSleepHours) + " less hours of sleep than needed.";
  }
};

console.log(calculateSleepDebt());
