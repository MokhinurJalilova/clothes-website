$(document).ready(function ()   {
    buildProductView(products);
});

function buildProductView(elements){
    $("#products").empty();
    elements.forEach(element => {
        let proHtml =  '<div class="col-sm-4">'+
        '<div class="card card-margin" style="width: 16rem;">'+
          '<img class="card-img-top" src="' + element.Image + '">' + 
         '<div class="card-body">' +
            '<h4 class="card-title">'+ element.title +' </h4>' +
            '<p class="material">' + element.material + '</p>' +
            '<p class="brand">' + element.Brand + '</p>' +
            '<span class="review">' + element.Review + '</span>' +
            
            '<p><b>' + element.Price + '</b</p>' +
           '</div>' +
         '</div> ' +
      '</div>' +
    '</div>';
    $("#products").append(proHtml)
    });
}

/* filter */

let brandName;

for(let i = 0; document.querySelectorAll(".boo").length; i++){
    document.querySelectorAll(".boo")[i].addEventListener("click",function(){
        brandName = this.innerHTML;
        brandFilter()
    });
}
function brandFilter(){
    let brandPro = products.filter((elem) =>{
        if (elem.Brand === brandName){
            return true;
        }else{
            return false;
        }
    });
    buildProductView(brandPro)
}

