const images = document.getElementsByTagName("img");

for (const ball of images) {
    const emptyBox = document.createElement("img")
    // emptyBox.src = "https://www.kaspersky.com.br/content/pt-br/images/repository/isc/2020/9910/a-guide-to-qr-codes-and-how-to-scan-qr-codes-2.png";

    emptyBox.style.maxWidth = 100;
    emptyBox.style.maxHeight = 100;
    emptyBox.zIndex = -1000

    ball.parentElement.append(emptyBox);
}

for (const ball of images) {
    ball.onmousedown = function(event) {
        ball.style.position = 'absolute';
        ball.style.zIndex = 1000;
        
        document.body.append(ball);
        
        // centers the ball at (pageX, pageY) coordinates
        function moveAt(pageX, pageY) {
            ball.style.left = pageX - ball.offsetWidth / 2 + 'px';
            ball.style.top = pageY - ball.offsetHeight / 2 + 'px';
        }
        
        // move our absolutely positioned ball under the pointer
        moveAt(event.pageX, event.pageY);
        
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        
        // (2) move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
        
        // (3) drop the ball, remove unneeded handlers
        ball.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            ball.onmouseup = null;
        };
        
    };
    ball.ondragstart = function() {
    return false;
    };
}