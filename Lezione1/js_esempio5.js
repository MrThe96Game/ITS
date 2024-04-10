function myFunction() {
    console.log('hello world');

    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const edit = document.getElementById('edit');

    console.log(input1, input2, edit);
    console.log(input1.value, input2.value);

    edit.innerHTML = input1.value + ' ' + input2.value;
}

document.getElementById("btn").addEventListener('click', myFunction);

