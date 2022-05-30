import React from 'react';

const ListItem = ({ items = [], title }) => {
	return (
		<div className="listItem">
			<h3>{title}</h3>
			<ul>{items.map((item) => <li>{item}</li>)}</ul>
		</div>
	);
};

export default ListItem;
