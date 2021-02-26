const Content = `
    <div class="square"></div>
    <button class="btn">Let's go</button>

</div>
`;

const main =  document.querySelector("main");
main.innerHTML = Content;

$(".test").text("new test 3");
$(".test2").html('<li>another test</li>');
$(".square").css("background-color", "red");

    $(".btn").click(function() {
        $(".square").animate( { width: 400 } , 300)
        $(".square").animate( { height: 400 } , 300).delay(900)
        $(".square").animate( { height: 100 } , 600)
        $(".square").animate( { width: 100 } , 600)
    });
