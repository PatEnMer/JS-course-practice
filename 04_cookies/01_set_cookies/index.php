<?php

    setcookie('session', md5(rand()), time() + 60 * 60 * 24 *30, '/');

?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8">
        <title>kurs eduweb.pl</title>
        <style>
            body {
                background-color: lightgray;
            }
        </style>
    </head>
    <body>
        <h1>Ustawianie ciasteczek</h1>

        <script src="js/script.js"></script>
    </body>
</html>