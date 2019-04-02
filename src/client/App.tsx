import * as React from 'react';

const FourOhFour = () => {
	return <h1>Oh no 404</h1>;
};

interface AppState {}

export class App extends React.Component<any, AppState> {
	constructor(props: any) {
		super(props);
	}

	render() {
		return <div />;
	}
}
