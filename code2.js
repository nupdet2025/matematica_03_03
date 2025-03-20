gdjs._51Code = {};
gdjs._51Code.localVariables = [];
gdjs._51Code.GDbg_95951Objects1= [];
gdjs._51Code.GDbg_95951Objects2= [];
gdjs._51Code.GDbg_95951Objects3= [];
gdjs._51Code.GDPersonagem1Objects1= [];
gdjs._51Code.GDPersonagem1Objects2= [];
gdjs._51Code.GDPersonagem1Objects3= [];
gdjs._51Code.GDcursorObjects1= [];
gdjs._51Code.GDcursorObjects2= [];
gdjs._51Code.GDcursorObjects3= [];
gdjs._51Code.GDbtn_9595avancarObjects1= [];
gdjs._51Code.GDbtn_9595avancarObjects2= [];
gdjs._51Code.GDbtn_9595avancarObjects3= [];
gdjs._51Code.GDBlackBackgroundObjects1= [];
gdjs._51Code.GDBlackBackgroundObjects2= [];
gdjs._51Code.GDBlackBackgroundObjects3= [];
gdjs._51Code.GDStarParticleObjects1= [];
gdjs._51Code.GDStarParticleObjects2= [];
gdjs._51Code.GDStarParticleObjects3= [];
gdjs._51Code.GDbtn_9595acertoObjects1= [];
gdjs._51Code.GDbtn_9595acertoObjects2= [];
gdjs._51Code.GDbtn_9595acertoObjects3= [];
gdjs._51Code.GDbtn_9595erroObjects1= [];
gdjs._51Code.GDbtn_9595erroObjects2= [];
gdjs._51Code.GDbtn_9595erroObjects3= [];
gdjs._51Code.GDMesaObjects1= [];
gdjs._51Code.GDMesaObjects2= [];
gdjs._51Code.GDMesaObjects3= [];
gdjs._51Code.GDitensObjects1= [];
gdjs._51Code.GDitensObjects2= [];
gdjs._51Code.GDitensObjects3= [];
gdjs._51Code.GDPerguntaObjects1= [];
gdjs._51Code.GDPerguntaObjects2= [];
gdjs._51Code.GDPerguntaObjects3= [];


gdjs._51Code.asyncCallback20947948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._51Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._51Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._51Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._51Code.GDBlackBackgroundObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs._51Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._51Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 1, false);
}
}gdjs._51Code.localVariables.length = 0;
}
gdjs._51Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._51Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._51Code.asyncCallback20947948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.asyncCallback20954204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._51Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "4", false);
}gdjs._51Code.localVariables.length = 0;
}
gdjs._51Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._51Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._51Code.asyncCallback20954204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.asyncCallback20953548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._51Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._51Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._51Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._51Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.5, false);
}
}
{ //Subevents
gdjs._51Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._51Code.localVariables.length = 0;
}
gdjs._51Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._51Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._51Code.asyncCallback20953548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.asyncCallback20956300 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._51Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro"), gdjs._51Code.GDbtn_9595erroObjects2);

{for(var i = 0, len = gdjs._51Code.GDbtn_9595erroObjects2.length ;i < len;++i) {
    gdjs._51Code.GDbtn_9595erroObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._51Code.localVariables.length = 0;
}
gdjs._51Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._51Code.localVariables);
for (const obj of gdjs._51Code.GDbtn_9595erroObjects1) asyncObjectsList.addObject("btn_erro", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._51Code.asyncCallback20956300(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._51Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._51Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._51Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._51Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._51Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._51Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._51Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._51Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._51Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._51Code.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._51Code.GDbtn_9595acertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._51Code.GDbtn_9595erroObjects1);
{for(var i = 0, len = gdjs._51Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._51Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._51Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._51Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._51Code.GDbtn_9595acertoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDbtn_9595acertoObjects1.length;i<l;++i) {
    if ( gdjs._51Code.GDbtn_9595acertoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDbtn_9595acertoObjects1[k] = gdjs._51Code.GDbtn_9595acertoObjects1[i];
        ++k;
    }
}
gdjs._51Code.GDbtn_9595acertoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDbtn_9595acertoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\correct-156911.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._51Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._51Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs._51Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._51Code.GDbtn_9595erroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._51Code.GDbtn_9595erroObjects1.length;i<l;++i) {
    if ( gdjs._51Code.GDbtn_9595erroObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._51Code.GDbtn_9595erroObjects1[k] = gdjs._51Code.GDbtn_9595erroObjects1[i];
        ++k;
    }
}
gdjs._51Code.GDbtn_9595erroObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._51Code.GDbtn_9595erroObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._51Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._51Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._51Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._51Code.GDbtn_9595erroObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._51Code.eventsList3(runtimeScene);} //End of subevents
}

}


};

gdjs._51Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._51Code.GDbg_95951Objects1.length = 0;
gdjs._51Code.GDbg_95951Objects2.length = 0;
gdjs._51Code.GDbg_95951Objects3.length = 0;
gdjs._51Code.GDPersonagem1Objects1.length = 0;
gdjs._51Code.GDPersonagem1Objects2.length = 0;
gdjs._51Code.GDPersonagem1Objects3.length = 0;
gdjs._51Code.GDcursorObjects1.length = 0;
gdjs._51Code.GDcursorObjects2.length = 0;
gdjs._51Code.GDcursorObjects3.length = 0;
gdjs._51Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._51Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._51Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._51Code.GDBlackBackgroundObjects1.length = 0;
gdjs._51Code.GDBlackBackgroundObjects2.length = 0;
gdjs._51Code.GDBlackBackgroundObjects3.length = 0;
gdjs._51Code.GDStarParticleObjects1.length = 0;
gdjs._51Code.GDStarParticleObjects2.length = 0;
gdjs._51Code.GDStarParticleObjects3.length = 0;
gdjs._51Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._51Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._51Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._51Code.GDbtn_9595erroObjects1.length = 0;
gdjs._51Code.GDbtn_9595erroObjects2.length = 0;
gdjs._51Code.GDbtn_9595erroObjects3.length = 0;
gdjs._51Code.GDMesaObjects1.length = 0;
gdjs._51Code.GDMesaObjects2.length = 0;
gdjs._51Code.GDMesaObjects3.length = 0;
gdjs._51Code.GDitensObjects1.length = 0;
gdjs._51Code.GDitensObjects2.length = 0;
gdjs._51Code.GDitensObjects3.length = 0;
gdjs._51Code.GDPerguntaObjects1.length = 0;
gdjs._51Code.GDPerguntaObjects2.length = 0;
gdjs._51Code.GDPerguntaObjects3.length = 0;

gdjs._51Code.eventsList4(runtimeScene);
gdjs._51Code.GDbg_95951Objects1.length = 0;
gdjs._51Code.GDbg_95951Objects2.length = 0;
gdjs._51Code.GDbg_95951Objects3.length = 0;
gdjs._51Code.GDPersonagem1Objects1.length = 0;
gdjs._51Code.GDPersonagem1Objects2.length = 0;
gdjs._51Code.GDPersonagem1Objects3.length = 0;
gdjs._51Code.GDcursorObjects1.length = 0;
gdjs._51Code.GDcursorObjects2.length = 0;
gdjs._51Code.GDcursorObjects3.length = 0;
gdjs._51Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._51Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._51Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._51Code.GDBlackBackgroundObjects1.length = 0;
gdjs._51Code.GDBlackBackgroundObjects2.length = 0;
gdjs._51Code.GDBlackBackgroundObjects3.length = 0;
gdjs._51Code.GDStarParticleObjects1.length = 0;
gdjs._51Code.GDStarParticleObjects2.length = 0;
gdjs._51Code.GDStarParticleObjects3.length = 0;
gdjs._51Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._51Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._51Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._51Code.GDbtn_9595erroObjects1.length = 0;
gdjs._51Code.GDbtn_9595erroObjects2.length = 0;
gdjs._51Code.GDbtn_9595erroObjects3.length = 0;
gdjs._51Code.GDMesaObjects1.length = 0;
gdjs._51Code.GDMesaObjects2.length = 0;
gdjs._51Code.GDMesaObjects3.length = 0;
gdjs._51Code.GDitensObjects1.length = 0;
gdjs._51Code.GDitensObjects2.length = 0;
gdjs._51Code.GDitensObjects3.length = 0;
gdjs._51Code.GDPerguntaObjects1.length = 0;
gdjs._51Code.GDPerguntaObjects2.length = 0;
gdjs._51Code.GDPerguntaObjects3.length = 0;


return;

}

gdjs['_51Code'] = gdjs._51Code;
