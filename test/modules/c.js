/**
 * author: oldj
 * blog: http://oldj.net
 */

define('c', ['b'], function () {
    console.log('c!');
    return {
        getv: function () {
            return 'c';
        }
    };
});
