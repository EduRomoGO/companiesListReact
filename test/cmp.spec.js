import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BeerListContainer } from '../components';
import { InputArea, BeerList } from '../components';
import { spy } from 'sinon';

describe('BeerListContainer', () => {

    it('should render InputArea and BeerList', () => {
        const wrapper = shallow( < BeerListContainer / > );

        expect(wrapper.containsAllMatchingElements(
            [ < InputArea / > , < BeerList / > ])).to.equal(true);
    });

    it('should start with an empty list', () => {
        const wrapper = shallow( < BeerListContainer / > );

        expect(wrapper.state('beers')).to.eql([]);
    });

    it('is able to add items to the list', () => {
        const wrapper = shallow( < BeerListContainer / > );

        wrapper.instance().addItem('Heineken');
        // wrapper.addItem('Heineken');

        expect(wrapper.state('beers')).to.have.length(1);
    });

    it('passes addItem to InputArea', () => {
        const wrapper = shallow( < BeerListContainer / > );
        const inputArea = wrapper.find('InputArea');
        const addItem = wrapper.instance().addItem;

        expect(inputArea.prop('onSubmit')).to.eql(addItem);
    });

    it('passes a bound addItem function to InputArea', () => {
        const wrapper = shallow( < BeerListContainer / > );
        const inputArea = wrapper.find(InputArea);

        inputArea.prop('onSubmit')('Mahou');

        expect(wrapper.state('beers')).to.eql(['Mahou']);
    });

});

describe('InputArea', () => {

    it('should contain an input and a button', () => {
        const wrapper = shallow( < InputArea / > );

        expect(wrapper.containsAllMatchingElements(
            [ < input / > , <button>Add</button> ])).to.equal(true);
    });

    it('should start with an empty value', () => {
        const wrapper = shallow( <InputArea/>);
        const input = wrapper.find('input');

        expect(wrapper.state('text')).to.equal('');
    });

    it('should accept input', () => {
        const wrapper = mount( < InputArea / > );
        const input = wrapper.find('input');

        input.simulate('change', { target: { value: 'Cruzcampo' } });

        expect(wrapper.state('text')).to.equal('Cruzcampo');
        expect(input.prop('value')).to.equal('Cruzcampo');
    });

    it('should call onSubmit when Add is clicked', () => {
        const addItemSpy = spy();
        const wrapper = shallow(<InputArea onSubmit={addItemSpy} />);

        wrapper.setState({text: 'Budweiser'});

        const addButton = wrapper.find('button');

        addButton.simulate('click');

        expect(addItemSpy.calledOnce).to.equal(true);
        expect(addItemSpy.calledWith('Budweiser')).to.equal(true);
    });

});



















