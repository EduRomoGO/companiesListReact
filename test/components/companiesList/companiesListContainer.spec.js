import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { InputArea, BeerList, BeerListContainer } from '../../../components';
import { spy } from 'sinon';


describe('BeerList', () => {

    it('should render zero items', () => {
        const wrapper = shallow(<BeerList items={[]}/>);

        expect(wrapper.find('li')).to.have.length(0);
    });

    it('should render undefined items', () => {
        const wrapper = shallow(<BeerList items={undefined} />);

        expect(wrapper.find('li')).to.have.length(0);
    });

    it('should reder some items', () => {
        const items = ['San Miguel', 'Estrella Galicia', 'Estrella Damm'];
        const wrapper = shallow(<BeerList items={items} />);

        expect(wrapper.find('li')).to.have.length(3);
    });

    it('should render the items for real when mounted', () => {
        const wrapper = mount(<BeerListContainer />);

        wrapper.instance().addItem('Bucanier');
        wrapper.instance().addItem('Delirium tremens');

        expect(wrapper.find('li')).to.have.length(2);
    });
});
