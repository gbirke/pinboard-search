import * as R from 'ramda'
import Partitioner from './Partitioner';

export default class TagCountMapper {
	constructor( ranges ) {
		this.ranges = ranges;
	}

	mapTags( tags ) {
		const counts = R.values( tags );
		const minCount = R.apply( Math.min, counts );
		const maxCount = R.apply( Math.max, counts );
		const partitioner = new Partitioner( minCount, maxCount, counts.length );
		return R.map( count => { return this.ranges[ Math.min(this.ranges.length-1, partitioner.partition(count) ) ] }, tags );
	}
}