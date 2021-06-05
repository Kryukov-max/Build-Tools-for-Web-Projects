(function(define) {

    define(function () {
        const translates = {
					en: "Hello, ",
					ru: "Привет, ",
				}
				function sayHello(name, lang = "en") {
					return translates[lang] + name;
				}
			
				return { sayHello };
    });

}(
    typeof module === 'object' && module.exports && typeof define !== 'function' ?
    function (factory) { module.exports = factory(); } :
    define
));
