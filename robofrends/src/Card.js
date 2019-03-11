import React from 'react';

const Card = ({ name, email, username, id }) => {
	return (
		<div className="bg-purple dib br4 pa3 ma2 grow bw1 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h3>{name} </h3>
				<h3>{email}</h3>
				<h3>{username}</h3>
			</div>
		</div>
	);
};
export default Card;
