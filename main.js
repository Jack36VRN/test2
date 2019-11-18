
$('#category').change(getdetails());
$('#slider-range-power').change(getdetails());

function getdetails(){


	var category = $('#category').val();
	var type_compressor = $('input[name="type_compressor[]"]:checked').val();
	var type_oil_checked = $('input[name="type_oil[]"]:checked');
	var engine_capacity_st = $('input[name="engine_capacity_st"]').val();
	var engine_capacity_en = $('input[name="engine_capacity_en"]').val();
	var performance_st = $('input[name="performance_st"]').val();
	var performance_en = $('input[name="performance_en"]').val();


	var type_oil = [];

	for (var x=0; x<type_oil_checked.length;x++){ 
		type_oil.push(type_oil_checked[x].value); 
	}

	if (type_oil_checked.length == 0 || (type_oil_checked.length == 1 && type_oil_checked.val() == 'all') || type_oil.indexOf( 'all' ) != -1) type_oil = 'all';


	$.ajax({
		type: "POST",
		url: "show.php",
		data: {
			cat: category,
			type_compressor: type_compressor,
			type_oil: type_oil,
			engine_capacity_st: engine_capacity_st,
			engine_capacity_en: engine_capacity_en,
			performance_st: performance_st,
			performance_en: performance_en,
		}
	}).done(function( data )
	{
		$("#msg").html( data );
	});
}