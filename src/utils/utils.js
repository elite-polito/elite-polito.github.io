/**
 *
 * @param x:any
 * @returns {[]}
 */
function ensureArray(x  )  {
    if (Array.isArray(x))
        return x
    else
        return [x]
}

export {ensureArray}