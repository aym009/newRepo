var myDragAndDrop = function() {
    var drag_id = null;
    var drag_onclick = null;

    $(".drag").draggable({
        zIndex: 9999,
        distance: 10,
        helper: 'clone',
        snap: true,
        start: function(event, ui) {
            drag_id = $(this).attr('id');
        },
        stop: function(event, ui) {
        }
    });

    $( ".drop" ).droppable({
        accept: ".drag",
        over: function( event, ui ) {
            $( this ).addClass( "over" );
        },
        out: function( event, ui ) {
            $( this ).removeClass( "over" );
        },
        drop: function( event, ui ) {
            $( this ).removeClass( "over" );

            var drop_id = $(this).attr('id');
            // drag_id,drop_idでドラッグ元、ドロップ先を判定して処理する
        }
    });
}

$(function(){
    myDragAndDrop();
});
