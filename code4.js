gdjs._53Code = {};
gdjs._53Code.localVariables = [];
gdjs._53Code.GDbg_95951Objects1= [];
gdjs._53Code.GDbg_95951Objects2= [];
gdjs._53Code.GDbg_95951Objects3= [];
gdjs._53Code.GDPersonagem1Objects1= [];
gdjs._53Code.GDPersonagem1Objects2= [];
gdjs._53Code.GDPersonagem1Objects3= [];
gdjs._53Code.GDcursorObjects1= [];
gdjs._53Code.GDcursorObjects2= [];
gdjs._53Code.GDcursorObjects3= [];
gdjs._53Code.GDquadro_9595avancarObjects1= [];
gdjs._53Code.GDquadro_9595avancarObjects2= [];
gdjs._53Code.GDquadro_9595avancarObjects3= [];
gdjs._53Code.GDbtn_9595avancarObjects1= [];
gdjs._53Code.GDbtn_9595avancarObjects2= [];
gdjs._53Code.GDbtn_9595avancarObjects3= [];
gdjs._53Code.GDBlackBackgroundObjects1= [];
gdjs._53Code.GDBlackBackgroundObjects2= [];
gdjs._53Code.GDBlackBackgroundObjects3= [];
gdjs._53Code.GDStarParticleObjects1= [];
gdjs._53Code.GDStarParticleObjects2= [];
gdjs._53Code.GDStarParticleObjects3= [];
gdjs._53Code.GDRedFlameObjects1= [];
gdjs._53Code.GDRedFlameObjects2= [];
gdjs._53Code.GDRedFlameObjects3= [];
gdjs._53Code.GDPoeiraObjects1= [];
gdjs._53Code.GDPoeiraObjects2= [];
gdjs._53Code.GDPoeiraObjects3= [];
gdjs._53Code.GDStarParticle2Objects1= [];
gdjs._53Code.GDStarParticle2Objects2= [];
gdjs._53Code.GDStarParticle2Objects3= [];
gdjs._53Code.GDjogar_9595novamenteObjects1= [];
gdjs._53Code.GDjogar_9595novamenteObjects2= [];
gdjs._53Code.GDjogar_9595novamenteObjects3= [];
gdjs._53Code.GDbtn_9595jogarObjects1= [];
gdjs._53Code.GDbtn_9595jogarObjects2= [];
gdjs._53Code.GDbtn_9595jogarObjects3= [];
gdjs._53Code.GDMesaObjects1= [];
gdjs._53Code.GDMesaObjects2= [];
gdjs._53Code.GDMesaObjects3= [];
gdjs._53Code.GDitensObjects1= [];
gdjs._53Code.GDitensObjects2= [];
gdjs._53Code.GDitensObjects3= [];
gdjs._53Code.GDbtn_9595acertoObjects1= [];
gdjs._53Code.GDbtn_9595acertoObjects2= [];
gdjs._53Code.GDbtn_9595acertoObjects3= [];
gdjs._53Code.GDbtn_9595erroObjects1= [];
gdjs._53Code.GDbtn_9595erroObjects2= [];
gdjs._53Code.GDbtn_9595erroObjects3= [];
gdjs._53Code.GDbtn_9595erro2Objects1= [];
gdjs._53Code.GDbtn_9595erro2Objects2= [];
gdjs._53Code.GDbtn_9595erro2Objects3= [];
gdjs._53Code.GDbtn_9595erro3Objects1= [];
gdjs._53Code.GDbtn_9595erro3Objects2= [];
gdjs._53Code.GDbtn_9595erro3Objects3= [];
gdjs._53Code.GDPerguntaObjects1= [];
gdjs._53Code.GDPerguntaObjects2= [];
gdjs._53Code.GDPerguntaObjects3= [];


gdjs._53Code.asyncCallback21087212 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._53Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._53Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._53Code.GDBlackBackgroundObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs._53Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._53Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.5, false);
}
}gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._53Code.asyncCallback21087212(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.asyncCallback21093580 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("quadro_avancar"), gdjs._53Code.GDquadro_9595avancarObjects3);
{for(var i = 0, len = gdjs._53Code.GDquadro_9595avancarObjects3.length ;i < len;++i) {
    gdjs._53Code.GDquadro_9595avancarObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}{for(var i = 0, len = gdjs._53Code.GDquadro_9595avancarObjects3.length ;i < len;++i) {
    gdjs._53Code.GDquadro_9595avancarObjects3[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 1000, "linear", 2, false);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\victory.mp3", 2, true, 40, 1);
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3.5), (runtimeScene) => (gdjs._53Code.asyncCallback21093580(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.asyncCallback21093164 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs._53Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._53Code.asyncCallback21093164(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.asyncCallback21097396 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro"), gdjs._53Code.GDbtn_9595erroObjects2);

{for(var i = 0, len = gdjs._53Code.GDbtn_9595erroObjects2.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erroObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
for (const obj of gdjs._53Code.GDbtn_9595erroObjects1) asyncObjectsList.addObject("btn_erro", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._53Code.asyncCallback21097396(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.asyncCallback21100676 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro2"), gdjs._53Code.GDbtn_9595erro2Objects2);

{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro2Objects2.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro2Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
for (const obj of gdjs._53Code.GDbtn_9595erro2Objects1) asyncObjectsList.addObject("btn_erro2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._53Code.asyncCallback21100676(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.asyncCallback21103692 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro3"), gdjs._53Code.GDbtn_9595erro3Objects2);

{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro3Objects2.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro3Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
for (const obj of gdjs._53Code.GDbtn_9595erro3Objects1) asyncObjectsList.addObject("btn_erro3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._53Code.asyncCallback21103692(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.asyncCallback21105852 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._53Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "1", false);
}gdjs._53Code.localVariables.length = 0;
}
gdjs._53Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._53Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._53Code.asyncCallback21105852(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._53Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._53Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._53Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._53Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}
{ //Subevents
gdjs._53Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._53Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._53Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._53Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._53Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._53Code.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._53Code.GDbtn_9595acertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._53Code.GDbtn_9595erroObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._53Code.GDbtn_9595erro2Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro3"), gdjs._53Code.GDbtn_9595erro3Objects1);
{for(var i = 0, len = gdjs._53Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro3Objects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._53Code.GDbtn_9595acertoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDbtn_9595acertoObjects1.length;i<l;++i) {
    if ( gdjs._53Code.GDbtn_9595acertoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDbtn_9595acertoObjects1[k] = gdjs._53Code.GDbtn_9595acertoObjects1[i];
        ++k;
    }
}
gdjs._53Code.GDbtn_9595acertoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._53Code.GDbtn_9595acertoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\correct-156911.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs._53Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._53Code.GDbtn_9595erroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDbtn_9595erroObjects1.length;i<l;++i) {
    if ( gdjs._53Code.GDbtn_9595erroObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDbtn_9595erroObjects1[k] = gdjs._53Code.GDbtn_9595erroObjects1[i];
        ++k;
    }
}
gdjs._53Code.GDbtn_9595erroObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._53Code.GDbtn_9595erroObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erroObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._53Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._53Code.GDbtn_9595erro2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDbtn_9595erro2Objects1.length;i<l;++i) {
    if ( gdjs._53Code.GDbtn_9595erro2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDbtn_9595erro2Objects1[k] = gdjs._53Code.GDbtn_9595erro2Objects1[i];
        ++k;
    }
}
gdjs._53Code.GDbtn_9595erro2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._53Code.GDbtn_9595erro2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._53Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro3"), gdjs._53Code.GDbtn_9595erro3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDbtn_9595erro3Objects1.length;i<l;++i) {
    if ( gdjs._53Code.GDbtn_9595erro3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDbtn_9595erro3Objects1[k] = gdjs._53Code.GDbtn_9595erro3Objects1[i];
        ++k;
    }
}
gdjs._53Code.GDbtn_9595erro3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._53Code.GDbtn_9595erro3Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro3Objects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro3Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._53Code.GDbtn_9595erro3Objects1.length ;i < len;++i) {
    gdjs._53Code.GDbtn_9595erro3Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._53Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("jogar_novamente"), gdjs._53Code.GDjogar_9595novamenteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._53Code.GDjogar_9595novamenteObjects1.length;i<l;++i) {
    if ( gdjs._53Code.GDjogar_9595novamenteObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._53Code.GDjogar_9595novamenteObjects1[k] = gdjs._53Code.GDjogar_9595novamenteObjects1[i];
        ++k;
    }
}
gdjs._53Code.GDjogar_9595novamenteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._53Code.GDBlackBackgroundObjects1);
{for(var i = 0, len = gdjs._53Code.GDBlackBackgroundObjects1.length ;i < len;++i) {
    gdjs._53Code.GDBlackBackgroundObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.5, false);
}
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{ //Subevents
gdjs._53Code.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs._53Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._53Code.GDbg_95951Objects1.length = 0;
gdjs._53Code.GDbg_95951Objects2.length = 0;
gdjs._53Code.GDbg_95951Objects3.length = 0;
gdjs._53Code.GDPersonagem1Objects1.length = 0;
gdjs._53Code.GDPersonagem1Objects2.length = 0;
gdjs._53Code.GDPersonagem1Objects3.length = 0;
gdjs._53Code.GDcursorObjects1.length = 0;
gdjs._53Code.GDcursorObjects2.length = 0;
gdjs._53Code.GDcursorObjects3.length = 0;
gdjs._53Code.GDquadro_9595avancarObjects1.length = 0;
gdjs._53Code.GDquadro_9595avancarObjects2.length = 0;
gdjs._53Code.GDquadro_9595avancarObjects3.length = 0;
gdjs._53Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._53Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._53Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._53Code.GDBlackBackgroundObjects1.length = 0;
gdjs._53Code.GDBlackBackgroundObjects2.length = 0;
gdjs._53Code.GDBlackBackgroundObjects3.length = 0;
gdjs._53Code.GDStarParticleObjects1.length = 0;
gdjs._53Code.GDStarParticleObjects2.length = 0;
gdjs._53Code.GDStarParticleObjects3.length = 0;
gdjs._53Code.GDRedFlameObjects1.length = 0;
gdjs._53Code.GDRedFlameObjects2.length = 0;
gdjs._53Code.GDRedFlameObjects3.length = 0;
gdjs._53Code.GDPoeiraObjects1.length = 0;
gdjs._53Code.GDPoeiraObjects2.length = 0;
gdjs._53Code.GDPoeiraObjects3.length = 0;
gdjs._53Code.GDStarParticle2Objects1.length = 0;
gdjs._53Code.GDStarParticle2Objects2.length = 0;
gdjs._53Code.GDStarParticle2Objects3.length = 0;
gdjs._53Code.GDjogar_9595novamenteObjects1.length = 0;
gdjs._53Code.GDjogar_9595novamenteObjects2.length = 0;
gdjs._53Code.GDjogar_9595novamenteObjects3.length = 0;
gdjs._53Code.GDbtn_9595jogarObjects1.length = 0;
gdjs._53Code.GDbtn_9595jogarObjects2.length = 0;
gdjs._53Code.GDbtn_9595jogarObjects3.length = 0;
gdjs._53Code.GDMesaObjects1.length = 0;
gdjs._53Code.GDMesaObjects2.length = 0;
gdjs._53Code.GDMesaObjects3.length = 0;
gdjs._53Code.GDitensObjects1.length = 0;
gdjs._53Code.GDitensObjects2.length = 0;
gdjs._53Code.GDitensObjects3.length = 0;
gdjs._53Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._53Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._53Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._53Code.GDbtn_9595erroObjects1.length = 0;
gdjs._53Code.GDbtn_9595erroObjects2.length = 0;
gdjs._53Code.GDbtn_9595erroObjects3.length = 0;
gdjs._53Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._53Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._53Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._53Code.GDbtn_9595erro3Objects1.length = 0;
gdjs._53Code.GDbtn_9595erro3Objects2.length = 0;
gdjs._53Code.GDbtn_9595erro3Objects3.length = 0;
gdjs._53Code.GDPerguntaObjects1.length = 0;
gdjs._53Code.GDPerguntaObjects2.length = 0;
gdjs._53Code.GDPerguntaObjects3.length = 0;

gdjs._53Code.eventsList7(runtimeScene);
gdjs._53Code.GDbg_95951Objects1.length = 0;
gdjs._53Code.GDbg_95951Objects2.length = 0;
gdjs._53Code.GDbg_95951Objects3.length = 0;
gdjs._53Code.GDPersonagem1Objects1.length = 0;
gdjs._53Code.GDPersonagem1Objects2.length = 0;
gdjs._53Code.GDPersonagem1Objects3.length = 0;
gdjs._53Code.GDcursorObjects1.length = 0;
gdjs._53Code.GDcursorObjects2.length = 0;
gdjs._53Code.GDcursorObjects3.length = 0;
gdjs._53Code.GDquadro_9595avancarObjects1.length = 0;
gdjs._53Code.GDquadro_9595avancarObjects2.length = 0;
gdjs._53Code.GDquadro_9595avancarObjects3.length = 0;
gdjs._53Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._53Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._53Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._53Code.GDBlackBackgroundObjects1.length = 0;
gdjs._53Code.GDBlackBackgroundObjects2.length = 0;
gdjs._53Code.GDBlackBackgroundObjects3.length = 0;
gdjs._53Code.GDStarParticleObjects1.length = 0;
gdjs._53Code.GDStarParticleObjects2.length = 0;
gdjs._53Code.GDStarParticleObjects3.length = 0;
gdjs._53Code.GDRedFlameObjects1.length = 0;
gdjs._53Code.GDRedFlameObjects2.length = 0;
gdjs._53Code.GDRedFlameObjects3.length = 0;
gdjs._53Code.GDPoeiraObjects1.length = 0;
gdjs._53Code.GDPoeiraObjects2.length = 0;
gdjs._53Code.GDPoeiraObjects3.length = 0;
gdjs._53Code.GDStarParticle2Objects1.length = 0;
gdjs._53Code.GDStarParticle2Objects2.length = 0;
gdjs._53Code.GDStarParticle2Objects3.length = 0;
gdjs._53Code.GDjogar_9595novamenteObjects1.length = 0;
gdjs._53Code.GDjogar_9595novamenteObjects2.length = 0;
gdjs._53Code.GDjogar_9595novamenteObjects3.length = 0;
gdjs._53Code.GDbtn_9595jogarObjects1.length = 0;
gdjs._53Code.GDbtn_9595jogarObjects2.length = 0;
gdjs._53Code.GDbtn_9595jogarObjects3.length = 0;
gdjs._53Code.GDMesaObjects1.length = 0;
gdjs._53Code.GDMesaObjects2.length = 0;
gdjs._53Code.GDMesaObjects3.length = 0;
gdjs._53Code.GDitensObjects1.length = 0;
gdjs._53Code.GDitensObjects2.length = 0;
gdjs._53Code.GDitensObjects3.length = 0;
gdjs._53Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._53Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._53Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._53Code.GDbtn_9595erroObjects1.length = 0;
gdjs._53Code.GDbtn_9595erroObjects2.length = 0;
gdjs._53Code.GDbtn_9595erroObjects3.length = 0;
gdjs._53Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._53Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._53Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._53Code.GDbtn_9595erro3Objects1.length = 0;
gdjs._53Code.GDbtn_9595erro3Objects2.length = 0;
gdjs._53Code.GDbtn_9595erro3Objects3.length = 0;
gdjs._53Code.GDPerguntaObjects1.length = 0;
gdjs._53Code.GDPerguntaObjects2.length = 0;
gdjs._53Code.GDPerguntaObjects3.length = 0;


return;

}

gdjs['_53Code'] = gdjs._53Code;
