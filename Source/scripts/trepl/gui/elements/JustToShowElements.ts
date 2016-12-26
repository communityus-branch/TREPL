﻿import { Element } from './Element'
import { ElementType } from './ElementType'
import { Label as LabelComponent } from '../components/Label'
import { TextField as TextFieldComponent } from '../components/TextField'
import { DropField as DropFieldComponent } from '../components/DropField'
import { DropList as DropListComponent } from '../components/DropList'

export class Label extends Element {
	getJSONName() { return '-' }
	constructor() {
		super();
		this.initialize([
			[
				new LabelComponent(''),
				new LabelComponent('Label'),
				new LabelComponent(''),
			]
		], ElementType.Value);
	}
}
export class Name extends Element {
	getJSONName() { return '-' }
	constructor() {
		super();
		this.initialize([
			[
				new LabelComponent(''),
				new TextFieldComponent(this, 'Value'),
				new LabelComponent(''),
			]
		], ElementType.Value);
	}
}
export class DropField extends Element {
	getJSONName() { return '-' }
	constructor() {
		super();
		this.initialize([
			[
				new LabelComponent(''),
				new DropFieldComponent(this),
				new LabelComponent(''),
			]
		], ElementType.Value);
	}
}
export class DropList extends Element {
	getJSONName() { return '-' }
	constructor() {
		super();
		this.initialize([
			[
				new LabelComponent(''),
				new DropListComponent(this),
				new LabelComponent(''),
			]
		], ElementType.Value);
	}
}