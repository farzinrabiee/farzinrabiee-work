// varible
let prevPos = 0;


// object
let htmlUi = new HtmlUi();




$(document).ready(function () {


        $(".loadind").fadeOut(1000);




// event---------------------------

    // mouseEnter for show indicator
    $('.navbar-nav li').mouseenter(function () {
        htmlUi.showIndicator(this)

    })

    // mouseLeave for show indicator
    $('.navbar-nav li').mouseleave(function () {
        htmlUi.hideIndicator(this)
    })

// click for show indicator
    $('.works-filter li').click(function (e) {
        e.preventDefault();
        htmlUi.showIndicatorwork(this)
    })


// click evetn for show input search
    $('.search-icon i').click(function () {
        $('.search-input').toggleClass('show')
    })

    // click event for show menu responsive
    $('.menu-icon,.overlay-menu').click(function () {
        $('.menu-icon').toggleClass('active')
        $('#navbar-nav2').toggleClass('active')
        $('.overlay-menu').toggleClass('active')
    })
// click event in nav link for hide menu
    $('.nav-link').click(function () {
        $('#navbar-nav2').removeClass('active')
        $('.overlay-menu').removeClass('active')
        $('.menu-icon').removeClass('active')

    })


    // scrol event for hide and show menu and account icon
    $(window).scroll(function (e) {

        let currentPos = $(window).scrollTop()

// if for hide and show menu
        if (prevPos < currentPos && currentPos > 300) {
            $('#headerNav').addClass('hide')

        } else {
            $('#headerNav').removeClass('hide')

        }
        prevPos = currentPos;


// if for hide and show account icon
        if ($(window).scrollTop() > 90) {
            $('.account-icon').addClass('hide')
        } else {
            $('.account-icon').removeClass('hide')

        }
    })

    // click event for show and hide basket buy
    $('.buy-icon,.basket-overlay').click(function () {
        $('.basket-box').toggleClass('active')
        $('.basket-overlay').toggleClass('active')
        $('body').toggleClass('dis-scroll')

    })

    // click event for card buy
    $('.more-card').click(function (e) {
        e.preventDefault()
        let card = $(this).parents('.card-product')
        card.addClass('active')
        if (card.hasClass('inactive')) {
            card.removeClass('inactive')
        }

    })

    // click event for close card buy
    $('.card-overlay-back').click(function (e) {
        e.preventDefault()
        let card = $(this).parents('.card-product')
        card.addClass('inactive')
        if (card.hasClass('active')) {
            card.removeClass('active')
        }

    })


    $('.card-buy').click(function (e) {
        e.preventDefault();
        // accses card parent
        let card = $(this).parents('.card-product ')

        // accses info card
        let courseInfo = {
            image: card.find('.card-img-top').attr('src'),
            tittle: card.find('.card-title').text(),
            price: card.find('.price-footer span').text(),
            id: $(this).attr('data-id')
        }

        // append course info to basket buy
        $('#table-shop tbody').append(`
       <tr class="parent-Tr" >
            <td class=""><img src="${courseInfo.image}" alt="" width="50px"></td>    
            <td class="">${courseInfo.tittle}</td>   
            <td><p class="">${courseInfo.price}</p></td>   
            <td><a href="#" id="fara" class="removea" data-id="${courseInfo.id}">X</a></td>
        </tr>
    
    `)

        $('.t-table .removea').click(function (e) {
            e.preventDefault();
            let removeCourse = $(this).parents('.parent-Tr')
            let courseId = removeCourse.find('.removea').attr('data-id')

            removeCourse.remove()
            clearCourseOnLs(courseId)

        })
        $('.clear-all a').click(function (e) {
            e.preventDefault();
            $('tbody .parent-Tr').remove()

            clearFromLs()
        })
        saveToLocalStorage(courseInfo)
    })


    //functions

    function saveToLocalStorage(cInfo) {

        let courses = getLs();
        courses.push(cInfo)
        localStorage.setItem('course', JSON.stringify(courses))

    }


    function getLs() {
        let course;
        if (localStorage.getItem('course')) {
            course = JSON.parse(localStorage.getItem('course'))
        } else {
            course = []
        }
        return course

    }


    function showCoursesOnLoad() {
        let courseLs = getLs();
        courseLs.forEach(function (courseInfo) {

            $('#table-shop tbody').append(`
        <tr class="parent-Tr" >
             <td class=""><img src="${courseInfo.image}" alt="" width="50px"></td>
             <td class="">${courseInfo.tittle}</td>
             <td><p class="">${courseInfo.price}</p></td>
             <td><a href="#" id="fara" class="removea" data-id="${courseInfo.id}">X</a></td>
         </tr>
    
     `)
        })
        $('.t-table .removea').click(function (e) {
            e.preventDefault();
            let removeCourse = $(this).parents('.parent-Tr')
            let courseId = removeCourse.find('.removea').attr('data-id')

            removeCourse.remove()
            clearCourseOnLs(courseId)
        })
        $('.clear-all a').click(function (e) {
            e.preventDefault();
            $('tbody .parent-Tr').remove()
            clearFromLs()
        })
    }

    showCoursesOnLoad()


    function clearFromLs() {
        localStorage.clear()
    }

    function clearCourseOnLs(id) {
        let courseLs = getLs();
        courseLs.forEach(function (course, index) {
            if (course.id === id) {
                courseLs.splice(index, 1)
            }
            localStorage.setItem('course', JSON.stringify(courseLs))

        })


    }

// validate form for show errror
    $('#emailInput,#nameInput,#passInput').blur(function () {

        let el = $(this).attr('type')
        if ($(this).val().length > 0) {
            $(this).parents('.filed-wrraper').css({
                borderBottomColor: 'green'
            })
            $(this).removeClass('removeIn')

        } else {
            $(this).parents('.filed-wrraper').css({
                borderBottomColor: 'red'
            })
            $(this).addClass('removeIn')
        }


        if (el == 'email') {
            if ($(this).val().includes('@')) {
                $(this).parents('.filed-wrraper').css({
                    borderBottomColor: 'green'
                })
                $(this).removeClass('removeIn')
            } else {
                $(this).parents('.filed-wrraper').css({
                    borderBottomColor: 'red'
                })
                $(this).addClass('removeIn')


            }
        }


    })

// validate form for show btn sighn to form
    $('.filed-wrraper input').keyup(function () {
        let inputVal = $(this)
        let label = $(this).parents('.filed-wrraper').find('label')

        htmlUi.translateLabel(label, inputVal)
        let inputs = $('.filed-wrraper').find('.removeIn')

        if ($('#emailInput').val() !== '' && $('#passInput').val() !== '' && $('#nameInput').val() !== '' && $('#emailInput').val().includes('@')) {
            $('#btn-sign').removeClass('disabled')
        } else {
            $('#btn-sign').addClass('disabled')

        }
    })


    // click event for show and hide form creat account
    $('.account-icon').click(function () {
        $('.modal-overlay').removeClass('hide')
        $('.modal-overlay').toggleClass('active')
        $('body').addClass('dis-scroll')


    })

    $('.modal-overlay ,.close-btn').click(function (e) {
        if (e.target != this) {
            return
        }
        $('.modal-overlay').removeClass('active')
        $('.modal-overlay').addClass('hide')
        $('body').removeClass('dis-scroll')

    })
    $('.close-btn').click(function () {
        $('.modal-overlay').removeClass('active')
        $('.modal-overlay').addClass('hide')
        $('body').removeClass('dis-scroll')

    })


// filter img in section work
    $('.works-filter-btn').click(function (e) {
        e.preventDefault();

        $('.img-works').fadeOut(0)

        let attibute = $(this).attr('data-filter')

        if (attibute == 'all') {
            $('.img-works').fadeIn(400)

        } else {
            $(`.${attibute}`).fadeIn(400)

        }


    })


})

