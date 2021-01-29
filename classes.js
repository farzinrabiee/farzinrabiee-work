class HtmlUi {

    showIndicator(ele) {
        let width = $(ele).outerWidth(true)
        let left = $(ele).position().left
        $('.indicator').css({
            width: width,
            left: left
        })
    }

    showIndicatorwork(ele){
        let width = $(ele).outerWidth(true)
        let left = $(ele).position().left
        $('.indicator-works').css({
            width: width,
            left: left
        })

    }

    hideIndicator() {
        $('.indicator').css({
            width: 0,
        })
    }




    translateLabel(label, inputVal) {
        $(label).addClass('move')
        if (inputVal.val() == "") {
            $(label).removeClass('move')


        }


    }







}