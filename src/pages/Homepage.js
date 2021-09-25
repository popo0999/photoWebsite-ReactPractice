import React, { useState } from 'react';

import Search from '../components/Search';

const homepage = () => {
	const [(input, setInput)] = useState('');
	const auth = '563492ad6f917000010000018f6dc316c460487280d93eb9ede37f27';
	const initialURL = 'https://api.pexels.com/v1/curated?page=1&per_page=15';
	const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
	return (
		<div style={{ minHeight: '100vh' }}>
			<Search />
		</div>
	);
};

export default homepage;
