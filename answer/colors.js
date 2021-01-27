var Body = {
    setColor: function (color) {
        // jQuery 이전
        // document
        //     .querySelector('body')
        //     .style
        //     .color = color;
        // jQuery
        $('body').css('color',color);
    },
    setBackgroundColor: function (color) {
        // jQuery 이전
        // document
        //     .querySelector('body')
        //     .style
        //     .backgroundColor = color;
        // jQuery
        $('body').css('backgroundColor',color);
    }

}
var Links = {
    setColor: function (color) {
        //jQuery 사용이전
        // var a_list = document.querySelectorAll('a');
        // for (var i = 0; i < a_list.length; i++) {
        //     a_list[i].style.color = color;
        // }
        //jQuery 사용
        $('a').css('color',color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'Night') {
        Body.setBackgroundColor('black')
        Body.setColor('white');
        self.value = 'Day';
        Links.setColor('yellow');
    } else {
        Body.setBackgroundColor('white')
        Body.setColor('black');
        self.value = 'Night';
        Links.setColor('blue');
    }
}