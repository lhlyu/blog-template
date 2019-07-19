$(function(){

    $(document).on('click',".yu-menu-slide",function(){
        var hasShow = $(".yu-slide").hasClass("show");
        if(hasShow){
            $(".yu-slide").removeClass("show");
            $(".yu-header-main").removeClass("show");
        }else{
            $(".yu-slide").addClass("show");
            $(".yu-header-main").addClass("show");
        }
    });

    $(document).on('click',".yu-search",function(){
        var hasHide = $(".yu-pop-search").hasClass("hide");
        if(hasHide){
            $(".yu-pop-search").removeClass("hide");
            $(".yu-shadow").removeClass("hide");
        }
    });

    $(document).on('click',".yu-search-close",function(){
        var hasHide = $(".yu-pop-search").hasClass("hide");
        if(!hasHide){
            $(".yu-pop-search").addClass("hide");
            $(".yu-shadow").addClass("hide");
        }
    });

    $(document).on('click',".yu-shadow",function(){
        $(".yu-search-close").click()
    });

    $(document).keypress(function(e) {
        var hasHide = $(".yu-pop-search").hasClass("hide");
        if(!hasHide){
            // 回车键事件
            if(e.which == 13) {
                alert($(".keyword").val())
            }
        }
    });

});