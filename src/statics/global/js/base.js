$(function(){

    $(document).on('click',".yu-menu-btn",function(){
        var hasShow = $(".yu-header-m-slide").hasClass("show");
        console.log(hasShow)
        if(hasShow){
            $(".yu-header-m-slide").removeClass("show");
            $(".yu-header-m-main").removeClass("show");
        }else{
            $(".yu-header-m-slide").addClass("show");
            $(".yu-header-m-main").addClass("show");
        }
    });

    $(document).on('click',".yu-search",function(){
        var hasHide = $(".yu-pop-search").hasClass("hide");
        if(hasHide){
            $(".yu-pop-search").removeClass("hide");
            $(".yu-shadow").removeClass("hide");
        }
    });

    $(document).on('click',".yu-modal-search-close",function(){
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