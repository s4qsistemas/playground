$('#enviar').on('click', function() {
    alert('Mensaje de Confirmación');
    $('#myModal').on('hidden.bs.modal', function (e) {
        $('#myModal').find("input[type=text], input[type=email], textarea").val("");
    })
});