$(function(){
    console.log(1)
    $(document).on('click',".yu-menu-slide",function(){
        console.log("click")
        var hasShow = $(".yu-slide").hasClass("show");
        console.log("hasShow = ",hasShow)
        if(hasShow){
            $(".yu-slide").removeClass("show");
            $(".yu-header-main").removeClass("show");
        }else{
            $(".yu-slide").addClass("show");
            $(".yu-header-main").addClass("show");
        }
    });
});