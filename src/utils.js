/**
 * Maps api data to each region along with total sum of fat and calories.
 *
 * @param {Array<Object>} data - Array of objects with fish info.
 * @returns {Object<String, Object>} An object mapping each `NOAAFisheriesRegion` to its corresponding data.
 */

const mapToRegions = (data) =>
  data.reduce((acc, fishObj) => {
    const key = fishObj.NOAAFisheriesRegion;
    if (!acc[key]) {
          acc[key] = { fish: [], totalFat: 0, totalCalories: 0 };
      }

    acc[key].fish.push(fishObj);
    if (!!fishObj.FatTotal) acc[key].totalFat += parseFloat(fishObj.FatTotal);
    if (!!fishObj.Calories) acc[key].totalCalories += parseFloat(fishObj.Calories);
    return acc;
  }, {});

export {
  mapToRegions
}
