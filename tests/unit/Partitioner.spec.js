import Partitioner from '../../src/Partitioner';


it( 'should throw errors on invalid parameters', () => {
	expect( () => { new Partitioner( 1, 1, 1 ) } ).toThrow( Error('end must be greater than start') );
	expect( () => { new Partitioner( 3, 1, 1 ) } ).toThrow( Error('end must be greater than start') );
	expect( () => { new Partitioner( 1, 100, 0 ) } ).toThrow( Error('partition must be greater than 0') );
} );

// TODO test constructor assertions: start < end, numPartitions > 0

it( 'should error for numbers outside of the range', () => {
	const partitioner = new Partitioner( 0, 100, 100 );
	expect( partitioner.partition( 0 ) ).toBe( 0 );
	expect( partitioner.partition( 1 ) ).toBe( 1 );
	expect( partitioner.partition( 100 ) ).toBe( 100 );
	expect( () => partitioner.partition( -1 ) ).toThrow( Error( 'Number is outside of range' ) );
	expect( () => partitioner.partition( 101 ) ).toThrow( Error( 'Number is outside of range' ) );
} );


it( 'should create big partitions if number of sections is smaller than range', () => {
	const partitioner = new Partitioner( 1, 100, 5 );
	expect( partitioner.partition( 1 ) ).toBe( 0 );
	expect( partitioner.partition( 10 ) ).toBe( 0 );
	expect( partitioner.partition( 19 ) ).toBe( 0 );
	expect( partitioner.partition( 20 ) ).toBe( 1 );
	expect( partitioner.partition( 39 ) ).toBe( 1 );
	expect( partitioner.partition( 99 ) ).toBe( 5 );
	expect( partitioner.partition( 100 ) ).toBe( 5 );
} );

// This is for tag lists where there is not much variance in the tag counts - they should still be displayed.
it( 'should return first partition when number of sections is greater than range items', () => {
	const partitioner = new Partitioner( 1, 10, 100 );
	expect( partitioner.partition( 1 ) ).toBe( 0 );
	expect( partitioner.partition( 2 ) ).toBe( 0 );
	expect( partitioner.partition( 3 ) ).toBe( 0 );
	expect( partitioner.partition( 4 ) ).toBe( 0 );
	expect( partitioner.partition( 5 ) ).toBe( 0 );
	expect( partitioner.partition( 6 ) ).toBe( 0 );
	expect( partitioner.partition( 7 ) ).toBe( 0 );
	expect( partitioner.partition( 8 ) ).toBe( 0 );
	expect( partitioner.partition( 9 ) ).toBe( 0 );
	expect( partitioner.partition( 10 ) ).toBe( 0 );
} );

// This is for tag lists where there is a bit more variance in the tag counts, but still not much
it( 'should return some partition when number of sections is greater than range items', () => {
	const partitioner = new Partitioner( 1, 10, 20 );
	expect( partitioner.partition( 1 ) ).toBe( 0 );
	expect( partitioner.partition( 2 ) ).toBe( 0 );
	expect( partitioner.partition( 3 ) ).toBe( 1 );
	expect( partitioner.partition( 4 ) ).toBe( 1 );
	expect( partitioner.partition( 5 ) ).toBe( 2 );
	expect( partitioner.partition( 6 ) ).toBe( 2 );
	expect( partitioner.partition( 7 ) ).toBe( 3 );
	expect( partitioner.partition( 8 ) ).toBe( 3 );
	expect( partitioner.partition( 9 ) ).toBe( 4 );
	expect( partitioner.partition( 10 ) ).toBe( 4 );
} );
