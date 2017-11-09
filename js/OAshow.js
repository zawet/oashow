$(function () {

    var vl = new Swiper('.os-box', {
        direction: 'vertical',
        loop: true,
        lazyLoading : true,
        onSlideChangeEnd: function (s) {
            $(".os-box .swiper-slide .os-min").removeClass("animated").hide();
            am($(".swiper-slide.swiper-slide-active").attr("ids"));
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

function am(id) {
    //console.log(id);
    $(".os-box .swiper-slide.swiper-slide-active .os-min").show().addClass("animated");
    $(".os-box #office .swiper-slide-active .os-min").hide().removeClass("animated");
    if(id=="index"||id==undefined){
        $("#"+id+" .title1").addClass("fadeInLeft");
        $("#"+id+" .title2").addClass("fadeInRight");
        $("#"+id+" .mainpng").addClass("fadeIn").addClass("yc15");
        $("#"+id+" .title3").addClass("fadeInUp").addClass("yc2");
    }
    if(id=="list"){
        $("#"+id+" .listtop").addClass("fadeIn");
        $("#"+id+" .list-one").addClass("fadeInLeft");
        $("#"+id+" .list-two").addClass("fadeInRight").addClass("yc15");
        $("#"+id+" .list-three").addClass("fadeInLeft").addClass("yc2");
    }
    if(id=="desk"||id=="commun"||id=="mail"||id=="doc"||id=="flow"){
         $("#"+id+" .imgshow.sg").addClass("fadeInDown");
         $("#"+id+" .imgshow.db").each(function(i){
             $(this).find(".imgshow-bg").eq(0).addClass("fadeInLeft");
             $(this).find(".imgshow-bg").eq(1).addClass("fadeInRight");
         })
         $("#"+id+" .imgtxt").addClass("flipInX").addClass("yc2");   
    }
    if(id=="office"){
        $(".os-box #office .swiper-slide-active .os-min").show().addClass("animated");
        $("#"+id+" .imgshow-bg").addClass("flipInY");
        $("#"+id+" .imgtxt").addClass("flipInX").addClass("yc15");
    }
    if(id=="end"||id==undefined){
        $("#"+id+" .endtitle").addClass("fadeInDown");
        $("#"+id+" .endlogo").addClass("fadeInUp").addClass("yc20");
        $("#"+id+" .endinfo").addClass("fadeInUp").addClass("yc30");

    }

}

function st(id, i) {
    id.slideTo(i, 100);
}

$(window).on('resize', function () {});