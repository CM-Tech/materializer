
var relevantProps=["animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","bottom","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","content","cursor","direction","display","empty-cells","float","font-family","font-kerning","font-size","font-stretch","font-style","font-variant","font-variant-ligatures","font-variant-caps","font-variant-numeric","font-weight","height","image-rendering","isolation","justify-items","justify-self","left","letter-spacing","line-height","list-style-image","list-style-position","list-style-type","margin-bottom","margin-left","margin-right","margin-top","max-height","max-width","min-height","min-width","mix-blend-mode","object-fit","object-position","offset-distance","offset-path","offset-rotate","opacity","orphans","outline-color","outline-offset","outline-style","outline-width","overflow-anchor","overflow-wrap","overflow-x","overflow-y","padding-bottom","padding-left","padding-right","padding-top","pointer-events","position","resize","right","speak","table-layout","tab-size","text-align","text-align-last","text-decoration","text-decoration-line","text-decoration-style","text-decoration-color","text-decoration-skip","text-underline-position","text-indent","text-rendering","text-shadow","text-size-adjust","text-overflow","text-transform","top","touch-action","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","zoom","-webkit-appearance","backface-visibility","-webkit-background-clip","-webkit-background-origin","-webkit-border-horizontal-spacing","-webkit-border-image","-webkit-border-vertical-spacing","-webkit-box-align","-webkit-box-decoration-break","-webkit-box-direction","-webkit-box-flex","-webkit-box-flex-group","-webkit-box-lines","-webkit-box-ordinal-group","-webkit-box-orient","-webkit-box-pack","-webkit-box-reflect","column-count","column-gap","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","align-content","align-items","align-self","flex-basis","flex-grow","flex-shrink","flex-direction","flex-wrap","justify-content","-webkit-font-smoothing","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column-end","grid-column-start","grid-template-areas","grid-template-columns","grid-template-rows","grid-row-end","grid-row-start","grid-column-gap","grid-row-gap","-webkit-highlight","hyphens","-webkit-hyphenate-character","-webkit-line-break","-webkit-line-clamp","-webkit-locale","-webkit-margin-before-collapse","-webkit-margin-after-collapse","-webkit-mask-box-image","-webkit-mask-box-image-outset","-webkit-mask-box-image-repeat","-webkit-mask-box-image-slice","-webkit-mask-box-image-source","-webkit-mask-box-image-width","-webkit-mask-clip","-webkit-mask-composite","-webkit-mask-image","-webkit-mask-origin","-webkit-mask-position","-webkit-mask-repeat","-webkit-mask-size","order","perspective","perspective-origin","-webkit-print-color-adjust","-webkit-rtl-ordering","shape-outside","shape-image-threshold","shape-margin","-webkit-tap-highlight-color","-webkit-text-combine","-webkit-text-decorations-in-effect","-webkit-text-emphasis-color","-webkit-text-emphasis-position","-webkit-text-emphasis-style","-webkit-text-fill-color","-webkit-text-orientation","-webkit-text-security","-webkit-text-stroke-color","-webkit-text-stroke-width","transform","transform-origin","transform-style","-webkit-user-drag","-webkit-user-modify","user-select","-webkit-writing-mode","-webkit-app-region","buffered-rendering","clip-path","clip-rule","mask","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","marker-end","marker-mid","marker-start","mask-type","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","alignment-baseline","baseline-shift","dominant-baseline","text-anchor","writing-mode","vector-effect","paint-order","d","cx","cy","x","y","r","rx","ry","caret-color"];

var relevantPropsSmall=["animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left-color","border-left-style","border-left-width","border-right-color","border-right-style","border-right-width","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","bottom","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","content","cursor","direction","display","empty-cells","float","font-family","font-kerning","font-size","font-stretch","font-style","font-variant","font-variant-ligatures","font-variant-caps","font-variant-numeric","font-weight","height","image-rendering","isolation","justify-items","justify-self","left","letter-spacing","line-height","list-style-image","list-style-position","list-style-type","margin-bottom","margin-left","margin-right","margin-top","max-height","max-width","min-height","min-width","mix-blend-mode","object-fit","object-position","offset-distance","offset-path","offset-rotate","opacity","orphans","outline-color","outline-offset","outline-style","outline-width","overflow-anchor","overflow-wrap","overflow-x","overflow-y","padding-bottom","padding-left","padding-right","padding-top","pointer-events","position","resize","right","speak","table-layout","tab-size","text-align","text-align-last","text-decoration","text-decoration-line","text-decoration-style","text-decoration-color","text-decoration-skip","text-underline-position","text-indent","text-rendering","text-shadow","text-size-adjust","text-overflow","text-transform","top","touch-action","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","zoom","-webkit-appearance","backface-visibility","-webkit-background-clip","-webkit-background-origin","-webkit-border-horizontal-spacing","-webkit-border-image","-webkit-border-vertical-spacing","-webkit-box-align","-webkit-box-decoration-break","-webkit-box-direction","-webkit-box-flex","-webkit-box-flex-group","-webkit-box-lines","-webkit-box-ordinal-group","-webkit-box-orient","-webkit-box-pack","-webkit-box-reflect","column-count","column-gap","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","align-content","align-items","align-self","flex-basis","flex-grow","flex-shrink","flex-direction","flex-wrap","justify-content","-webkit-font-smoothing","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column-end","grid-column-start","grid-template-areas","grid-template-columns","grid-template-rows","grid-row-end","grid-row-start","grid-column-gap","grid-row-gap","-webkit-highlight","hyphens","-webkit-hyphenate-character","-webkit-line-break","-webkit-line-clamp","-webkit-locale","-webkit-margin-before-collapse","-webkit-margin-after-collapse","-webkit-mask-box-image","-webkit-mask-box-image-outset","-webkit-mask-box-image-repeat","-webkit-mask-box-image-slice","-webkit-mask-box-image-source","-webkit-mask-box-image-width","-webkit-mask-clip","-webkit-mask-composite","-webkit-mask-image","-webkit-mask-origin","-webkit-mask-position","-webkit-mask-repeat","-webkit-mask-size","order","perspective","perspective-origin","-webkit-print-color-adjust","-webkit-rtl-ordering","shape-outside","shape-image-threshold","shape-margin","-webkit-tap-highlight-color","-webkit-text-combine","-webkit-text-decorations-in-effect","-webkit-text-emphasis-color","-webkit-text-emphasis-position","-webkit-text-emphasis-style","-webkit-text-fill-color","-webkit-text-orientation","-webkit-text-security","-webkit-text-stroke-color","-webkit-text-stroke-width","transform","transform-origin","transform-style","-webkit-user-drag","-webkit-user-modify","user-select","-webkit-writing-mode","-webkit-app-region","buffered-rendering","clip-path","clip-rule","mask","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","marker-end","marker-mid","marker-start","mask-type","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","alignment-baseline","baseline-shift","dominant-baseline","text-anchor","writing-mode","vector-effect","paint-order","d","cx","cy","x","y","r","rx","ry","caret-color"];
var smallProps=["color","background-color"];//,"width","height","margin","border","padding"];
relevantProps=smallProps;
//var network = new synaptic.Architect.Perceptron(40, 25, relevantProps.length);
var maxOutputLength=1;
var architect=neataptic.architect;
var myTrainingSet = [];
var outN=[];
var charRange=65+26-32;
function getCompStyleSt(element){
    var outTxt="";
        for(var i=0;i<relevantProps.length;i++){
        var outText=getComputedStyleProp(element,relevantProps[i]);
        if(outText.length>0){
        outTxt=outTxt+relevantProps[i]+":"+outText+";";
        }
        
    }
    return outTxt;
}
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
var defaultDiv=document.createElement("div");
var defaultS=getCompStyleSt(defaultDiv);
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
/*function addElementToTrainingSet(element,iter){
    var innerStart=0;
    var me=element.tagName+""+element.tagName;
    var text="";//element.innerText;
    innerStart=me.lastIndexOf(text);
    //var out=[];
    var meS=getCompStyleSt(element);
    
    if(iter>0){
        var s=0;
    for(var i=0;i<innerStart;i++){
        var out=[];
    
    for(var j=0;j<maxOutputLength;j++){
        
        out.push(meS.charCodeAt(s%meS.length)*charCodeScale);
        s++;
        
    }
        myTrainingSet.push({input:[me.charCodeAt(i)*charCodeScale],output:out})
    }
    for(var i=0;i<element.children.length;i++){
        addElementToTrainingSet(element.children[i],iter-1);
    }
   
    for(var i=innerStart+text.length;i<me.length;i++){
        var out=[];
    
    for(var j=0;j<maxOutputLength;j++){
        
        out.push(meS.charCodeAt(s%meS.length)*charCodeScale);
        s++;
        
    }
        myTrainingSet.push({input:[me.charCodeAt(i)*charCodeScale],output:out})
    }
    }else{
        
           var s=0;
    for(var i=0;i<innerStart;i++){
        var out=[];
    
    for(var j=0;j<maxOutputLength;j++){
        
        out.push(meS.charCodeAt(s%meS.length)*charCodeScale);
        s++;
        
    }
        myTrainingSet.push({input:[me.charCodeAt(i)*charCodeScale],output:out})
    }
   
    for(var i=innerStart+text.length;i<me.length;i++){
        var out=[];
    
    for(var j=0;j<maxOutputLength;j++){
        
        out.push(meS.charCodeAt(s%meS.length)*charCodeScale);
        s++;
        
    }
        myTrainingSet.push({input:[me.charCodeAt(i)*charCodeScale],output:out})
    }
    }
}
function styleElement(element,iter){
    var innerStart=0;
    var me=element.tagName+""+element.tagName;
    var text="";//element.innerText;
    innerStart=me.lastIndexOf(text);
    //var out=[];
    var meS=getCompStyleSt(element);
   
    if(iter>0){
        var out=[];
    for(var i=0;i<innerStart;i++){
        
    
    
    out=out.concat(myNetwork.activate([me.charCodeAt(i)*charCodeScale]));
       
    }
    for(var i=0;i<element.children.length;i++){
        styleElement(element.children[i],iter-1);
    }
    
    for(var i=innerStart+text.length;i<me.length;i++){
        
        out=out.concat(myNetwork.activate([me.charCodeAt(i)*charCodeScale]));
        
    }
    for(var i=0;i<out.length;i++){
            str+=String.fromCharCode(Math.round(out[i]/charCodeScale));
        }
        console.log(element,str);

    }else{
        var out=[];
        var me=element.tagName+element.tagName;
        for(var i=0;i<me.length;i++){
            out=out.concat(myNetwork.activate([me.charCodeAt(i)*charCodeScale]));
        }
        var str="";
        for(var i=0;i<out.length;i++){
            str+=String.fromCharCode(Math.round(out[i]/charCodeScale));
        }
        console.log(element,str);
    }
}
*/
function addElementToTrainingSet(element){
    var innerStart=0;
    var me=elementToStructureString(element);
    var text="";//element.innerText;
    innerStart=me.lastIndexOf(text);
    //
    var meS=getCompStyleSt(element);
    var s=0;
    for(var i=0;i<me.length;i++){
        var out=[];
    for(var j=0;j<maxOutputLength;j++){
        
        out=out.concat(charToArray(meS[s%meS.length]));
        s++;
        
    }
        myTrainingSet.push({input:charToArray(me[i]),output:out});
    }
    
}
function styleElement(element){
    myNetwork.clear();
    var innerStart=0;
    var me=elementToStructureString(element);
    var text="";//element.innerText;
    innerStart=me.lastIndexOf(text);
    //
    var meS=getCompStyleSt(element);
    var out="";
    for(var i=0;i<me.length;i++){
        
        out=out+arrayToChar(myNetwork.activate(charToArray(me[i])).slice(0,charRange));
    }
    return out;
    
}
var options = {
  mutation: neataptic.methods.mutation.ALL,
  mutationRate: 0.75,
  clear: true,
  log: 1,
  iterations: 1000,
  equal: true,
elitism: 5,
};
var myNetwork = new architect.LSTM(charRange, 10,10, charRange*maxOutputLength);//relevantProps.length*maxOutputLength);
addElementToTrainingSet(document.body);
myNetwork.train(myTrainingSet, {
  log: 5,
  iterations: 600,
  error: 0.0003,
  clear: true,
  rate: 0.01,
});
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