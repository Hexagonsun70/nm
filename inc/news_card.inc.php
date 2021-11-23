<?php
//include contains database handler which uses msqli to connect to db.
include($_SERVER['DOCUMENT_ROOT'] . "/inc/dbh.inc.php");

// write query for the 3 cards I want to display on the page.
$news = "SELECT * FROM news_cards ORDER BY date DESC LIMIT 3";

// retrieve the result set (set of rows).
$retNews = mysqli_query($conn, $news);

// fetch the resulting rows as an array.
$cards = mysqli_fetch_all($retNews, MYSQLI_ASSOC);

// free $retNews from memory (good practice).
mysqli_free_result($retNews);

// close connection.
mysqli_close($conn);
