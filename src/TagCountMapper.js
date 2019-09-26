import * as R from 'ramda'
import Partitioner from './Partitioner';

/**
 * This class maps a tag => count object to a tag => range object
 */
export default class TagCountMapper {
	/**
	 * @param {string[]} ranges
	 */
	constructor( ranges ) {
		this.ranges = ranges;
	}

	mapTags( tags ) {
		const counts = R.values( tags );
		const minCount = R.apply( Math.min, counts );
		const maxCount = R.apply( Math.max, counts );
		// TODO: Simplify and abolish edge cases, so Partitioner returns exactly numbers between 0 and range.length-1
		// Probably use range.length-1 instead of counts.length?
		const partitioner = new Partitioner( minCount, maxCount, counts.length );
		return R.map( count => { return this.ranges[ Math.min(this.ranges.length-1, partitioner.partition(count) ) ] }, tags );
	}
}
