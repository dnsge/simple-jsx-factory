const createElement = (tagName: string, attrs: { [p: string]: any }, ...children: Node[]): HTMLElement | Node[] => {
	if (tagName === Fragment) return children;

	const elem = document.createElement(tagName);
	if (attrs !== null) {
		const keys = Object.keys(attrs);
		keys.forEach(key => {
			const value = attrs[key];
			if (key === "className") {
				elem.setAttribute("class", value);
			} else {
				elem.setAttribute(key, value);
			}
		});
	}

	for (const child of children) {
		if (Array.isArray(child)) {
			elem.append(...child);
		} else {
			elem.append(child);
		}
	}

	return elem;
}

const Fragment = "fragment";

const JSX = {
	createElement: createElement,
	Fragment: Fragment,
};

export default JSX;
