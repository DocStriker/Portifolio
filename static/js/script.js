window.onload = function(){

    let btn_next = document.getElementById("next");
    let btn_prev = document.getElementById("prev");
    let box_ds;
    const popUp = document.getElementById("popup");
    const fecharPopUp = document.getElementById("fecharPopup");
    let list = document.getElementById("list");
    let cert = document.getElementsByClassName("divds");
    let certimg = document.getElementById("cert");

    btn_next.onclick = function(){
        list.scrollLeft += 124;
    };
    btn_prev.onclick = function(){
        list.scrollLeft -= 124;
    };

    /*box_ds.addEventListener("click", function() {
        popUp.style.display = "block";
    });*/

    for (let x=0; x< cert.length; x++){
        cert[x].addEventListener("click", function(event){
            let elementoClicado = event.target;
            switch (elementoClicado.id){
                case 'ds':
                case 'dsimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-datascience.png";
                    popUp.style.display = "block";
                    break;
                case 'c++':
                case 'c++img':
                    console.log(certimg);
                    certimg.src = "static/images/cert-c++.png";
                    popUp.style.display = "block";
                    break;
                case 'js2':
                case 'js2img':
                    console.log(certimg);
                    certimg.src = "static/images/cert-js2.png";
                    popUp.style.display = "block";
                    break;
                case 'pc':
                case 'pcimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-pc.png";
                    popUp.style.display = "block";
                    break;
                case 'p3':
                case 'p3img':
                    console.log(certimg);
                    certimg.src = "static/images/cert-p3.png";
                    popUp.style.display = "block";
                    break;
                case 'p1':
                case 'p1img':
                    console.log(certimg);
                    certimg.src = "static/images/cert-p1.png";
                    popUp.style.display = "block";
                    break;
                case 'wdf':
                case 'wdfimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-wdf.png";
                    popUp.style.display = "block";
                    break;
                case 'pf':
                case 'pfimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-pf.png";
                    popUp.style.display = "block";
                    break;
                case 'p2':
                case 'p2img':
                    console.log(certimg);
                    certimg.src = "static/images/cert-p2.png";
                    popUp.style.display = "block";
                    break;
                case 'pds':
                case 'pdsimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-pds.png";
                    popUp.style.display = "block";
                    break;
                case 'rwd':
                case 'rwdimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-rwd.png";
                    popUp.style.display = "block";
                    break;
                case 'ihtml':
                case 'ihtmlimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-ihtml.png";
                    popUp.style.display = "block";
                    break;
                case 'js1':
                case 'js1img':
                    console.log(certimg);
                    certimg.src = "static/images/cert-js1.png";
                    popUp.style.display = "block";
                    break;
                case 'icss':
                case 'icssimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-icss.png";
                    popUp.style.display = "block";
                    break;
                case 'html':
                case 'htmlimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-html.png";
                    popUp.style.display = "block";
                    break;
                case 'wd':
                case 'wdimg':
                    console.log(certimg);
                    certimg.src = "static/images/cert-wd.png";
                    popUp.style.display = "block";
                    break;
                case 'pa':
                case 'paimg':
                    console.log(certimg);
                    certimg.src = "static/images/1716225644021.jpg";
                    popUp.style.display = "block";
                    break;
            }
        })
    }

    fecharPopUp.addEventListener("click", function() {
        popUp.style.display = "none";
    });  

    let button = document.getElementById("div_btn");

    button.addEventListener("click", function() {
        var menu = document.getElementById("menu_list");
        //var div_menu = document.getElementById('div_btn');
        menu.classList.toggle('hidden');
    });
};
  
/*
<div id="popup" class="popup">
        <div class="conteudo">
            <span class="fechar" id="fecharPopup">&times;</span><br>
            <div class="mod">
            <img class="cert" src="{{ url_for('static', filename='images/cert-datascience.png') }}" width="500px">
            </div>
        </div>
</div>
*/