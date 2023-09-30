
function calculate(x)
{
    let string = document.getElementById('screen');
    if(x == 'C')
        string.value = '';
    else
        string.value += x;
}

function equal()
{
    let solution = eval(document.getElementById('screen').value);
    let string = document.getElementById('screen');

    if(solution == "Infinity" || solution == "-Infinity")
        string.value = "Error";
    else
        string.value = solution;
}