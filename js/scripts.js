window.onload = function() {
    var list = document.getElementById('list');
    var add = document.getElementById('addElem');

    add.addEventListener('click', function() {
        var element = document.createElement('li');
        var liNumber = document.getElementsByTagName('li').length;
        element.innerHTML = 'item ' + liNumber;
        list.appendChild(element);
	});
};