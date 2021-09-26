import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';

const Homepage = () => {
	const [input, setInput] = useState('');
	let [data, setData] = useState(null);
	const auth = '563492ad6f917000010000018f6dc316c460487280d93eb9ede37f27';
	const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
	const search = async () => {
		const dataFetch = await fetch(initialURL, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: auth,
			},
		});
		let parsedData = await dataFetch.json();
		setData(parsedData.photos);
	};
	useEffect(() => {
		search();
	}, []);
	const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
	return (
		<div style={{ minHeight: '100vh' }}>
			<Search search={search} setInput={setInput} />
			<div className="pictures">
				{data &&
					data.map((d) => {
						return <Picture data={d} />;
					})}
			</div>
		</div>
	);
};

export default Homepage;
