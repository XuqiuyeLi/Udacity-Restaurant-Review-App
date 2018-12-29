if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then((registration) =>  {
		console.log('Registration worked!');
	})
	.catch((error) =>  {
		console.log('Registration failed!');
	});
}