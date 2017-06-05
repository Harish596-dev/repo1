# Guide to Web Design (Beginner)

## Table of Content
1. [outline.html](https://github.com/yclim95/GuidetoWebDesign/blob/master/outline.html)
2. [layout.html]()

**outline.html**
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en"
>
	<head>
		<title>Add a title here</title>
		<meta http-equiv="content-type" content="text/html;charset=utf-8" />
	</head>

	<body>
		<p>Add some content here.</p>
	</body>

</html>
```

**layout.html**
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

  <head>
  	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link href="/images/cv.ico" rel="shortcut icon"/>
  	<title>Sample layout</title>
  	<meta name="keywords" content="" />
  	<meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<link rel="stylesheet" href="../../../all/css/layout.css" type="text/css" />
    <link rel = "stylesheet" type = "text/css" href = "../css/style.css" />
  </head>

  <body>
    <div class="header">
      <div class="topnav" id = "myTopNav">
        <a class = "logo"></a>
        <a href = "../../../Portfolio/html/index.html" target="_blank">Home</a>
        <a href = "" target="_blank">Chapter</a>

        <a href = "" >About</a>
        <a href = "javascript:void(0);" class = "icon">&#9776;</a>
      </div><!-- .Navigation-->
    </div><!-- .header-->


    <div class="wrapper">
      <div class="content">

      </div><!-- .content-->

    </div><!-- .wrapper -->

    <div class="footer">
      <p>&copy; by Lim Yao Cheng</p>
    </div><!-- .footer -->

    <!-- Script -->
    <script type = "text/javascript" src="../../../all/js/menu.js"></script>
  </body>

</html>

```
