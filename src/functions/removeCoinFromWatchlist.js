import { toast } from "react-toastify";

export function removeCoinFromWatchlist(coinId) {
    if(window.confirm('Are you sure you want to remove ' + coinId + " from watch list?")){

        let list = localStorage.getItem("watchList");
        if(list){
            let watchlist = JSON.parse(list);
            localStorage.setItem("watchList", JSON.stringify(watchlist.filter(id => id != coinId)))
            toast.success(`${coinId.slice(0,1).toUpperCase() + coinId.slice(1)} was removed from watchlist.`)
        } else {
            alert("No coins present in watch list");
        }
    } else {
        toast.error("Cancelled removing coin from watch list")
    }
}