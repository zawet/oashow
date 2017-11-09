$(function () {

    var vl = new Swiper('.os-box', {
        direction: 'vertical',
        //loop: true,
        //lazyLoading: true,
        onTransitionStart: function(swiper){
            am(swiper.activeIndex);
		},
		onTransitionEnd: function(swiper){
            $(".os").eq(swiper.activeIndex).show().addClass("animated").siblings().find(".os-min").removeClass("animated").hide();
            //console.log("end:"+swiper.activeIndex);
   		}
    });

    $(".backlist").click(function () {
        st(vl, 2);
    });
    $(".list-sig").click(function () {
        if ($(this).hasClass("desk") || $(this).hasClass("desk2")) st(vl, 3);
        if ($(this).hasClass("commun") || $(this).hasClass("commun2")) st(vl, 4);
        if ($(this).hasClass("mail")) st(vl, 5);
        if ($(this).hasClass("doc")) st(vl, 6);
        if ($(this).hasClass("flow")) st(vl, 7);
        if ($(this).hasClass("office")) st(vl, 8);
    });

    var mySwiper3 = new Swiper('#swiper-container3', {
        effect: 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflow: {
            slideShadows: false
        }
    });

});

function am(si) {
    $(".os.swiper-slide-active .os-min").show().addClass("animated");
    var sid=$(".os.swiper-slide-active").attr("id");
    //console.log(si,sid);
    if (si == 0) {
        $("#" + sid + " .title1").addClass("fadeInLeft");
        $("#" + sid + " .title2").addClass("fadeInRight");
        $("#" + sid + " .mainpng").addClass("fadeIn").addClass("yc15");
        $("#" + sid + " .title3").addClass("fadeInUp").addClass("yc2");
    }
    if (si == 1) {
        $("#" + sid + " .listtop").addClass("fadeIn");
        $("#" + sid + " .list-one").addClass("fadeInLeft");
        $("#" + sid + " .list-two").addClass("fadeInRight").addClass("yc15");
        $("#" + sid + " .list-three").addClass("fadeInLeft").addClass("yc2");
    }
    if (si >=2&&si<=6) {
        $("#" + sid + " .imgshow.sg").addClass("fadeInDown");
        $("#" + sid + " .imgshow.db").each(function (i) {
            $(this).find(".imgshow-bg").eq(0).addClass("fadeInLeft");
            $(this).find(".imgshow-bg").eq(1).addClass("fadeInRight");
        })
        $("#" + sid + " .imgtxt").addClass("flipInX").addClass("yc2");
    }
    if (si ==7) {
        $(".os-box #office .swiper-slside-active .os-min").show().addClass("animated");
        $("#" + sid + " .imgshow-bg").addClass("flipInY");
        $("#" + sid + " .imgtxt").addClass("flipInX").addClass("yc15");
    }
    if (si == 8) {
        $("#" + sid + " .endtitle").addClass("fadeInDown");
        $("#" + sid + " .endlogo").addClass("fadeInUp").addClass("yc20");
        $("#" + sid + " .endinfo").addClass("fadeInUp").addClass("yc30");
    }

}

function st(id, i) {
    id.slideTo(i, 100);
}

$(window).on('resize', function () {});