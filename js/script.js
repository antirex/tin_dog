/*Extracts the maximum height of an element and then sets the height of all the card to that maximum height*/
let heights = $("div.card").map(function ()
    {
        return $(this).height();
    }).get();

maxHeight = Math.max.apply(null, heights);
$('div.card').css('height', `${maxHeight}px`)
console.log(maxHeight)