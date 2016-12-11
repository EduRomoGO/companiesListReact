import React, { Component } from 'react';

export class BeerListContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			beers: []
		};
		this.addItem = this.addItem.bind(this);
	};

	addItem(item) {
		this.setState({
			beers: [].concat(this.state.beers).concat([item])
		});
	};


  	render() {
   		return <div>
		        <InputArea onSubmit={this.addItem} />
		        <BeerList items={this.state.beers} />
    		</div>
  	}
}

export class InputArea extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.setText = this.setText.bind(this);
		this.hanleClick = this.hanleClick.bind(this);
	}

	setText(event) {
		this.setState({text: event.target.value});
	}


	hanleClick() {
		this.props.onSubmit(this.state.text);
	}

	render() {
		return <div>
					<input value={this.state.text} onChange={this.setText} />
					<button onClick={this.hanleClick}>Add</button>
				</div>
	}
}

InputArea.propTypes = {
	onSubmit: React.PropTypes.func.isRequired	
};


export class BeerList extends Component {
	render() {
		let beers;

		if (this.props.items) {
			beers = this.props.items.map(function (item, index) {
				return <li key={index}>{item}</li>
			});
		}

		return <ul>
					{beers}
				</ul>
	}
}

BeerList.propTypes = {
	items: React.PropTypes.array.isRequired
};




