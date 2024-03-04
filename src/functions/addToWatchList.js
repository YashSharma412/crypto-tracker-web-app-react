import { toast } from "react-toastify";

export function addtoWatchList(coinId){
  const list = localStorage.getItem("watchList");
  if (list) {
    let watchList = JSON.parse(list);
    if (!watchList.includes(coinId)) {
      watchList.push(coinId);
      localStorage.setItem("watchList", JSON.stringify(watchList));
      toast.success(`${coinId.slice(0, 1).toUpperCase() + coinId.slice(1)} added to watch list!`)
    } else {
      toast.error("coin already present in watchList");
      return;
    }
  } else {
    localStorage.setItem("watchList", JSON.stringify([coinId]));
  }
  return;
}