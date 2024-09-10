const sum = require('../src/sum');

describe('sum module', () => {
	beforeAll(()=>{
		console.log('beforeAll');
	});
	beforeEach(() => {
		console.log('beforeEach');
	});
	afterAll(()=>{

	});
	afterEach(()=>{

	});


	it('adds 1 + 2 to equal  3', () => {
		expect(sum(1,2)).toBe(3);
	});

	it('adds 1 + 2 to equal  4', () => {
		expect(sum(1,2)).not.toBe(4);
	});
})
