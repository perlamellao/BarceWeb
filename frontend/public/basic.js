function loaded() {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('root').style.display = 'block';
}
function loading() {
    document.getElementById('spinner').style.display = '';
    document.getElementById('root').style.display = 'none';
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


window.onload = async function() {
    loaded();
  };