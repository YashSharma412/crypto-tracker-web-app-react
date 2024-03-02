function getWatchListCoins(ids) {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets';
    const params = new URLSearchParams({
        vs_currency: 'usd', // You can change this to any other fiat or cryptocurrency
        ids: ids.join(',') // Comma-separated list of coin IDs
    });

    const url = `${apiUrl}?${params}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process the data here
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

export default getWatchListCoins
// Example usage
