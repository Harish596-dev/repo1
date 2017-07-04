# Guide to Web Design (Beginner)

## Table of Content
### Outline/PortFolio
1. [outline.html](https://github.com/yclim95/GuidetoWebDesign/blob/master/outline.html)
2. [layout.html](https://github.com/yclim95/GuidetoWebDesign/blob/master/all/html/layout.html)

### PortFolio
1. [PortFolio](https://github.com/yclim95/GuidetoWebDesign/tree/master/PortFolio)

### Lesson
1. [Lesson01](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson01)
2. [Lesson02](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson02)
3. [Lesson03](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson03)
4. [Lesson04](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson04/ReferenceList)
5. [Lesson05](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson05)
6. [Lesson06](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson06)
7. [Lesson07](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson07)
8. [Lesson08](https://github.com/yclim95/GuidetoWebDesign/tree/master/Lesson08)

### LabTest
1. [LabTest01](https://github.com/yclim95/GuidetoWebDesign/tree/master/LabTest01)


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
    <link href="../../all/image/logo.ico" rel="shortcut icon"/>
  	<title>PortFolio</title>
  	<meta name="keywords" content="Reference List" />
  	<meta name="description" content="FEST026 Web Design" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  	<link rel="stylesheet" href="../../all/css/layout.css" type="text/css" />
    <link rel="stylesheet" href="../css/style.css" type="text/css" />
  </head>

  <body>

    <div class="header">
      <div class="topnav" id = "myTopNav">
        <a class = "logo" href = "./index.html" onclick="window.open(this.href, '_blank');return false;"></a>
        <a href = "./index.html" onclick="window.open(this.href, '_blank');return false;">Home</a>
        <a href = "" onclick="window.open(this.href, '_blank');return false;">Chapter</a>

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
    <script type = "text/javascript" src="../../all/js/menu.js"></script>
  </body>

</html>


```

**<a> tag open in new tab**
```html
<!-- HTML -->
<a
href="http://www.cybermilitia.net"
title="Cyber Militia"
target="_blank">
The most awesome site !
</a>

<!-- XHTML1.0 Strict -->
<a
href="http://www.cybermilitia.net"
title="Cyber Militia"
onclick="window.open(this.href, '_blank');return false;">
The most awesome site !
</a>
```
