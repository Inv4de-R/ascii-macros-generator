var button = document.getElementById("activate");
var copy = document.getElementById("copy");
var clear = document.getElementById("clear");

button.onclick = function(){
    var option = document.querySelectorAll('input[name="choose"]');

    var data = document.getElementById("data").value;
    if (data.length == 0) {
        alert('введи чё-нибудь');
        return;
    } else {
        document.getElementById('result').innerHTML = 'тут будет асци';
    };
    data = ' ' + data;

    for (let i = 0; i < option.length; i++) {
        if (option[i].checked) {
            switch (option[i].value) {
                case 'emote':
                    data = 'me' + data;
                    generate__emote();
                break;

                case 'say':
                    data = 'say' + data;
                    generate__say();
                break;

                case 'looc':
                    data = 'looc' + data;
                    generate__looc();
                break;

                default:
                    alert('чёт не то');
            };
        };
    };

    function generate__emote() {
        if (data.indexOf("\n") >= 0) {
            data = data.replace('\n', ` \\nme `);
            return generate__emote();
        } else {
            document.getElementById('result').innerHTML = data;
        };
    };

    function generate__say() {
        if (data.indexOf("\n") >= 0) {
            data = data.replace('\n', ` \\nsay `);
            return generate__say();
        } else {
            document.getElementById('result').innerHTML = data;
        };
    };

    function generate__looc() {
        if (data.indexOf("\n") >= 0) {
            data = data.replace('\n', ` \\nlooc `);
            return generate__looc();
        } else {
            document.getElementById('result').innerHTML = data;
        };
    };
};

var copy__ready = true;
copy.onclick = function(){
    if (copy__ready == false) {
        return;
    } 

    var text__copy = document.getElementById("result").innerHTML;

    if (text__copy == 'тут будет асци') {
        alert('нечего копировать');
        return;
    } else {
        const el = document.createElement('textarea');
        el.value = text__copy;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        copy__ready = false;
    };

    copy.innerHTML = 'скопировано';

    function exchange() {
        copy.innerHTML = 'скопировать';
    };
    function copy__change() {
        copy__ready = true;
    };

    setTimeout(exchange, 3000);
    setTimeout(copy__change, 3000);
};

clear.onclick = function(){
    document.getElementById("result").innerHTML = 'тут будет асци'
};
