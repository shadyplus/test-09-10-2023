<?php
$apiKey = 'kXQb0GFDUcyUW0wBaz3f18Hcc0S0SYc8AOVHV2bbrhdIJgf';
$offer_id = 11089; // для каждого оффера свой айди, надо уточнять его в админке или у суппортов
// $stream_hid = 'KayhbQjG'; // не обязательное, если указано, заявка будет привязана к потоку
$apiUrl = 'http://api.cpa.tl/api/lead/send';
$country_default = 'DZ';

$data_post = $_POST;
$data = array(
  'key' => $apiKey,
  'id' => $data_post['subid'], // тут лучше вставить значение, по которому вы сможете идентифицировать свой лид; можно оставить microtime если у вас нет своей crm
  'offer_id' => $offer_id,
  // 'stream_hid' => $stream_hid,
  'name' => $data_post['name'],
  'phone' => $data_post['phone'],
  'comments' => $data_post['comments'],
  'country' => $country_default, // формат ISO 3166-1 Alpha-2 - https://ru.wikipedia.org/wiki/ISO_3166-1
  'address' => $data_post['address'],
  'tz' => 3, // очень желательно получать его с ленда, но если никак лучше оставить пустым или 3 (таймзона мск)
  'web_id' => '',
  'ip_address' => isset($_SERVER["HTTP_CF_CONNECTING_IP"]) ? $_SERVER["HTTP_CF_CONNECTING_IP"] : $_SERVER['REMOTE_ADDR'],
  'user_agent' => $_SERVER['HTTP_USER_AGENT'],
  'sub1' => $data_post['subid'],
);

$options = array(
  'http' => array(
    'header' => "Content-type: application/x-www-form-urlencoded\r\n",
    'method' => 'POST',
    'content' => http_build_query($data),
    'ignore_errors' => true,
  )
);

$context = stream_context_create($options);
$result = file_get_contents($apiUrl, false, $context);
$obj = json_decode($result);
$g_result;


if (null === $obj) {
	header('Location: ./../bad.php?msg=Invalid_JSON&recom=check_the_name_and_number_entered&name='.$_POST['name'].'&phone='.$_POST['phone']);
  $g_result = 'error';
} else if (!empty($obj->errmsg)) {
  $g_result = 'error';
  $msg= htmlspecialchars("Ошибка: " . $оbj->errmsg);
	header('Location: ./../bad.php?msg=' . $msg . '&recom=check_the_name_and_number_entered&name='.$_POST['name'].'&phone='.$_POST['phone']);
} else {
  $g_result = 'ok';
  header('Location: ./../good.php?pixel_fb=' . $_POST['pixel_fb']);
}


date_default_timezone_set('Europe/Minsk');
$datePost = date("Y-m-d__H:i:s");

$g_params = array(
  'p1' => $datePost,
  'p2' => $_POST['name'],
  'p3' => $_POST['phone'],
  'p4' => $_POST['subid'],
  'p5' => $country_default,
  'p6' => $_POST['geo_result'],
  'p7' => $g_result . ' - id_231',
  'p8' => 'ivan__id_10',
);

$g_url = 'https://script.google.com/macros/s/AKfycbw6b3gNRYBHG-B3ObZBaHFctJkj0QrZU7uXdUOtcnn7qBU_632pcm4yAgdV83XRTQCl_g/exec';
$g_crl = curl_init();
curl_setopt($g_crl, CURLOPT_URL, $g_url);
curl_setopt($g_crl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($g_crl, CURLOPT_POST, true);
curl_setopt($g_crl, CURLOPT_POSTFIELDS, $g_params);
$g_result = curl_exec($g_crl);
curl_close($g_crl);
file_put_contents('leads.txt', $datePost . '  |  ClickID — ' . $_POST['subid'] . '  |  Имя — ' . $_POST['name']  . '  |  Телефон — ' . $_POST['phone'] . '  |  результат по лиду — ' . $result  . "\r\n", FILE_APPEND | LOCK_EX);