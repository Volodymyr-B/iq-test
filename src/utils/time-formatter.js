export const numToTime = (num) => {
  if (num === 0) return num;
  else {
    const minutes = Math.floor(num / 60);
    const seconds = num % 60;
    return minutes + ":" + seconds;
  }
};
