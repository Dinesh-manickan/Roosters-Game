const animateTextRainbow = ( node ) => {
    let word = node.innerText;
    node.innerHTML = '';
    let chars = word.split("");
    for( let i=0; i<chars.length; i++ ){
        let span = document.createElement('span');
        span.classList.add('rainbow');
        span.innerText = chars[i];
        span.style.animationDelay = (i*0.25).toFixed(2) + 's';
        node.appendChild( span );
    }
}
let title = document.getElementById('rainbow');
animateTextRainbow( title );