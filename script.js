for(i=0; i<20; i++) {
    setTimeout(() => {
        var box = document.createElement('div');
				box.className = 'box';
				document.getElementById('container').appendChild(box);
    }, 500*i);
}
