<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Error</title>

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
			color: red;
			margin-bottom: 20px;
		}

		p {
			text-align: center;
			font-size: 24px;
			line-height: 170%;
			color: #fff;
		}

		.button {
			background: linear-gradient(0deg, rgb(155, 110, 12), rgb(255, 174, 0));
			border: none;
			color: #fff;
			padding: 15px 25px;
			border-radius: 8px;
			font-size: 20px;
			font-weight: 700;
			margin: 25px auto 15px;
			outline: none;
			cursor: pointer;
			text-align: center;
			text-decoration: none;
		}
		.inputs_info{
			font-weight: 700;
		}
		.recommindation:first-letter {
			text-transform:uppercase;
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

			<h1>Server error!</h1>
			<p><?= htmlspecialchars_decode(@$_GET['msg']); ?></p>
			<p class="recommindation"><?= str_replace('_',' ', @$_GET['recom']); ?></p>
			<p class="inputs_info"><?= print 'Nombre — ' . @$_GET['name']; ?></p>
			<p class="inputs_info"><?= print 'Número — ' . @$_GET['phone']; ?></p>

			<button class="button" id="button_back">Back</button>
		</div>
	</div>
	<script>
		document.getElementById("button_back").onclick = function (e) {
		history.back();
		};
	</script>
</body>

</html>