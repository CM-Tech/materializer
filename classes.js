function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
var relevantClasses=["mdl-button","mdl-js-button","mdl-js-ripple-effect","mdl-button--fab","mdl-button--mini-fab","mdl-color--lime-A200","mdl-components__link-text","mdl-components__link","mdl-component"];
relevantClasses=relevantClasses.concat("mdl-components mdl-js-components mdl-cell mdl-cell--12-col mdl-layout__container mdl-components__nav docs-text-styling mdl-shadow--4dp mdl-components__link mdl-component mdl-layout mdl-js-layout mdl-layout__header mdl-layout__header--transparent mdl-layout__header-row mdl-layout-title mdl-layout-spacer mdl-navigation mdl-navigation__link mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect mdl-checkbox__input mdl-checkbox__label mdl-card mdl-shadow--2dp mdl-card__title mdl-card__title-text mdl-card__supporting-text mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect".split(" "));
relevantClasses=uniq(relevantClasses);
//var network = new synaptic.Architect.Perceptron(40, 25, relevantProps.length);
var maxOutputLength=1;
var Node = neataptic.Node;
var Neat = neataptic.Neat;
var Network = neataptic.Network;
var Methods = neataptic.methods;
var Architect = neataptic.architect;
var myTrainingSet = [];
var outN=[];
var charRange=65+26-32;
function charToArray(char){
    var array=[];
    for(var i=0;i<charRange;i++){
        if(char.toUpperCase().charCodeAt(0)%charRange===((i-32)%charRange+charRange)%charRange){
            array[i]=1;
        }else{
            array[i]=0;
        }
    }
    return array;
}
function arrayToChar(array){
    var maxI=0;
    for(var i=0;i<charRange;i++){
        if(array[maxI]<array[i]){
            maxI=i;
        }
    }
    return String.fromCharCode(maxI+32).toLowerCase();
}
function getClassArray(element){
    var out=[];
    for(var i=0;i<relevantClasses.length;i++){
        out[i]=element.classList.contains(relevantClasses[i])?1:0;
    }
    return out;
}
function classStringFromArray(array,thresh){
    var str=[];
    for(var i=0;i<array.length;i++){
        if(array[i]>thresh){
            str.push(relevantClasses[i]);
        }
    }
    return str.join(" ");
}
    /*for(var i=0;i<relevantProps.length;i++){
        var outText=getComputedStyleProp(defaultDiv,relevantProps[i]);
        while(outText.length<maxOutputLength){
            outText=outText+" ";
        }
        for(var j=0;j<maxOutputLength;j++){
            outN.push(outText.charCodeAt(j));
        }
        
    }*/
    function elementToStructureString(element){
        var levels=[];
        var str="";
        levels.push([element]);
        while(levels.length>0){
            //console.log(levels);
            if(levels[levels.length-1].length===0){
                levels.pop();
                if(levels.length>0){
                    var close=levels[levels.length-1].pop();
                    str=str+"-"+close.tagName;
                }
            }else{
            var level=levels.length-1;
            var el=levels[level].pop();
            str=str+"+"+el.tagName;
            if(el.children.length==0){
                var close=el;
                    str=str+"-"+close.tagName;

                
            }else{
                levels[level].push(el);
                levels.push([]);
                for(var i=0;i<el.children.length;i++){
                    levels[levels.length-1].push(el.children[i]);
                }
            }
        }
        }
    return str;
    }
function addElementToTrainingSet(element,iter){
    var innerStart=0;
    var me=element.tagName+""+element.tagName;
    var text="";//element.innerText;
    innerStart=me.lastIndexOf(text);
    //var out=[];
    
    
    if(iter>0){
        var s=0;
        var out=getClassArray(element);
    for(var i=0;i<innerStart;i++){
        
    
    
        myTrainingSet.push({input:charToArray(me[i]),output:out})
    }
    for(var i=0;i<element.children.length;i++){
        addElementToTrainingSet(element.children[i],iter-1);
    }
   
    for(var i=innerStart+text.length;i<me.length;i++){
        
    
    
        myTrainingSet.push({input:charToArray(me[i]),output:out})
    }
    }else{
        
           var out=getClassArray(element);
    for(var i=0;i<innerStart;i++){
        
        myTrainingSet.push({input:charToArray(me[i]),output:out})
    }
   
    for(var i=innerStart+text.length;i<me.length;i++){
        
        myTrainingSet.push({input:charToArray(me[i]),output:out})
    }
    }
}
function styleElement(element,iter){
    var innerStart=0;
    var thresh=0.75;
    var me=element.tagName+""+element.tagName;
    var text="";//element.innerText;
    innerStart=me.lastIndexOf(text);
    //var out=[];
    
   
    if(iter>0){
        var out="";
    for(var i=0;i<innerStart;i++){
        
    
    
    myNetwork.activate([me.charCodeAt(i)*charCodeScale]);
       
    }
    for(var i=0;i<element.children.length;i++){
        styleElement(element.children[i],iter-1);
    }
    
    for(var i=innerStart+text.length;i<me.length;i++){
        
        out=classStringFromArray(myNetwork.activate(charToArray(me[i])),thresh);
        
    }
    
        console.log(element,out);
        return out;

    }else{
        var out="";
        var me=element.tagName+element.tagName;
        for(var i=0;i<me.length;i++){
            out=classStringFromArray(myNetwork.activate(charToArray(me[i])),thresh);
        }
        
        console.log(element,out);
         return out;
    }
}
function doElement(element,iter){
    element.setAttribute("class",styleElement(element,iter));
}
var options = {
  mutation: Methods.mutation.ALL,
  mutationRate: 0.75,
  clear: true,
  log: 1,
  iterations: 100,
  equal: true,
elitism: 5,
};
var myNetwork = new Architect.LSTM(charRange, 10,10, relevantClasses.length,{
  memoryToMemory: false,    // default is false
  outputToMemory: false,    // default is false
  outputToGates: false,     // default is false
  inputToOutput: true,      // default is true
  inputToDeep: true         // default is true
});//relevantProps.length*maxOutputLength);
/*var myNetwork = new Architect.Random(charRange, 100, charRange*maxOutputLength, {
  connections: 200,
  gates: 10,
  selfconnections: 10
});*/
for(var i=0;i<relevantClasses.length;i++){
    if(document.querySelector("."+relevantClasses[i])){
        var them=document.querySelectorAll("."+relevantClasses[i]);
        for(var i=0;i<Math.min(3,them.length);i++){
addElementToTrainingSet(them[i],3);
        }
    }
}
myNetwork.train(myTrainingSet, {
  log: 1,
  iterations: 50,
  error: 0.003,
  clear: true,
  rate: 0.005,
});
var elList=document.querySelectorAll("*");
/*myNetwork.train(myTrainingSet, {
  log: 5,
  iterations: 600,
  error: 0.0003,
  clear: true,
  rate: 0.01,
});*/
//myNetwork.evolve(myTrainingSet, options);

function getComputedStyleProp(elem,prop) {

  var cs = window.getComputedStyle(elem,null);
  if (prop) {
    return cs.getPropertyValue(prop);
  }
  return "";

}
function dumpComputedStyles(elem,prop) {

  var cs = window.getComputedStyle(elem,null);
  if (prop) {
    console.log(prop+" : "+cs.getPropertyValue(prop));
    return;
  }
  var len = cs.length;
  for (var i=0;i<len;i++) {
 
    var style = cs[i];
    console.log(style+" : "+cs.getPropertyValue(style));
  }

}
function domToNonMDL(){

}
//drawGraph(myNetwork.graph(1000, 1000), '.draw');