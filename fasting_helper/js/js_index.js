var explain_btn = document.getElementById('explain_btn');
explain_btn.addEventListener('click', showExplainContent);

var explain_btn = document.getElementById('explain');
explain_btn.addEventListener('click', hideExplainContent);

function showExplainContent(event){
    document.getElementById('explain_btn').style.display = 'none';
    document.getElementById('explain').style.display = 'inline-block';
}

function hideExplainContent(event){
    document.getElementById('explain_btn').style.display = 'inline-block';
    document.getElementById('explain').style.display = 'none';
}

var fasting_btn = document.getElementById('fasting_btn');