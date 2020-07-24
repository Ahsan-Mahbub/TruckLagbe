$(document).ready(function () {
    datalist();

    // $(document).on('change', '#division_name', function () {
    //     let data = $(this).val();

    //     $.ajax({
    //         url: "/admin/posts/division/" + data,
    //         type: "get",
    //         dataType: "json",
    //         success: function (response) {
    //             let b = $();
    //             $.each(response.data, function (i, item) {
    //                 b = b.add("<option value=" + item.district_id + ">" + item.district_name + "</option>")
    //             });
    //             $("#district_name").html(b);
    //         }
    //     })
    // });

    // $(document).on('change', '#district_name', function () {
    //     let data = $(this).val();

    //     $.ajax({
    //         url: "/admin/posts/district/" + data,
    //         type: "get",
    //         dataType: "json",
    //         success: function (response) {
    //             let b = $();
    //             $.each(response.data, function (i, item) {
    //                 b = b.add("<option value=" + item.upzilla_id + ">" + item.upzilla_name + "</option>")
    //             });
    //             $("#upzilla_name").html(b);
    //         }
    //     })
    // });
    $("#data_lists").on("click", ".page-link", function (e) {
        e.preventDefault();
        let page_link = $(this).attr('href');
        datalist(page_link);
    });

    $(document).on("keyup", ".search", function () {
        datalist();
    });

    function datalist(page_link = "/admin/list") {
        let search = $(".search").val();

        $.ajax({
            url: page_link,
            data: {search: search},
            type: "get",
            datatype: "html",
            success: function (response) {
                $("#data_lists").html(response);
            }
        })
    }
})