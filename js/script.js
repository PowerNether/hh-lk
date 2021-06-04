$('.form-input__reset').on('click', function () {
    $(this).parent().find('input, textarea').val('');
});
$('select').formSelect();