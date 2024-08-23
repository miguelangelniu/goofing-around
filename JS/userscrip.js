// ==UserScript==
// @name FM Training2
// @namespace Violentmonkey Scripts
// @match https://la.footballteamgame.com/training
// @match https://la.footballteamgame.com/dashboard
// @grant none
// @author WeRFkd
// ==/UserScript==

window.onload = async () => {
    var SESIONES_ENTRENAMIENTO = 0;
    var ARRAY_INDEX_HABILIDADES = [];
    const dashPage = await (window.location.href.indexOf("dashboard") != -1 ? true : false);
    
    //Se crea el evento click para el botón Training del SideBar
    if(dashPage){
      const els = document.querySelectorAll("a[href='/training']");
      const uid = window.localStorage.getItem('uid');
      console.log(els.length);
       var tLoop = setInterval(() => {
         if (els.length == 1) {
           clearInterval(tLoop);
           els[0].onclick = async () => { 
             const boolMainDiv = await (document.getElementById('mainDiv'));
  
             //Check si existe el div donde se agregara el manDiv
             var checkExist = setInterval(function() {
               if (document.getElementsByClassName('training')[1]) {
                 clearInterval(checkExist);
                 boolMainDiv ? boolMainDiv : createElements();
               }
             }, 100);
           };
         }
       }, 1000);
      
    }
    
    
    
    //Función que crea los elementos HTML para el entrenamiento automático
    function createElements(){
      const parentGrid = document.getElementsByClassName('training');
      //parentGrid[1].firstChild.getElementsByTagName('div')[1].firstChild.lastChild.lastChild.click()
  
      const container = document.getElementById('container');
  
      var mainDiv = document.createElement("div");
      mainDiv.setAttribute('id', 'mainDiv');
      const mainTitle = document.createElement("p");
      const title = document.createTextNode("Entrenamiento automático");
  
      //==================================Crear checkboxs de entrenamiento
      
      //Elementos HTML
      //var [entrenar, cancelar] = [document.createElement('button'), document.createElement('button')];
      const table = document.createElement('table');
      table.style.width = "100%";
      const tabTr1 = document.createElement('tr');
      const tabTr2 = document.createElement('tr');
      var [tdOfe, tdDef, tdCre, tdRes, tdLec, tdPre, tdBal, tdEfi] = [document.createElement('td'),
                                                                                                   document.createElement('td'),
                                                                                                   document.createElement('td'),
                                                                                                   document.createElement('td'),
                                                                                                   document.createElement('td'),
                                                                                                   document.createElement('td'),
                                                                                                   document.createElement('td'),
                                                                                                   document.createElement('td')];
      
      //Creación botón
      //entrenar.type = "button";
      //entrenar.style = "background-color: blue;"
      //entrenar.onclick = () => {
      //  skillTraining(parentGrid);
      //  return false;
      //};
      //entrenar.innerHTML = 'ENTRENAR';
      
      //cancelar.type = "button";
      //cancelar.style = "background-color: red;"
      //cancelar.onclick = () => {
      //  cancelTraining();
      //  return false;
      //};
      //cancelar.innerHTML = 'CANELAR';
      
      //Creación de los labels
      var [labelOfe, labelDef, labelCre, labelRes, labelLec, labelPre, labelBal, labelEfi] = [document.createElement('label'),
                                                                                              document.createElement('label'),
                                                                                              document.createElement('label'),
                                                                                              document.createElement('label'),
                                                                                              document.createElement('label'),
                                                                                              document.createElement('label'),
                                                                                              document.createElement('label'),
                                                                                              document.createElement('label')];
      
      //Creación de los checkbox
      var [checkOfe, checkDef, checkCre, checkRes, checkLec, checkPre, checkBal, checkEfi, sesiones] = [document.createElement('input'),
                                                                                                        document.createElement('input'),
                                                                                                        document.createElement('input'),
                                                                                                        document.createElement('input'),
                                                                                                        document.createElement('input'),
                                                                                                        document.createElement('input'),
                                                                                                        document.createElement('input'),
                                                                                                        document.createElement('input'),
                                                                                                        document.createElement('input')];
      
      //Asignar atributos a los checkbox
      [checkOfe.type, checkDef.type, checkCre.type, checkRes.type, checkLec.type, checkPre.type, checkBal.type, checkEfi.type] = ["checkbox",
                                                                                                                                  "checkbox",
                                                                                                                                  "checkbox",
                                                                                                                                  "checkbox",
                                                                                                                                  "checkbox",
                                                                                                                                  "checkbox",
                                                                                                                                  "checkbox",
                                                                                                                                  "checkbox"];
      sesiones.type = "number";
      
      [checkOfe.name, checkDef.name, checkCre.name, checkRes.name, checkLec.name, checkPre.name, checkBal.name, checkEfi.name] = ["skillsTraining",
                                                                                                                                  "skillsTraining",
                                                                                                                                  "skillsTraining",
                                                                                                                                  "skillsTraining",
                                                                                                                                  "skillsTraining",
                                                                                                                                  "skillsTraining",
                                                                                                                                  "skillsTraining",
                                                                                                                                  "skillsTraining"];
      sesiones.id = "sesiones";
      sesiones.min = 0;
      sesiones.placeholder = "Sesiones"
      sesiones.style.color = "black";
      
      checkOfe.id = "ofe";
      checkDef.id = "def";
      checkCre.id = "cre";
      checkRes.id = "res";
      checkLec.id = "lec";
      checkPre.id = "pre";
      checkBal.id = "bal";
      checkEfi.id = "efi";
      
      checkOfe.value = 0;
      checkDef.value = 1;
      checkCre.value = 2;
      checkRes.value = 3;
      checkLec.value = 4;
      checkPre.value = 5;
      checkBal.value = 6;
      checkEfi.value = 7;
      
      creatteCheckEvent(checkOfe, parentGrid);
      creatteCheckEvent(checkDef, parentGrid);
      creatteCheckEvent(checkCre, parentGrid);
      creatteCheckEvent(checkRes, parentGrid);
      creatteCheckEvent(checkLec, parentGrid);
      creatteCheckEvent(checkPre, parentGrid);
      creatteCheckEvent(checkBal, parentGrid);
      creatteCheckEvent(checkEfi, parentGrid);
  
      //Asignación de label a checkboxs correspondientes
      labelOfe.htmlFor = "ofe"; 
      labelDef.htmlFor = "def";
      labelCre.htmlFor = "cre";
      labelRes.htmlFor = "res";
      labelLec.htmlFor = "lec";
      labelPre.htmlFor = "pre";
      labelBal.htmlFor = "bal";
      labelEfi.htmlFor = "efi";
  
      labelOfe.appendChild(document.createTextNode('Ofensiva'));
      labelDef.appendChild(document.createTextNode('Defensiva'));
      labelCre.appendChild(document.createTextNode('Creación'));
      labelRes.appendChild(document.createTextNode('Resistencia'));
      labelLec.appendChild(document.createTextNode('Lectura'));
      labelPre.appendChild(document.createTextNode('Presión'));
      labelBal.appendChild(document.createTextNode('Balon Parado'));
      labelEfi.appendChild(document.createTextNode('Eficacia'));
      
      //===================================
      
      //Crear Tr
      //Fila 1
      tdOfe.appendChild(checkOfe);
      tdOfe.appendChild(labelOfe);
      tabTr1.appendChild(tdOfe);
      tabTr1.appendChild(tdOfe);
      
      tdDef.appendChild(checkDef);
      tdDef.appendChild(labelDef);
      tabTr1.appendChild(tdDef);
      tabTr1.appendChild(tdDef);
      
      tdCre.appendChild(checkCre);
      tdCre.appendChild(labelCre);
      tabTr1.appendChild(tdCre);
      tabTr1.appendChild(tdCre);
      
      tdRes.appendChild(checkRes);
      tdRes.appendChild(labelRes);
      tabTr1.appendChild(tdRes);
      tabTr1.appendChild(tdRes);
      
      tabTr1.appendChild(sesiones);
      
      //tabTr1.appendChild(entrenar);
      
      //Fila 2
      tdLec.appendChild(checkLec);
      tdLec.appendChild(labelLec);
      tabTr2.appendChild(tdLec);
      tabTr2.appendChild(tdLec);
      
      tdPre.appendChild(checkPre);
      tdPre.appendChild(labelPre);
      tabTr2.appendChild(tdPre);
      tabTr2.appendChild(tdPre);
      
      tdBal.appendChild(checkBal);
      tdBal.appendChild(labelBal);
      tabTr2.appendChild(tdBal);
      tabTr2.appendChild(tdBal);
      
      tdEfi.appendChild(checkEfi);
      tdEfi.appendChild(labelEfi);
      tabTr2.appendChild(tdEfi);
      tabTr2.appendChild(tdEfi);
      
      //tabTr2.appendChild(cancelar);
      
      //Crear tabla
      table.appendChild(tabTr1);
      table.appendChild(tabTr2);
      mainDiv.appendChild(table);
      
  
      //mainTitle.appendChild(title);
      //mainDiv.appendChild(mainTitle);
  
  
      const contLog = container.firstChild.insertBefore(mainDiv, container.firstChild.children[1]);
  
      //console.log(contLog);
    }
    
    function creatteCheckEvent(checkbox, parentGrid){
      checkbox.addEventListener('change', (event) => {
        if (event.target.checked) {
          skillTraining(parentGrid);
        }
      })
    }
    
    function skillTraining(parentGrid){
     
      var check = document.querySelectorAll('input[name=skillsTraining]:checked');
      var sesiones = document.getElementById('sesiones').value;
     //console.log(check);
      if(check.length == 2 && sesiones > 0){
        const grid = parentGrid[1].children[0];
        var array = [];
        
        SESIONES_ENTRENAMIENTO = sesiones;
        
        for (var i = 0; i < check.length; i++) {
          array.push(parseInt(check[i].value));
        }
  
        ARRAY_INDEX_HABILIDADES = array;
  
        array.map((x, i) => {
          const number = x;
          var coreElement = grid.children[number+1].firstChild.lastChild;
          var max_of_array = Math.max.apply(Math, ARRAY_INDEX_HABILIDADES);
  
          max_of_array == number ? setTimeout(()=> { coreElement.lastChild.click(); }, 2000) : coreElement.lastChild.click();
  
          var existTimer = coreElement.children[3];
  
          trainingLoop(coreElement, existTimer, number);
        });
      }
    }
    
    function trainingLoop(coreElement, existTimer, number){
      SESIONES_ENTRENAMIENTO --;
      document.getElementById('sesiones').value = SESIONES_ENTRENAMIENTO;
      var checkExist = setInterval(() => {
         if (existTimer.classList.contains('training-in-progress')) {
           
           var tLoop = setInterval(() => {
            if (SESIONES_ENTRENAMIENTO <= 0) {
              clearInterval(tLoop);
            } else {
              innerLoop(coreElement, existTimer, number);
            }
           }, 1000);
           clearInterval(checkExist);
         }
       }, 100);
    }
    
    function innerLoop(coreElement, existTimer, number){
      if (!existTimer.classList.contains('training-in-progress')){
        if(coreElement.lastChild){
          var max_of_array = Math.max.apply(Math, ARRAY_INDEX_HABILIDADES);
          if(max_of_array == number){
            coreElement.lastChild.click();
  
          } else {
            coreElement.lastChild.click();
          }
          SESIONES_ENTRENAMIENTO --;
        }
      }
  
      document.getElementById('sesiones').value = SESIONES_ENTRENAMIENTO;
    }
    
    function cancelTraining(){
      SESIONES_ENTRENAMIENTO = 0;
      document.getElementById('sesiones').value = "0";
    }
  };
  
  