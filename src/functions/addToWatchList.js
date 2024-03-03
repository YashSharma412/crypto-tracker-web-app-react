export function addtoWatchList(coinId){
  const list = localStorage.getItem("watchList");
  if (list) {
    let watchList = JSON.parse(list);
    if (!watchList.includes(coinId)) {
      watchList.push(coinId);
      localStorage.setItem("watchList", JSON.stringify(watchList));
    } else {
      alert("coin already present in watchList");
      return;
    }
  } else {
    localStorage.setItem("watchList", JSON.stringify([coinId]));
  }
  alert("Coin " + coinId + " added to watchList");
  return;
}