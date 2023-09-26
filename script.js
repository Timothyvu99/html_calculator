
function calculate(x)
{
    let string = document.getElementById('screen');
    string.value += x;
}

function equal()
{
    let solution = eval(document.getElementById('screen').value);
    let result = document.getElementById('screen');

    result.value = solution;
}