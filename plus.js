document.addEventListener("DOMContentLoaded", function() {
       var videoLinksData = [{
         url: "https://shorturl.at/zAHQ2",
         name: "JUL-049 [Uncensored Leaked] I am obeying my younger brother's daughter-in-law who is fair-skinned and slender. - Even if I do vaginal cum shot, she is indifferent to me. - Kanon Kanon",
         logo: "https://static.javcdn.info/resize/s360/5/a5/jul-049-uncensored-leaked/thumb_h.jpg?t=1687688572",
         id: "JUL-049",
       }, {
         url: "https://javplayer.me/v/JKXOP4WK?poster=https%3A%2F%2Fstatic.javcdn.info%2Fimages%2Fe%2F2e%2Fipx-327%2Fthumb_h.jpg%3Ft%3D1654165194",
         name: "IPX-327 While My Husband Is Away, I Continue To Be Raped Until I Get Pregnant By My Father-In-Law Nanami Misaki",
         id: "IPX-327",
       }, {
         url: "https://javplayer.me/v/0KZQ119K?poster=https%3A%2F%2Fstatic.javcdn.info%2Fimages%2F8%2Fb8%2Fjul-543%2Fthumb_h.jpg%3Ft%3D16542",
         name: "JUL-543 After having child-making sex with my husband, my father-in-law continues to cum inside me. - Marina Shiraishi",
         id: "JUL-543",
       }, {
         url: "https://short.ink/GMV9GQvAl",
         name: "IPX-604",
         id: "IPX-604",
       }, {
         url: "https://short.ink/sM38IGqmb",
         name: "IPX-784 Minami Aizawa",
         id: "IPX-784",
       }, {
         url: "https://short.ink/fbPqwu9bg",
         name: "KK-043 Ponakanku Ternyata Udah Gede - Momoka",
         id: "KK-043",
       }, {
         url: "https://short.ink/CwMv0JhGW",
         name: "PGD-954 Sex Liar Bersama Paman si Tetangga Mesum - Meguri",
         id: "PGD-954",
       }, {
         url: "https://short.ink/kzqnylREu",
         name: "JUQ-176 from college. - Marina Shiraishi",
         id: "JUQ-176",
       }, ];
       var videoLinksContainer = document.getElementById('videoLinks');
       for (var i = 0; i < videoLinksData.length; i++) {
         (function(index) { // Create a closure to capture the current index
           var button = document.createElement('button');
           button.id = videoLinksData[index].id;
           button.textContent = videoLinksData[index].name;
           button.addEventListener('click', function() {
             var videoUrl = videoLinksData[index].url;
             var iframe = document.getElementById('view');
             iframe.src = videoUrl;
           });
           videoLinksContainer.appendChild(button);
         })(i);
       }
     });
