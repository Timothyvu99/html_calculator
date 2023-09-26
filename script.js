
function calculate(x)
{
    var string = document.getElementById('screen');
    string.value += x;
}

function equal()
{
    var solution = eval(document.getElementById('screen').value);
    var result = document.getElementById('screen');

    result.value = solution;
}