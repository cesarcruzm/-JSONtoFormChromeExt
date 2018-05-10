document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        let form = document.createElement("form");
        let jsonobj = JSON.parse(document.getElementById('JSONSchema').value);

        for (var key in jsonobj) {
            if (jsonobj.hasOwnProperty(key)) {

                let input = document.createElement("input");
                input.type = "text";
                input.name = key;
                input.id = "field-" + key;
                form.appendChild(input);


                //jsonobj[key] gets the value pair
            }
        }

        document.getElementById("code").innerText = form.outerHTML;

    }, false);
}, false);