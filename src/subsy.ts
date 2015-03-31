/**
 * Created by jcabresos on 3/31/15.
 */

export function json(value: any) {
    var replacr = (query: string) => {
        var sanitized = query.match(/[\w.]+/g);

        if(!sanitized || sanitized.length < 1)
            return query;

        var keys = sanitized[0].split('.');

        var tmp: any = value;

        for(var i = 0; i < keys.length; i++) {
            tmp = tmp[keys[i]];

            if(!tmp)
                return query;
        }

        return tmp;
    }

    return replacr;
}