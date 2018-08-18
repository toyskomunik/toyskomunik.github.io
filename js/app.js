/*const pictures = [
    'img/21107407_1452572824822618_1406297881849102336_n.jpg',
    'img/21149736_504061336604528_7326814684823158784_n.jpg',
    'img/25008862_1560443747373707_7245417057334853632_n.jpg',
    'img/25016977_583382015331034_38518830078623744_n.jpg',
    'img/25022385_1652647171422462_7642170347839553536_n.jpg',
    'img/26073216_139196253426358_2092047220915306496_n.jpg',
];

function bgAnimation(init, interval) {

    const ele = $(init.ele);

    $.preLoad(pictures).then(function () {

        const imgChange = ele.bgChange(pictures, init);
              imgChange.change();
        let timer = interval(imgChange);
        let changeFlag = false;

        ele.on('click', function () {
            if (changeFlag) return;
            changeFlag = true;
            clearInterval(timer);
            imgChange.change();

            clearInterval(timer);
            timer = interval(imgChange);
        });

        ele.on('changeStart', function () {
            changeFlag = true;
        });

        ele.on('changeEnd', function () {
            changeFlag = false;
        });

    });
}

function interval(time) {
    return function (changeEle) {
        return setInterval(function () {
            changeEle.change();
        }, time);
    }
}*/

// bgAnimation({ele: '#bgPicture'}, interval(10000));

$(function() {
    $('.jump').html(`<span>${$('.jump').text().split('').join('</span><span>')}</span>`);  
});