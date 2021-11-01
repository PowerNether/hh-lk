$('.form-input__reset').on('click', function () {
    $(this).parent().find('input, textarea').val('');
});
$('select').formSelect();
$('.newObjectForm-select').on('click', function () {
    $(this).parent().find('.newObjectForm-list').addClass('newObjectForm-list__active');
});
$('.newObjectForm-item').on('click', function () {
    $(this).parent('.newObjectForm-list').children().removeClass('newObjectForm-item__active');
    let item = $(this).text();
    $(this).parents('.form-input').find('input').val(item);
    $(this).addClass('newObjectForm-item__active');
    $('.newObjectForm-select').parent().find('.newObjectForm-list').removeClass('newObjectForm-list__active');
});
$(document).on('click', function (e) {
    let target = e.target.getAttribute('class');
    if (target != $('.newObjectForm-select').attr('class') && target != $('.newObjectForm-title').attr('class')) {
        $('.newObjectForm-list').removeClass('newObjectForm-list__active');
    }
});
$('.header-burger').on('click', function () {
    $('.header-burger').toggleClass('active')
    if ($('.header-mobile').hasClass('active')) {
        $('.header-overlay').removeClass('active')
        $('.header-mobile').removeClass('active')
    } else {
        $('.header-mobile').addClass('active')
        $('.header-overlay').addClass('active')
    }
})
$('.siderbar-toggle').on('click', function () {
    $('.siderbar-toggle').toggleClass('active')
    if ($('.sidebar').hasClass('active')) {
        $('.sidebar-overlay').removeClass('active')
        $('.sidebar').removeClass('active')
    } else {
        $('.sidebar-overlay').addClass('active')
        $('.sidebar').addClass('active')
    }
})
$('.lots').on('click', function () {
    $(this).toggleClass('active')
    $(this).parents('tbody').toggleClass('open');
})
$('.day-more').click(function() {
    let amount = $(this).parent().find('.day-list').children().length - 2
    if ($(this).text() == `еще ${amount}`) {
        $(this).text('свернуть')
        $(this).parent().find('.day-list').css({
            'max-height': '100%',
            'padding': '0 0 20px'
        })
        $(this).parent().find('.day-item.hidden').css({
            display: 'flex',
        })
    } else {
        $(this).text(`еще ${amount}`)
        $(this).parent().find('.day-list').css({
            'max-height': '72px',
            'padding': '0 0 0'
        })
        $(this).parent().find('.day-item.hidden').css('display', 'none')
    }
})
$('.modal').modal();

$('.favorite-category__toggle').on('click', function() {
    let text = $(this).children('.favorite-category__title').text();
    $(this).children('.favorite-category__title').text(text == "Ещё коллекции" ? "Свернуть коллекции" : "Ещё коллекции");
    $(this).children('.favorite-category__select').toggleClass('rotate')
    $(this).parent().children('.hidden').toggleClass('visible');
});

$('.favorite-modal__new-select-item').on('click', function() {
    $('.favorite-modal__new-select-item').removeClass('active');
    $(this).addClass('active');
    $('.favorite-modal__new-text').text($(this).text());
    $('#newFavoriteArea').attr('value', $(this).text());
});
$('.notification-close').on('click', function() {
    let target = $(this).parents('.notification-item');
    target.animate({
        left: '-200%',
        opacity: 0,
    }, function() {
        target.remove();
    });
});

$('.favoriteControl').on('click', function() {
    $(this).toggleClass('open');
})

$('.widgetFavorite-item').on('click', function() {
    $('.widgetFavorite-item').removeClass('open')
    $(this).addClass('open');
})