<!DOCTYPE html>
<html lang="be">

<head>
	<meta charset="UTF-8" />
	<link rel="shortcut icon" href="img/favicon.png" type="image/png">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>شكرا لطلبك.</title>
	<!-- Facebook Pixel Code -->
	<script>
		!(function(f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function() {
				n.callMethod ?
					n.callMethod.apply(n, arguments) :
					n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = "2.0";
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(
			window,
			document,
			"script",
			"https://connect.facebook.net/en_US/fbevents.js"
		);
		fbq('init', '<?= @$_GET['pixel_fb'] ?>');
		fbq("track", "PageView");
		fbq("track", "Lead");
	</script>
	<noscript><img height="1" width="1" style="display: none" src="https://www.facebook.com/tr?id=<?= @$_GET['pixel_fb'] ?>&ev=PageView&noscript=1" /></noscript>
	<!-- End Facebook Pixel Code -->


	<style>
		* {
			margin: 0;
			padding: 0;
			outline: none !important;
			font-family: sans-serif;
		}

		body {
			padding: 0 20px;
			background-color: rgba(33, 35, 43, 1);
		}

		.container {
			height: 100vh;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

		}

		.wrap {
			max-width: 800px;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding: 80px;
			background: linear-gradient(0deg, rgba(33, 35, 43, 1), rgb(197, 137, 8), rgba(33, 35, 43, 1));
			border: 4px dashed rgb(255, 174, 0);
			border-radius: 30px;
		}

		h1 {
			text-align: center;
			font-size: 45px;
			font-weight: 300;
			line-height: 125%;
			color: rgb(255, 174, 0);
			margin-bottom: 20px;
		}

		p {
			text-align: center;
			font-size: 24px;
			line-height: 170%;
			color: #fff;
		}

		@media (max-width:768px) {
			.wrap {
				padding: 50px 60px;
			}

			h1 {
				font-size: 35px;
			}

			p {
				font-size: 16px;
				line-height: 140%;
			}
		}

		@media (max-width:500px) {
			.wrap {
				padding: 50px 20px;
				border-radius: 20px;
				border: 3px dashed rgb(255, 174, 0);
			}

			h1 {
				font-size: 28px;
				line-height: 115%;
			}

			p {
				font-size: 16px;
				line-height: 125%;
			}
		}

		@media (max-width:360px) {
			.wrap {
				padding: 20px 10px;
				border: 2px dashed rgb(255, 174, 0);
			}

			h1 {
				font-size: 22px;
			}

			p {
				font-size: 16px;
			}
		}
	</style>

</head>



<body>
	<div class="container">
		<div class="wrap">

			<h1>شكرًا لك. تم قبول طلبك..</h1>
			<p>سيتصل بك مشغلنا لتأكيد حجزك في غضون ساعة. يرجى الاحتفاظ بك
هاتف
والرد على الهاتف. التسليم عن طريق البريد أو البريد ، يجب أن يتم الدفع في وقت
توصيل!</p>

			<p style="margin-top: 30px;">للتذكير ، للحصول على أفضل النتائج ، يوصى بأخذ الدورة التدريبية متعددة الحزم الكاملة.</p>

		</div>
	</div>

</body>



</html>