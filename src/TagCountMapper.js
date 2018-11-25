import * as R from 'ramda'

export default class TagCountMapper {
	constructor( ranges ) {
		this.ranges = ranges;
	}

	mapTags( tags ) {
		return R.map( () => this.ranges[0], tags )
	}
}