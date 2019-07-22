$(function(){

    $(document).on('click',".yu-menu-btn",function(){
        var hasShow = $(".yu-header-m-slide").hasClass("show");
        if(hasShow){
            $(".yu-header-m-slide").removeClass("show");
            $(".yu-header-m-main").removeClass("show");
            $(".yu-main").removeClass("show");
            $("footer").removeClass("show");
            $(".yu-menu-btn i").removeClass("icon-menuoff");
            $(".yu-menu-btn i").addClass("icon-menuon");
        }else{
            $(".yu-header-m-slide").addClass("show");
            $(".yu-header-m-main").addClass("show");
            $(".yu-main").addClass("show");
            $("footer").addClass("show");
            $(".yu-menu-btn i").removeClass("icon-menuon");
            $(".yu-menu-btn i").addClass("icon-menuoff");
        }
    });

    $(document).on('click',".yu-search",function(){
        var hasHide = $(".yu-modal-search").hasClass("hide");
        if(hasHide){
            $(".yu-modal-search").removeClass("hide");
            $(".yu-shadow").removeClass("hide");
        }
    });

    $(document).on('click',".yu-modal-search-close",function(){
        var hasHide = $(".yu-modal-search").hasClass("hide");
        if(!hasHide){
            $(".yu-modal-search").addClass("hide");
            $(".yu-shadow").addClass("hide");
        }
    });

    $(document).on('click',".yu-shadow",function(){
        $(".yu-modal-search-close").click()
    });

    $(document).on('click',".yu-more",function(){
        window.location.href = "./article.html"
    });

    $(document).keypress(function(e) {
        var hasHide = $(".yu-modal-search").hasClass("hide");
        if(!hasHide){
            // 回车键事件
            if(e.which == 13) {
                alert($(".keyword").val())
            }
        }
    });


    $(document).on('click',".yu-gotop",function(){
        $('html,body').animate({scrollTop: 0}, 500);
    });

    $(window).scroll(function(e){
        if($(window).scrollTop() >= 300){
            $('.yu-gotop').removeClass("hide")
        }else{
            $('.yu-gotop').addClass("hide")
        }
    });
});