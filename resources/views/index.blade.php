<!DOCTYPE html>
<html lang="en">
  <head>
		<meta charset="utf-8" />
		<title>Metronic | Dashboard</title>
		<meta name="description" content="Latest updates and statistic charts">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
		<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js" ></script>
        <link rel="stylesheet" href="{{asset('/assets/vendors/base/vendors.bundle.rtl.css')}}" id="rtlDirection">
        <link rel="stylesheet" href="{{asset('/assets/vendors/base/vendors.bundle.css')}}" id="LtrDirection">
        <link rel="stylesheet" href="{{asset('/assets/demo/default/base/style.bundle.css')}}">
        <link rel="stylesheet" href="{{asset('/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css')}}">
        <link rel="stylesheet" href="{{asset('/assets/demo/default/media/img/logo/favicon.ico')}}">
		<!--begin::Web font -->
		<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
		<script>
			WebFont.load({
            google: {"families":["Poppins:300,400,500,600,700","Roboto:300,400,500,600,700"]},
            active: function() {
                sessionStorage.fonts = true;
            }
          });
        </script>



		<!--end::Web font -->

		<!--begin::Global Theme Styles -->

		<!--RTL version:<link href="assets/vendors/base/vendors.bundle.rtl.css" rel="stylesheet" type="text/css" />-->

	</head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
	</div>
    <script src="{{ mix('js/main.js') }}"></script>
	<link rel="stylesheet" id="m" href="{{asset('/assets/demo/default/base/style.bundle.css')}}">
    <link rel="stylesheet" href="" id="rtlDir">
    <link rel="stylesheet" id="vendorRtl" href="{{asset('/assets/vendors/base/vendors.bundle.css')}}">

    <link rel="stylesheet" href="" id="ltfDir">

    <link rel="stylesheet" href="{{asset('/assets/vendors/custom/fullcalendar/fullcalendar.bundle.css')}}">
    <link rel="stylesheet" href="{{asset('/assets/demo/default/media/img/logo/favicon.ico')}}">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.2/axios.min.js">
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
		
  </body>
</html>
