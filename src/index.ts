export default function unicornFun(input: any, {postfix = 'rainbows'} = {}) {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
}
