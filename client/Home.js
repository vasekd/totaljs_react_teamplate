import React, { useContext, useEffect } from "react";

import {State, Dispatch} from './Context';

export function Home() {
	const dispatch = useContext(Dispatch);
	const state = useContext(State);

	useEffect(() => {
		// async data fetching function
		var myHeaders = new Headers();
		myHeaders.append('Accept', 'application/json');
		const fetchQuotes = async () => {
			const response = await fetch(`/api/v1/items`, {headers: myHeaders});
			const json = await response.json();
			dispatch({
				type: 'pays',
				content: json
			});
		};
		fetchQuotes();
	}, []);

	let pays = [];

	if (state.pays){
		state.pays.map((item) => {
			pays.push(<div key={item.id}>{JSON.stringify(item)}</div>);
		});
	}else{
		pays = (<div>loading...</div>);
	}
	return (
		<div>{pays}</div>
	);
}
