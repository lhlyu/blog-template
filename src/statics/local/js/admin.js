$(function(){
    $(document).on("click",".yu-admin-menu-btn",function () {
        var hasHide = $(".yu-admin-slide").hasClass("mhide");
        if(hasHide){
            $(".yu-admin-slide").removeClass("mhide");
            $(".yu-admin-right").removeClass("mhide");
            $(".yu-admin-menu-btn i").removeClass("icon-menuon");
            $(".yu-admin-menu-btn i").addClass("icon-menuoff");
        }else{
            $(".yu-admin-slide").addClass("mhide");
            $(".yu-admin-right").addClass("mhide");
            $(".yu-admin-menu-btn i").removeClass("icon-menuoff");
            $(".yu-admin-menu-btn i").addClass("icon-menuon");
        }
    })
})