import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';

const Homepage = () => {
	const [input, setInput] = useState('');
	let [data, setData] = useState(null);
	let [page, setPage] = useState(1);
	const auth = '563492ad6f917000010000018f6dc316c460487280d93eb9ede37f27';
	const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
	const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
	const search = async (url) => {
		setPage(2);
		const dataFetch = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: auth,
			},
		});
		let parsedData = await dataFetch.json();
		setData(parsedData.photos);
	};

	// Load more Picture
	const morePicture = async () => {
		let newURL = '';
		if (input === '') {
			newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
		} else {
			newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
		}
		setPage(page + 1);
		const dataFetch = await fetch(newURL, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: auth,
			},
		});
		let parsedData = await dataFetch.json();
		setData(data.concat(parsedData.photos));
	};
	useEffect(() => {
		search(initialURL);
	}, []);

	return (
		<div style={{ minHeight: '100vh' }}>
			<Search
				search={() => {
					search(searchURL);
				}}
				setInput={setInput}
			/>
			<div className="pictures">
				{data &&
					data.map((d) => {
						return <Picture data={d} />;
					})}
			</div>
			<div className="morePictures">
				<button onClick={morePicture}>Load More</button>
			</div>
		</div>
	);
};

export default Homepage;
