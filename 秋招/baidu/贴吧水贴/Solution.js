const sol = (people) => {

  let like = 0;
  let comment = 0;
  for (let item of people) {
    if (item === 1) {
      comment += 1;
    }
    if (item === 2) {
      like += 1;
    }
    if (item === 3) {
      if (like > comment) {
        like++;
      } else if (like < comment) {
        comment++;
      } else {
        like++;
        comment++
      }
    }
  }
  console.log(comment, like);
}

sol([2, 3, 4, 1])