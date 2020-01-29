exports.getDate = function() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let today = new Date();

  let currentDay = today.toLocaleDateString("en-US", options);

  return currentDay;
};

exports.getDay = function() {
  const options = {
    weekday: "long"
  };

  let today = new Date();

  let currentDay = today.toLocaleDateString("en-US", options);

  return currentDay;
};
