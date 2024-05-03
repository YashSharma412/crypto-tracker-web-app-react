import axios from "axios";

export async function getWatchCoins(){
    const list = localStorage.getItem("watchList");
    if (list && JSON.parse(list).length > 0) {
        const watchlist = JSON.parse(list);
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: watchlist.join(","),
                    x_cg_demo_api_key: "CG-LYJnnBSiMXWPBwADnGqRN4Sq"
                }
            })
            if(response.status !== 200){
                throw new Error('getWatchCoins: Network response was not ok');
            }
            const data = response.data;
            console.log(data);
            return data;
        } catch(e){
            console.error("getWatchCoins: ", e);
            throw new Error("Failed to fetch watchList coins. Please try again later.", error);
        }
    } else {
        return []
    }
}
