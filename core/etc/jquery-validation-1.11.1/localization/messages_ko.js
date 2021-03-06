/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: KO (Korean;          )
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "                      .",
		remote: "                         .",
		email: "                    E-Mail               .",
		url: "                                   .",
		date: "                                   .",
		dateISO: "                (ISO)                   .",
		number: "                                .",
		digits: "                                .",
		creditcard: "                                            .",
		equalTo: "                                   .",
		accept: "                                   .",
		maxlength: $.format("{0}                              . "),
		minlength: $.format("{0}                             ."),
		rangelength: $.format("                 {0}        {1}                             ."),
		range: $.format("{0}        {1}                       ."),
		max: $.format("{0}                                 ."),
		min: $.format("{0}                                 .")
	});
}(jQuery));
