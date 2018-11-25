import TagCountMapper from '../../src/TagCountMapper'

test( 'Given only one range, it maps tags to the same class', () => {
	const mapper = new TagCountMapper( ['range'] );
	const tags = {a: 1, b: 2, c: 3 };
	expect(mapper.mapTags( tags ) ).toEqual( { a: 'range', b: 'range', c: 'range' } );
} );

xtest( 'Given only matching range count, it maps ranges 1:1', () => {
	const mapper = new TagCountMapper( ['range-1', 'range-2', 'range-3'] );
	const tags = {a: 1, b: 2, c: 3 };
	expect(mapper.mapTags( tags ) ).toEqual( { a: 'range-1', b: 'range-2', c: 'range-3' } );
} );