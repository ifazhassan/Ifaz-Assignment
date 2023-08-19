document.addEventListener('click', function() { 
    var hiring = document.querySelector('#hiring');
    var hour = document.querySelector('#hour');

    if (hiring.checked) {
            hour.removeAttribute('hidden');
        }
    else {
            hour.setAttribute('hidden', "");
    }
});