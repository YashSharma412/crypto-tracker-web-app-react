export function isPresentInWatchlist(coinId){
  const list = localStorage.getItem("watchList");
  if (list) {
    const watchlist = localStorage.getItem("watchList");
    if (watchlist.includes(coinId)) {
      return true;
    }
  }
  return false;
}