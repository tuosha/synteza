const compose = (...fns) => (component) => { return fns.reduceRight((prev, fn) => fn(prev),component)};

export default compose