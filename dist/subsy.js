/**
 * Created by jcabresos on 3/31/15.
 */
function json(value) {
    var replacr = function (query) {
        var sanitized = query.match(/[\w.]+/g);
        if (!sanitized || sanitized.length < 1)
            return query;
        var keys = sanitized[0].split('.');
        var tmp = value;
        for (var i = 0; i < keys.length; i++) {
            tmp = tmp[keys[i]];
            if (!tmp)
                return query;
        }
        return tmp;
    };
    return replacr;
}
exports.json = json;
