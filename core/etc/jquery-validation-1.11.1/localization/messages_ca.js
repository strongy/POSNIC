/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CA (Catalan; catal  )
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Aquest camp   s obligatori.",
		remote: "Si us plau, omple aquest camp.",
		email: "Si us plau, escriu una adre  a de correu-e v  lida",
		url: "Si us plau, escriu una URL v  lida.",
		date: "Si us plau, escriu una data v  lida.",
		dateISO: "Si us plau, escriu una data (ISO) v  lida.",
		number: "Si us plau, escriu un n  mero enter v  lid.",
		digits: "Si us plau, escriu nom  s d  gits.",
		creditcard: "Si us plau, escriu un n  mero de tarjeta v  lid.",
		equalTo: "Si us plau, escriu el maateix valor de nou.",
		accept: "Si us plau, escriu un valor amb una extensi   acceptada.",
		maxlength: $.validator.format("Si us plau, no escriguis m  s de {0} caracters."),
		minlength: $.validator.format("Si us plau, no escriguis menys de {0} caracters."),
		rangelength: $.validator.format("Si us plau, escriu un valor entre {0} i {1} caracters."),
		range: $.validator.format("Si us plau, escriu un valor entre {0} i {1}."),
		max: $.validator.format("Si us plau, escriu un valor menor o igual a {0}."),
		min: $.validator.format("Si us plau, escriu un valor major o igual a {0}.")
	});
}(jQuery));