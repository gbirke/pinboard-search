/* 
This class assigns a partition index for every number between start and end.

Based on ideas and math from https://stackoverflow.com/questions/3717314/what-is-the-formula-to-calculate-the-font-size-for-tags-in-a-tagcloud
But instead of font sizes we want to calculate integer index numbers to map tag count to a class names form an array

*/
export default class Partitioner {
	constructor( start, end, numPartitions ) {
		if ( start >= end ) {
			throw  Error( 'end must be greater than start' );
		}
		if ( numPartitions < 1 ) {
			throw Error( 'partition must be greater than 0' );
		}


		this.start = start;
		this.end = end;
		this.partitionSize = ( end - start ) / numPartitions;
		if ( this.partitionSize < 1 ) {
			this.partitionSize = 1 / this.partitionSize;
		}
	}

	/**
	 * Assign a partition index
	 */
	partition( p ) {
		if ( p < this.start || p > this.end ) {
			throw Error( 'Number is outside of range' );
		}
		return Math.floor( p / this.partitionSize );
	}
}
