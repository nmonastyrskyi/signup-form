export function assertDefined<T>(value: T): asserts value is NonNullable<T> {
	if (value === undefined || value === null) {
		throw new Error('Expected value to be defined');
	}
}

export function assertHTMLInputElement(target: EventTarget): asserts target is HTMLInputElement {
	if (!(target instanceof HTMLInputElement)) {
		throw new Error('Expected target to be an HTMLInputElement');
	}
}
