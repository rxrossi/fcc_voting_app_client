import login from './login';
import nock from 'nock';
import sinon from 'sinon';
import config from './../../config';

describe('Login action', () => {
	const userEmail = 'jhon@mail.com';
	const userPassword = '12345';

	it('calls the api with given login and password', ()=> {
		//const fetch = sinon.spy();
		const reqBody = {email: userEmail, password: userPassword}

		const afn = sinon.stub();

		login(reqBody);

		sinon.assert.calledWith(afn, reqBody);

		//sinon.assert.calledWith(fetch, `${config.apiURI}/auth`, reqBody)
		//sinon.assert.calledWith({`${config.apiURI}/auth`, expectedReqBody}))
	});

});
