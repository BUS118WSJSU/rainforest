$(document).ready(
    $( function() {
        var pages = [
          {
            value: "Get Involved",
            label: "Get Involved",
            desc: "<a href=\"GetInvolved.html\">Get Involved</a>",
          },
          {
            value: "Our Stories",
            label: "Our Stories",
            desc: "<a href=\"OurStories.html\">Our Stories</a>",
          },
          {
            value: "Our Experts",
            label: "Our Experts",
            desc: "<a href=\"OurExperts.html\">Our Experts</a>",
          },
          {
            value: "Our Work",
            label: "Our Work",
            desc: "<a href=\"OurWork.html\">Our Work</a>",
          },
          {
            value: "Donate",
            label: "Donate",
            desc: "<a href=\"Donate.html\">Donate</a>",
          }
        ];

        $( "#search" ).autocomplete({
          minLength: 0,
          source: pages,
          focus: function( event, ui ) {
            $( "#search" ).val( ui.item.label );
            return false;
          },
          select: function( event, ui ) {
            $( "#search" ).val( ui.item.label );
            $( "#search-results" ).html( ui.item.desc );
            return false;
          }
        })
        .autocomplete( "instance" )._renderItem = function( ul, item ) {
          return $( "<br><li>" )
            .append( "<div style=\"border:1px solid black;background-color:#fdfbf8\">" + item.desc + "</div>" )
            .appendTo( ul );
        };
      } )
);