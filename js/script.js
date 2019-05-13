$(document).ready(function () {
  $('.carousel').carousel()

  // scroll on windows
  let _window = $(window)
  _window.scroll(function () {
    'use strict'

    let btnScroll = $('.btn-scroll')
    let navbarDefault = $('.navbar-default')
    if (_window.scrollTop() > 50) {
      navbarDefault.css({
        'background-color': '#34495e'
      })
    }
    if (_window.scrollTop() < 600) {
      btnScroll.css({
        'opacity': '0'
      })
    } else {
      btnScroll.css({
        'opacity': '1'
      })
    }
  })

  // smooth scroll
  $('.nav-scroll').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000)
        return false
      }
    }
  })

  let navbar = $('.navbar-nav')
  // active menu when on click navbar
  $('.navbar-nav .nav-item a').click(function () {
    let _this = $(this)
    navbar.find('.active').removeClass('active')
    _this.parent().addClass('active')
  })

  // click button scroll top and logo 
  function navClickGoHome(object) {
    $(object).click(function () {
      navbar.find('.active').removeClass('active')
      navbar.find("a[href='#home']").addClass('active')

    })
  }
  navClickGoHome('.btn-scroll a')
  navClickGoHome('.nav-logo')

  // highlight menu item on scroll

  $(window).scroll(function () {
    let winScroll = $(window).scrollTop();
    if (winScroll < 500) {
      navbar.find('.active').removeClass('active')
      navbar.find("a[href='#home']").addClass('active')
    } else {
      $('section').each(function () {
        let _this = $(this);
        let id = _this.attr('id')
        let height = _this.outerHeight();
        let grtop = _this.offset().top - height / 4;

        if (winScroll > grtop && winScroll < grtop + height) {
          if (id != undefined) {
            navbar.find('.active').removeClass('active')
          }
          navbar.find("a[href='#" + id + "']").addClass('active')
        }

      })
    }

  })
})


// counter
$('.counter-download').counterUp({
  delay: 10,
  time: 1000
});
$('.counter-gift').counterUp({
  delay: 10,
  time: 1000
});
$('.counter-heart').counterUp({
  delay: 10,
  time: 1000
});
$('.counter-recomended').counterUp({
  delay: 10,
  time: 1000
});


// wow
new WOW().init();