import React from 'react';

const Book = (props) => {
	return (
		<svg focusable="false" viewBox="0 0 24 24" {...props}>
			<path d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16" />
		</svg>
	);
};

export default Book;
