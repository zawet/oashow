
var manifest;
var preload;

$(function () {
    setupManifest();
    startPreload();
});

function toStart(){
    console.log(preload._loadItemsById);
    var imgids=preload._loadItemsById
    setImg(imgids);

    var vl = new Swiper('.os-box', {
        direction: 'vertical',
        //loop: true,
        //initialSlide :7,
        onTransitionStart: function (swiper) {
            am(swiper.activeIndex);
        },
        onTransitionEnd: function (swiper) {
            $(".os").eq(swiper.activeIndex).show().addClass("animated").siblings().find(".os-min").removeClass("animated").hide();
        }
    });

    $(".backlist").click(function () {
        st(vl, 1);
    });
    $(".list-sig").click(function () {
        if ($(this).hasClass("desk") || $(this).hasClass("desk2")) st(vl, 2);
        if ($(this).hasClass("commun") || $(this).hasClass("commun2")) st(vl, 3);
        if ($(this).hasClass("mail")) st(vl, 4);
        if ($(this).hasClass("doc")) st(vl, 5);
        if ($(this).hasClass("flow")) st(vl, 6);
        if ($(this).hasClass("office")) st(vl, 7);
    });

    var mySwiper3 = new Swiper('#swiper-container3', {
        effect: 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflow: {
            slideShadows: false
        }
    });
}

function setImg(obj){
    for(var key in obj){
        console.log(key);
        if(key=="indexbg"){
            //console.log(obj[key].src);
            $(".os").css("background-image","url("+obj[key].src+")");
        }else if(key=="huan-line"||key=="qkylogo"||key=="downicon"){
            //console.log(obj[key].src);
            $("."+key).html('<img src="'+obj[key].src+'"/>');
        }else{
            $("."+key).html(preload.getResult(key));
        }
    }  
}

//定义相关JSON格式文件列表
function setupManifest() {
    onemf= [
        {src: "images/qky-logo.png",id: "qkylogo"},
        {src: "images/down.png",id: "downicon"},

        {src: "images/index/title01.png",id: "title1"},
        {src: "images/index/title02.png",id: "title2"},
        {src: "images/index/title02.png",id: "title3"},
        {src: "images/sigbg.png",id: "indexbg"},
        {src: "images/index/mian.png",id: "mian"},
        {src: "images/index/huanline.png",id: "huan-line"}
    ];   
}


//开始预加载
function startPreload() {
    preload = new createjs.LoadQueue(true);
    //preload.on("fileload", handleFileLoad);
    preload.on("progress", handleFileProgress);
    preload.on("complete", loadComplete);
    preload.on("error", loadError);
    preload.loadManifest(onemf);

}

//处理单个文件加载
function handleFileLoad(event) {
    console.log("文件类型: " + event.item.type);
    if (event.item.id == "logo") {
        console.log("logo图片已成功加载");
    }
}

//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！", evt.text);
}

//已加载完毕进度 
function handleFileProgress(event) {
    var p=preload.progress * 100 | 0;
    //console.log( "已加载 " + (preload.progress * 100 | 0) + " %");
    //$(".loadprogress .progresszi b").css("width",p + "%");
    $(".bf").html(p + "%");
    if(p<=50){
         $(".pro.proright b").css("transform","rotateZ("+(p*3.6+225)+"deg)");
     }else{
         $(".pro.proleft b").css("transform","rotateZ("+(p*3.6+45)+"deg)");
    }
    
}

//全度资源加载完毕
function loadComplete(event) {
    $(".loadprogress").fadeOut(200);
    toStart();
   
}

function am(si) {
    $(".os.swiper-slide-active .os-min").show().addClass("animated");
    var sid = $(".os.swiper-slide-active").attr("id");
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
    if (si >= 2 && si <= 6) {
        $("#" + sid + " .imgshow.sg").addClass("fadeInDown");
        $("#" + sid + " .imgshow.db").each(function (i) {
            $(this).find(".imgshow-bg").eq(0).addClass("fadeInLeft");
            $(this).find(".imgshow-bg").eq(1).addClass("fadeInRight");
        })
        $("#" + sid + " .imgtxt").addClass("flipInX").addClass("yc2");
    }
    if (si == 7) {
        $(".os-box #office .swiper-slside-active .os-min").show().addClass("animated");
        $("#" + sid + " .imgshow-bg").eq(0).addClass("flipInY");
        $("#" + sid + " .imgshow-bg").eq(1).addClass("fadeInLeft").addClass("yc20");
        $("#" + sid + " .imgshow-bg").eq(2).addClass("fadeInRight").addClass("yc20");
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


