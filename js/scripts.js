var stressSignScore = 0;
var stressSymptomScore = 0;
var stressCopingScore = 0;
var stressScore = 0;


$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();




    $("input:checkbox[name=stress-signs]:checked").each(function(){
      stressSignScore = stressSignScore + 1;
      // var stressSignValue = $(this).val();

    });


    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      stressSymptomScore = stressSymptomScore + 1;
      // var stressSymptomValue = $(this).val();

    });


    $("input:checkbox[name=stress-coping]:checked").each(function(){
      stressCopingScore = stressCopingScore - 1;
      // var stressCopingValue = $(this).val();

    });

    stressScore = stressSignScore + stressSymptomScore + stressCopingScore;

    if (stressScore >= 5) {
      $("#stress-response").show();
    } else if (stressScore >= 0 && stressScore < 5) {
      $("#neutral-response").show();
    } else if (stressScore < 0) {
      $("#calm-response").show();
    }

    $('#stress-survey').hide();
  });

});
