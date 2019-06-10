import * as R from 'ramda';
import RS from 'ramdasauce';

const areAnySubStrings = (tokens, string) => R.any(R.flip(R.includes)(string), tokens);

const indexedMap = R.addIndex(R.map);

const invoke = R.curry((path, params, object) => {
    // @ts-ignore
    R.pipe(R.pathOr(R.F, path), R.apply(R.__, params))(object);
});

const capitalize = R.pipe(
    R.defaultTo(''),
    // @ts-ignore
    R.converge(R.concat, [R.pipe(R.head, R.toUpper), R.pipe(R.drop(1), R.toLower)])
);

const size = R.curry(R.cond([
    [R.is(Map), (map) => map.size],
    [R.is(Object), R.pipe(R.keys, R.length)],
    [R.T, R.length]
]));

const emptyToUndefined = R.cond([[R.complement(R.isEmpty), R.identity]]);

const isDefined = R.complement(R.isNil);

const arePropsExclusivelyEqualTo = R.curry((keys, val, obj) =>
    R.both(
        R.pipe(
            R.pick(keys),
            R.values,
            R.all(R.equals(val))
        ),
        R.pipe(
            R.omit(keys),
            R.values,
            R.all(R.complement(R.equals(val)))
        )
    )(obj));

const findDuplicateElement = (items = []) => {
    const moreThanOne = (count) => count > 1;
    const multiples = R.filter(moreThanOne, R.countBy(R.identity, items));
    return R.head(R.keys(multiples));
};

const hasDefinedFields = R.pipe(
    // @ts-ignore
    R.values,
    R.complement(R.all(RS.isNilOrEmpty))
);

export default {
    areAnySubStrings,
    arePropsExclusivelyEqualTo,
    capitalize,
    emptyToUndefined,
    findDuplicateElement,
    hasDefinedFields,
    indexedMap,
    invoke,
    isDefined,
    size
};
