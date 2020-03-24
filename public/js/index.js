$(document).ready(function (){

    $(document).on('change', '#fileUpload', function(e){
        var formData = new FormData();
        formData.append('mp4_file', $('#fileUpload')[0].files[0]);
        
        $.ajax({
            type: 'POST',
            enctype: 'multipart/form-data',
            url: 'http://52.141.7.91:8200/emotion_detection/',
            processData: false,
            contentType: false,
            data: formData,
            success: function(res) {
                console.log(res['fileName']);
                $('#video > source').attr('src', 'http://52.141.7.91:8800/mp4/' + res['fileName']);
                $('#video').load();
                document.getElementById("video").play();
            }
        });
    });

});