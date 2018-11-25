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

	partition( p ) {
		if ( p < this.start || p > this.end ) {
			throw Error( 'Number is outside of range' );
		}
		return Math.floor( p / this.partitionSize );
	}
}