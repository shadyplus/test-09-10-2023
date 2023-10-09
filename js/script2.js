setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", function () {
	$(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
});
const OFFER = "«MYRALOSE»";
let now = new Date,
	mm = now.getMonth() + 1,
	day = now.getDate(),
	year = now.getFullYear(),
	date = day + "." + mm + "." + year;
const massange = [{
	m: "مرحباً ، إسمي زكية آل الجليلي . أنا أخصائية تغذية. مرحبا بكم في موقع الويب الخاص بي. "
}, {
	m: "هنا أقدم تشخيصات مجانية عبر الإنترنت وتوصيات شخصية ساعدت الآلاف من مرضاي على التخلص من الوزن الزائد. "
}, {
	m: "للحصول على نصائح فقدان الوزن الخاصة بي ، أجب على بعض الأسئلة. "
}, {
	m: '<p class="quest">كم عدد الكيلوجرامات التي تود ان تفقدها ؟</p>'
}, {
	m: '<p class="quest">ما هي المناطق المراد فقدان الوزن بها ؟ </p>'
}, {
	m: '<p class="quest">ما هي نشاطاتك اليومية ؟</p>'
}, {
	m: '<p class="quest">ما هو نوع الطعام الذي تتناوله ؟</p>'
}, {
	m: '<p class="quest">كم عمرك ؟</p>'
}, {
	m: '<p class="quest">ما هو وزنك الحالي ؟</p>'
}, {
	m: '<p class="quest">ما هو طولك ؟</p>'
}, {
	m: "شكرًا لك. أنت بالفعل تعاني من زيادة الوزن ، لكنك قادر تمامًا على تحقيق هدف فقدان الوزن الذي تريده. السبب الرئيسي لزيادة وزنك هو بطء عملية التمثيل الغذائي. هذه سمة خاصة للدهون التي تتراكم حول الجانبين والبطن.  "
}, {
	m: "في حالتك انت تحتاج إلي : شرب الكافيين  و مستخلص الزنجبيل و التورين و فيتامين ب 3 ، ب 5 ، ب 6 و مالتوديكسترين و حامض الستريك ."
}, {
	m: "يزيل مستخلص الزنجبيل المعادن الثقيلة وينظم عمليات التمثيل الغذائي في الجسم. "
}, {
	m: "يساعد التورين على خسارة الوزن عن طريق زيادة استخدام الجسم للدهون كمصدر للطاقة."
}, {
	m: "يزيد التورين أيضاً  من عملية التمثيل الغذائي وله تأثير قوي في حرق الدهون. "
}, {
	m: "فيتامين ب3 يعمل لتحويل الطعام إلى طاقة. كما يساعد أيضًا في الحفاظ على صحة الجهاز العصبي والجهاز الهضمي والجلد والشعر."
}, {
	m: "يمكنك إستخدام جميع هذه المكونات المدرجة بشكل فردي ، ولكن من الأكثر ملاءمة وفعالية استخدامها مجمعة معاً في منتج مثل  " + OFFER + " هم موجودون  فيه علي  شكل أقراص إستحلاب  مع أقصى تركيز للمواد المفيدة. "
}, {
	m: 'لفقدان الوزن بشكل صحيح  ، يمكنك تناول كل هذه المكونات ببساطة ثلاث مرات في اليوم: في الصباح ووقت الغداء وفي المساء. في غضون شهر واحد فقط ، ستتمكن من الوصول إلى هدفك.'
}, {
	m: 'هذا هو شكل المنتج الذي تجتمع به كل هذه الخصائص : <br><br> <img src="img/prod.png" class="product-img" style="width: 100%; max-width: 240px;"> '
}, {
	m: "يحتوي هذا المنتج على مستخلصات مركزة للغاية  لحرق الدهون الطبيعية ، والتي تؤدي إلى عملية حرق الدهون الغير اللازمة بالجسم . "
}, {
	m: "و لذلك  " + OFFER + " يُكسر ويُزيل الدهون الحشوية بشكل فعال للغاية ، التي تبطن جدران الأعضاء الداخلية وتمنعها من العمل بشكل صحيح ، و أيضاً  MYRALOSE  ينشط عملية التمثيل الغذائي عن طريق تطهير الجسم من السموم والشوائب. "
}, {
	m: "نتيجة لذلك ، يتخلص جسمك من الدهون الزائدة من تلقاء نفسه ، ويستخدمها كمصدر للطاقة. ستبدأ في تناول كميات أقل من الطعام وعدم الشعور بالجوع ، مما يزيد من تأثير فقدان الوزن. "
}, {
	m: 'هذه بعض النتائج لمرضاي اللذين فقدوا وزنهم بنجاح بإستخدام هذا المكمل الغذائي MYRALOSE : <br> <br><img src="img/1.jpg"> <br> <img src="img/2.jpg"> <br> <img src="img/3.jpg"> <br> <img src="img/4.jpg"> '
}, {
	m: "تبلغ المدة المثالية لإستخدام هذا المكمل الغذائي ، والتي تأخذ في الاعتبار عمرك ومؤشر كتلة جسمك الحالي واسلوب حياتك ، في المتوسط حوالي 60 يومًا. "
}, {
	m: "خلال هذه الفترة , سوف يتم تطهير جسمك من الدهون الضارة و سيتم تنظيم عملية التمثيل الغذائي بجسمك  "
}, {
	m: "أيضاً لدي أخبار جيدة لك! أنت المريض رقم 2000 الذي اشخصه عبر الإنترنت! "
}, {
	m: "تستطيع ان تحصل علي  " + OFFER + "بالسعر الترويجي عن طريق إدخال اسمك ورقم هاتفك في نموذج الطلب أدناه. عدد العبوات بالسعر الترويجي محدودة ، لذا أنصحك بالإسراع في طلبك. "
}];
var mass_id = 0,
	length_mass = 0,
	lengt_num_mas = 0,
	text = "",
	speedtext = 55,
	// speedtext = 1,
	process = !0;

function app1() {
	var e = new Date,
		s = ("0" + e.getMinutes()).slice(-2),
		t = ("0" + e.getHours()).slice(-2) + ":" + s;
	if ($(".chat").height() + 100 > $(".content").height()) {
		$("#scroll_id").removeClass("hide");
		var n = $(".inp").val();
		$(".inp").val(++n)
	}
	const c = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + t + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
	$(".chat-content-list").append(c), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
	var s = new Date,
		t = ("0" + s.getMinutes()).slice(-2);
	let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="message-time" id="time">' + (("0" + s.getHours()).slice(-2) + ":" + t) + '</p><p class="text" class="users_mass">' + e + "</p></div></div></div>";
	$(".chat-content-list").append(n), $(".content").animate({
		scrollTop: $(".chat-content-list").height()
	}, 700), $("#scroll_id").addClass("hide")
}

function question1() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">   أقل من 5 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">من 5 ل 10 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">من 10 ل 15 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">أكثر من 15 كجم</span></div></div>')
}

function choise1() {
	$(".question1M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 5 كجم"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question1W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 5 ل 10 كجم"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question1P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 10 ل 15 كجم"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question1T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 15 كجم"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question2() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">الخصر و البطن</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">الفخذين و الأرداف</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">الذراعين او الساقين</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">أنا اريد فقدان الوزن بالجسم كاملاً</span></div></div>')
}

function choise2() {
	$(".question2M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الخصر و البطن"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question2W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الفخذين و الأرداف"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question2P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("الذراعين او الساقين "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question2T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا اريد فقدان الوزن بالجسم كاملاً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question3() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">أنا امارس الرياضة من  3 - 5 مرات بالأسبوع </span></div><div class="chat-content-buttons-gender-block"><span class="question3W">أنا امارس الرياضة من 1 - 3 مرات بالأسبوع </span></div><div class="chat-content-buttons-gender-block"><span class="question3P">أنا لا امارس الرياضة, و لكن أمشي كثيرا </span></div><div class="chat-content-buttons-gender-block"><span class="question3T">أسلوب حياتي مستقر إلي حد ما</span></div></div>')
}

function choise3() {
	$(".question3M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا امارس الرياضة من  3 - 5 مرات بالأسبوع "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question3W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا امارس الرياضة من 1 - 3 مرات بالأسبوع "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question3P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا لا امارس الرياضة, و لكن أمشي كثيرا "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question3T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أسلوب حياتي مستقر إلي حد ما"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question4() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">طعام طبيعي, لا حلويات أو معجنات</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">تقريباً 50% حلويات و 50% طعام طبيعي</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">أنا احب الوجبات السريعة و الجاهزة و الحلويات </span></div><div class="chat-content-buttons-gender-block"><span class="question4T">أتناول اطعمة غير صحية كثيراً</span></div></div>')
}

function choise4() {
	$(".question4M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("طعام طبيعي, لا حلويات أو معجنات"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question4W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("تقريباً 50% حلويات و 50% طعام طبيعي"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question4P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أنا احب الوجبات السريعة و الجاهزة و الحلويات "), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question4T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أتناول اطعمة غير صحية كثيراً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question5() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">أقل من 20 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">من 20 - 30 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">من 31 - 40 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">من 41 - 50 عاماً</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">أكثر من 50 عاماً</span></div></div>')
}

function choise5() {
	$(".question5M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 20 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 20 - 30 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 31 - 40 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 41 - 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question5G").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 50 عاماً"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question6() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">حتي 60 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">من 60 إلي 70 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">من 71 إلي 80 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">من 81 إلي 90 كجم</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">أكثر من 90 كجم</span></div></div>')
}

function choise6() {
	$(".question6M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("حتي 60 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 60 إلي 70 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 71 إلي 80 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 81 إلي 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question6O").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 90 كجم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}

function question7() {
	$(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">أقل من 150 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">من 150 إلي 160 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">من 161 إلي 170 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">من 171 إلي 180 سم</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">أكثر من 180 سم</span></div></div>')
}

function choise7() {
	$(".question7M").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أقل من 150 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question7W").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 150 إلي 160 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question7P").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 161 إلي 170 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question7T").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("من 171 إلي 180 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	}), $(".question7G").click(() => {
		document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("أكثر من 180 سم"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout(() => {
			process = !0
		}, 500)
	})
}
setTimeout(() => {
	var e = new Date,
		s = ("0" + e.getMinutes()).slice(-2);
	const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="message-time" id="time">' + (("0" + e.getHours()).slice(-2) + ":" + s) + '</p><p class="text" id="mass' + mass_id + '"></p></div></div></div>';
	$(".chat-content-list").append(t), $("#scroll_id").click(function (e) {
		$(this).removeClass("hide-q"), $(".content").animate({
			scrollTop: $(".chat").height()
		}, 700)
	});
	const n = setInterval(function () {
		if (1 == process)
			if (lengt_num_mas != massange.length) {
				if (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
						scrollTop: $(".chat").height()
					}, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
						scrollTop: $(".chat").height()
					}, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
						scrollTop: $(".chat").height()
					}, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
						scrollTop: $(".chat").height()
					}, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
						scrollTop: $(".chat").height()
					}, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
						scrollTop: $(".chat").height()
					}, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({
						scrollTop: $(".chat").height()
					}, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length) {
					lengt_num_mas++, mass_id++, length_mass = 0, text = "", app1()
				}
			} else clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), $(".reviews").removeClass("hide")
	}, speedtext)
}, 1e3), $(".content").scroll(function () {
	"0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
});
var $marker = $("#down-box");
$(".content").scroll(function () {
	$(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
});