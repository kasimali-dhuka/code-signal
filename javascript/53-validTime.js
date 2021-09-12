function validTime(time) {
  const valid_time = time.split(":");

  if (valid_time.length > 2) {
    return false;
  }

  if (valid_time[0] > 23 || valid_time[1] > 59) {
    return false;
  }

  return true;
}
