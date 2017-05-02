import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow, render } from 'enzyme';
import Login from './Login';

describe('Login', () => {

	const component = mount(<Login />);
	const identifierInp = component.find('input[name="identifier"]');
	const passwordInp = component.find('input[name="password"]');
	const submitBtn = component.find('button[type="submit"]');

	it('has a pair of inputs, one is identifier and the other password', ()=> {
		expect(identifierInp.length).toBe(1);
		expect(passwordInp.length).toBe(1);
	});

	it('has a submit button', ()=> {
		expect(submitBtn.length).toBe(1);
	});

	xdescribe('Submit', () => {
		it('calls the login function', ()=> {

		});
	});

});
