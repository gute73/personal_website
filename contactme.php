<html>
  <head>
    <title>Message Sent!</title>
  </head>
  <body>
    <?php 
      $recipient = 'kingmarkd@gmail.com';
      $email = $_POST['email'];
      $name = $_POST['name'];
      $subject = $_POST['subject'];
      $body = $_POST['body'];

      $messages = array();
      if (!preg_match("/^[\w\+\-.~]+\@[\-\w\.\!]+$/", $email)) {
        $messages[] = "That is not a valid email address.";
      }
      if (!preg_match("/^[\w\ \+\-\'\"]+$/", $name)) {
        $messages[] = "The 'Full Name' field must contain only " .
        "alphabetical characters, numbers, spaces, and " .
        "reasonable punctuation.";
      }

      $subject = preg_replace('/\s+/', ' ', $subject);
      if (preg_match('/^\s*$/', $subject)) {
        $messages[] = "Please specify a subject for your message.";
      }

      $body = $_POST['body'];
      if (preg_match('/^\s*$/', $body)) {
        $messages[] = "Your message was blank. Please input" .
        "a message.";
      }

      if (count($messages)) {
        foreach ($messages as $message) {
          echo("<p>$message</p>\n");
        }
        echo("<p>Click the back button and try again.</p>");
      } 
      else {
        mail($recipient, $subject, $body,
        "From: $name <$email>\r\n" .
        "Reply-To: $realName <$email>\r\n");
        echo("<p>Your message has been sent!</p>\n");
      }
    ?>
  </body>
</html>