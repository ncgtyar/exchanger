function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = amount * exchangeRate;
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Error fetching exchange rate:', error));
}

function scrollToSelected(selectElement) {
    const selectedIndex = selectElement.selectedIndex;
    const optionHeight = selectElement.options[selectedIndex].offsetHeight;
    selectElement.scrollTop = selectedIndex * optionHeight - (selectElement.clientHeight / 2 - optionHeight / 2);
}
