const url = 'https://stock-and-options-trading-data-provider.p.rapidapi.com/options/aapl';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Proxy-Secret': 'a755b180-f5a9-11e9-9f69-7bf51e845926',
		'X-RapidAPI-Key': '812ab01355mshb18615ce26dcb03p17a103jsn7f3a4e1ed500',
		'X-RapidAPI-Host': 'stock-and-options-trading-data-provider.p.rapidapi.com'
	}
};


try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}


