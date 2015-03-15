(function() {
    var input = document.getElementById('email');
    var button = document.getElementById('submit');

    input.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            if (validateEmail(input.value)) {
                e.preventDefault();
                submitEmail();
            }
        }
    });

    button.addEventListener('click', function(e) {
        if (validateEmail(input.value)) {
            e.preventDefault();
            submitEmail();
        }
    });

    function submitEmail() {
        var request = new XMLHttpRequest();
        var url = 'https://api.parse.com/1/classes/registration';
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.setRequestHeader('X-Parse-Application-Id', 'd5YwyGG0RqJP5gvtLOxDv1Afe5PGqveLqreW8CwZ');
        request.setRequestHeader('X-Parse-REST-API-Key', 'rIUWFzoojXJqyuWXRjrUPZyP2ea50iD2ZZGJax1h');

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                var form = document.getElementById('form');
                form.innerHTML = '<span class="result">Vielen Dank - Wir melden uns bald bei dir!</span>';
            }
        };

        var data = JSON.stringify({
            email: input.value
        });
        request.send(data);
    }

    function submitEmailToApi() {
        var urls = ['http://staging.api.logbookapp.de:3000/users/signup', 'http://api.logbookapp.de:3000/users/signup'];
        urls.forEach(function(url) {
            request.open('POST', url, true);
            request.setRequestHeader('Content-Type', 'application/json');
            var data = JSON.stringify({
                email: input.value
            });
            request.send(data);
        });
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
})();
