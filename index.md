<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
		<title>Pictures 2014</title>
		<script src="https://d3js.org/d3.v4.min.js"></script>
	</head>
	<body>
		<h1 align="center">Pictures 2014</h1>
		<div align="center" margin-top='20px'>
			<div class="btn-group">
			  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EXIF features</button>
			  <div class="dropdown-menu">
				<a class="dropdown-item" href="#" id="EXIF CVAPattern">EXIF CVAPattern</a>
				<a class="dropdown-item" href="#" id="EXIF Contrast">EXIF Contrast</a>
				<a class="dropdown-item" href="#" id="EXIF CustomRendered">EXIF CustomRendered</a>
				<a class="dropdown-item" href="#" id="EXIF DateTimeDigitized">EXIF DateTimeDigitized</a>
				<a class="dropdown-item" href="#" id="EXIF DateTimeOriginal">EXIF DateTimeOriginal</a>
				<a class="dropdown-item" href="#" id="EXIF DigitalZoomRatio">EXIF DigitalZoomRatio</a>
				<a class="dropdown-item" href="#" id="EXIF ExposureBiasValue">EXIF ExposureBiasValue</a>
				<a class="dropdown-item" href="#" id="EXIF ExposureMode">EXIF ExposureMode</a>
				<a class="dropdown-item" href="#" id="EXIF ExposureProgram">EXIF ExposureProgram</a>
				<a class="dropdown-item" href="#" id="EXIF ExposureTime">EXIF ExposureTime</a>
				<a class="dropdown-item" href="#" id="EXIF FNumber">EXIF FNumber</a>
				<a class="dropdown-item" href="#" id="EXIF FileSource">EXIF FileSource</a>
				<a class="dropdown-item" href="#" id="EXIF Flash">EXIF Flash</a>
				<a class="dropdown-item" href="#" id="EXIF FocalLength">EXIF FocalLength</a>
				<a class="dropdown-item" href="#" id="EXIF FocalLengthIn35mmFilm">EXIF FocalLengthIn35mmFilm</a>
				<a class="dropdown-item" href="#" id="EXIF GainControl">EXIF GainControl</a>
				<a class="dropdown-item" href="#" id="EXIF ISOSpeedRatings">EXIF ISOSpeedRatings</a>
				<a class="dropdown-item" href="#" id="EXIF LightSource">EXIF LightSource</a>
				<a class="dropdown-item" href="#" id="EXIF MakerNote">EXIF MakerNote</a>
				<a class="dropdown-item" href="#" id="EXIF MaxApertureValue">EXIF MaxApertureValue</a>
				<a class="dropdown-item" href="#" id="EXIF MeteringMode">EXIF MeteringMode</a>
				<a class="dropdown-item" href="#" id="EXIF Saturation">EXIF Saturation</a>
				<a class="dropdown-item" href="#" id="EXIF SceneCaptureType">EXIF SceneCaptureType</a>
				<a class="dropdown-item" href="#" id="EXIF SceneType">EXIF SceneType</a>
				<a class="dropdown-item" href="#" id="EXIF SensingMethod">EXIF SensingMethod</a>
				<a class="dropdown-item" href="#" id="EXIF SensitivityType">EXIF SensitivityType</a>
				<a class="dropdown-item" href="#" id="EXIF Sharpness">EXIF Sharpness</a>
				<a class="dropdown-item" href="#" id="EXIF SubSecTime">EXIF SubSecTime</a>
				<a class="dropdown-item" href="#" id="EXIF SubSecTimeDigitized">EXIF SubSecTimeDigitized</a>
				<a class="dropdown-item" href="#" id="EXIF SubSecTimeOriginal">EXIF SubSecTimeOriginal</a>
				<a class="dropdown-item" href="#" id="EXIF SubjectDistanceRange">EXIF SubjectDistanceRange</a>
				<a class="dropdown-item" href="#" id="EXIF UserComment">EXIF UserComment</a>
				<a class="dropdown-item" href="#" id="EXIF WhiteBalance">EXIF WhiteBalance</a>
			  </div>
			</div>
			<div class="btn-group">
			  <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Image features</button>
			  <div class="dropdown-menu">
				<a class="dropdown-item" href="#" id="Image ApplicationNotes">Image ApplicationNotes</a>
				<a class="dropdown-item" href="#" id="Image Artist">Image Artist</a>
				<a class="dropdown-item" href="#" id="Image BitsPerSample">Image BitsPerSample</a>
				<a class="dropdown-item" href="#" id="Image Compression">Image Compression</a>
				<a class="dropdown-item" href="#" id="Image Copyright">Image Copyright</a>
				<a class="dropdown-item" href="#" id="Image DateTime">Image DateTime</a>
				<a class="dropdown-item" href="#" id="Image DateTimeOriginal">Image DateTimeOriginal</a>
				<a class="dropdown-item" href="#" id="Image ExifOffset">Image ExifOffset</a>
				<a class="dropdown-item" href="#" id="Image GPSInfo">Image GPSInfo</a>
				<a class="dropdown-item" href="#" id="Image ImageLength">Image ImageLength</a>
				<a class="dropdown-item" href="#" id="Image ImageWidth">Image ImageWidth</a>
				<a class="dropdown-item" href="#" id="Image Make">Image Make</a>
				<a class="dropdown-item" href="#" id="Image Model">Image Model</a>
				<a class="dropdown-item" href="#" id="Image Orientation">Image Orientation</a>
				<a class="dropdown-item" href="#" id="Image PhotometricInterpretation">Image PhotometricInterpretation</a>
				<a class="dropdown-item" href="#" id="Image PlanarConfiguration">Image PlanarConfiguration</a>
				<a class="dropdown-item" href="#" id="Image ReferenceBlackWhite">Image ReferenceBlackWhite</a>
				<a class="dropdown-item" href="#" id="Image ResolutionUnit">Image ResolutionUnit</a>
				<a class="dropdown-item" href="#" id="Image RowsPerStrip">Image RowsPerStrip</a>
				<a class="dropdown-item" href="#" id="Image SamplesPerPixel">Image SamplesPerPixel</a>
				<a class="dropdown-item" href="#" id="Image Software">Image Software</a>
				<a class="dropdown-item" href="#" id="Image StripByteCounts">Image StripByteCounts</a>
				<a class="dropdown-item" href="#" id="Image StripOffsets">Image StripOffsets</a>
				<a class="dropdown-item" href="#" id="Image SubfileType">Image SubfileType</a>
				<a class="dropdown-item" href="#" id="Image Tag 0x014A">Image Tag 0x014A</a>
				<a class="dropdown-item" href="#" id="Image Tag 0x9216">Image Tag 0x9216</a>
				<a class="dropdown-item" href="#" id="Image XResolution">Image XResolution</a>
				<a class="dropdown-item" href="#" id="Image YResolution">Image YResolution</a>
			  </div>
			</div>
		</div>	
	
		<div>
			<svg width="600" height="500"></svg>
		</div>
	
	<script src="Fotos2014.js"></script>	
	
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>			
	</body>
</html>