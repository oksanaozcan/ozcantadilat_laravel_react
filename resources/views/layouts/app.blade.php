<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <!-- Scripts -->
   <script src="{{ asset('js/app.js') }}" defer></script>

   <!-- Fonts -->
   <link rel="dns-prefetch" href="//fonts.gstatic.com">
   <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

   <!-- Styles -->
   <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  <title>Ozcan Tadilat</title>
</head>
<body>
  <div id="root"></div>  
  
  <script>
    function googleTranslateElementInit() {
      const config={
        pageLanguage: 'tr',
        includedLanguages: 'en,ru',
        layout:google.translate.TranslateElement.InlineLayout.SIMPLE
      }
      const langOptionsID='google_translate_element';
      new google.translate.TranslateElement(config,langOptionsID);
    }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
</html>