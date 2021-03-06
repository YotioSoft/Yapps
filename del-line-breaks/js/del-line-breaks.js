$('#input-textarea').keyup(convert);
$('#replace_to_space').change(convert);

function convert() {
    input_area  = document.getElementById("input-textarea");
    output_area = document.getElementById("output-textarea");
    
    replace_to_space    = document.getElementById("replace_to_space");

    // 変換
    var converted_str = "";
    if (replace_to_space.checked) {
        converted_str = input_area.value.replace( /\r?\n/g , ' ');
    }
    else {
        converted_str = input_area.value.replace( /\r?\n/g , '');
    }
    output_area.value = converted_str;
}

function OnCopyButtonClick() {
    output_area = document.getElementById("output-textarea");
    output_area.select();
    document.execCommand("copy");
}