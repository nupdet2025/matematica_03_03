gdjs._52Code = {};
gdjs._52Code.localVariables = [];
gdjs._52Code.GDbg_95951Objects1= [];
gdjs._52Code.GDbg_95951Objects2= [];
gdjs._52Code.GDbg_95951Objects3= [];
gdjs._52Code.GDPersonagem1Objects1= [];
gdjs._52Code.GDPersonagem1Objects2= [];
gdjs._52Code.GDPersonagem1Objects3= [];
gdjs._52Code.GDcursorObjects1= [];
gdjs._52Code.GDcursorObjects2= [];
gdjs._52Code.GDcursorObjects3= [];
gdjs._52Code.GDbtn_9595avancarObjects1= [];
gdjs._52Code.GDbtn_9595avancarObjects2= [];
gdjs._52Code.GDbtn_9595avancarObjects3= [];
gdjs._52Code.GDBlackBackgroundObjects1= [];
gdjs._52Code.GDBlackBackgroundObjects2= [];
gdjs._52Code.GDBlackBackgroundObjects3= [];
gdjs._52Code.GDStarParticleObjects1= [];
gdjs._52Code.GDStarParticleObjects2= [];
gdjs._52Code.GDStarParticleObjects3= [];
gdjs._52Code.GDMesaObjects1= [];
gdjs._52Code.GDMesaObjects2= [];
gdjs._52Code.GDMesaObjects3= [];
gdjs._52Code.GDitensObjects1= [];
gdjs._52Code.GDitensObjects2= [];
gdjs._52Code.GDitensObjects3= [];
gdjs._52Code.GDPerguntaObjects1= [];
gdjs._52Code.GDPerguntaObjects2= [];
gdjs._52Code.GDPerguntaObjects3= [];
gdjs._52Code.GDbtn_9595acertoObjects1= [];
gdjs._52Code.GDbtn_9595acertoObjects2= [];
gdjs._52Code.GDbtn_9595acertoObjects3= [];
gdjs._52Code.GDbtn_9595erroObjects1= [];
gdjs._52Code.GDbtn_9595erroObjects2= [];
gdjs._52Code.GDbtn_9595erroObjects3= [];
gdjs._52Code.GDbtn_9595erro2Objects1= [];
gdjs._52Code.GDbtn_9595erro2Objects2= [];
gdjs._52Code.GDbtn_9595erro2Objects3= [];
gdjs._52Code.GDbtn_9595erro3Objects1= [];
gdjs._52Code.GDbtn_9595erro3Objects2= [];
gdjs._52Code.GDbtn_9595erro3Objects3= [];


gdjs._52Code.asyncCallback21008820 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._52Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._52Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._52Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._52Code.GDBlackBackgroundObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs._52Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._52Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 1, false);
}
}gdjs._52Code.localVariables.length = 0;
}
gdjs._52Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._52Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._52Code.asyncCallback21008820(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._52Code.asyncCallback21015884 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._52Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "5", false);
}gdjs._52Code.localVariables.length = 0;
}
gdjs._52Code.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._52Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._52Code.asyncCallback21015884(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._52Code.asyncCallback21015228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._52Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._52Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._52Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._52Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 255, "linear", 0.5, false);
}
}
{ //Subevents
gdjs._52Code.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._52Code.localVariables.length = 0;
}
gdjs._52Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._52Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs._52Code.asyncCallback21015228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._52Code.asyncCallback21017980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._52Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro"), gdjs._52Code.GDbtn_9595erroObjects2);

{for(var i = 0, len = gdjs._52Code.GDbtn_9595erroObjects2.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erroObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._52Code.localVariables.length = 0;
}
gdjs._52Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._52Code.localVariables);
for (const obj of gdjs._52Code.GDbtn_9595erroObjects1) asyncObjectsList.addObject("btn_erro", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._52Code.asyncCallback21017980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._52Code.asyncCallback21020916 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._52Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro2"), gdjs._52Code.GDbtn_9595erro2Objects2);

{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro2Objects2.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro2Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._52Code.localVariables.length = 0;
}
gdjs._52Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._52Code.localVariables);
for (const obj of gdjs._52Code.GDbtn_9595erro2Objects1) asyncObjectsList.addObject("btn_erro2", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._52Code.asyncCallback21020916(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._52Code.asyncCallback21024196 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._52Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_erro3"), gdjs._52Code.GDbtn_9595erro3Objects2);

{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro3Objects2.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro3Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs._52Code.localVariables.length = 0;
}
gdjs._52Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._52Code.localVariables);
for (const obj of gdjs._52Code.GDbtn_9595erro3Objects1) asyncObjectsList.addObject("btn_erro3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._52Code.asyncCallback21024196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._52Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._52Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._52Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._52Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs._52Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._52Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._52Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._52Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._52Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._52Code.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._52Code.GDbtn_9595acertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._52Code.GDbtn_9595erroObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._52Code.GDbtn_9595erro2Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_erro3"), gdjs._52Code.GDbtn_9595erro3Objects1);
{for(var i = 0, len = gdjs._52Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro3Objects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_acerto"), gdjs._52Code.GDbtn_9595acertoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52Code.GDbtn_9595acertoObjects1.length;i<l;++i) {
    if ( gdjs._52Code.GDbtn_9595acertoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._52Code.GDbtn_9595acertoObjects1[k] = gdjs._52Code.GDbtn_9595acertoObjects1[i];
        ++k;
    }
}
gdjs._52Code.GDbtn_9595acertoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._52Code.GDbtn_9595acertoObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\correct-156911.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595acertoObjects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595acertoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs._52Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro"), gdjs._52Code.GDbtn_9595erroObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52Code.GDbtn_9595erroObjects1.length;i<l;++i) {
    if ( gdjs._52Code.GDbtn_9595erroObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._52Code.GDbtn_9595erroObjects1[k] = gdjs._52Code.GDbtn_9595erroObjects1[i];
        ++k;
    }
}
gdjs._52Code.GDbtn_9595erroObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._52Code.GDbtn_9595erroObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erroObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erroObjects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erroObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._52Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro2"), gdjs._52Code.GDbtn_9595erro2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52Code.GDbtn_9595erro2Objects1.length;i<l;++i) {
    if ( gdjs._52Code.GDbtn_9595erro2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._52Code.GDbtn_9595erro2Objects1[k] = gdjs._52Code.GDbtn_9595erro2Objects1[i];
        ++k;
    }
}
gdjs._52Code.GDbtn_9595erro2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._52Code.GDbtn_9595erro2Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro2Objects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._52Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_erro3"), gdjs._52Code.GDbtn_9595erro3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._52Code.GDbtn_9595erro3Objects1.length;i<l;++i) {
    if ( gdjs._52Code.GDbtn_9595erro3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._52Code.GDbtn_9595erro3Objects1[k] = gdjs._52Code.GDbtn_9595erro3Objects1[i];
        ++k;
    }
}
gdjs._52Code.GDbtn_9595erro3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs._52Code.GDbtn_9595erro3Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro3Objects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro3Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._52Code.GDbtn_9595erro3Objects1.length ;i < len;++i) {
    gdjs._52Code.GDbtn_9595erro3Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs._52Code.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs._52Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._52Code.GDbg_95951Objects1.length = 0;
gdjs._52Code.GDbg_95951Objects2.length = 0;
gdjs._52Code.GDbg_95951Objects3.length = 0;
gdjs._52Code.GDPersonagem1Objects1.length = 0;
gdjs._52Code.GDPersonagem1Objects2.length = 0;
gdjs._52Code.GDPersonagem1Objects3.length = 0;
gdjs._52Code.GDcursorObjects1.length = 0;
gdjs._52Code.GDcursorObjects2.length = 0;
gdjs._52Code.GDcursorObjects3.length = 0;
gdjs._52Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._52Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._52Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._52Code.GDBlackBackgroundObjects1.length = 0;
gdjs._52Code.GDBlackBackgroundObjects2.length = 0;
gdjs._52Code.GDBlackBackgroundObjects3.length = 0;
gdjs._52Code.GDStarParticleObjects1.length = 0;
gdjs._52Code.GDStarParticleObjects2.length = 0;
gdjs._52Code.GDStarParticleObjects3.length = 0;
gdjs._52Code.GDMesaObjects1.length = 0;
gdjs._52Code.GDMesaObjects2.length = 0;
gdjs._52Code.GDMesaObjects3.length = 0;
gdjs._52Code.GDitensObjects1.length = 0;
gdjs._52Code.GDitensObjects2.length = 0;
gdjs._52Code.GDitensObjects3.length = 0;
gdjs._52Code.GDPerguntaObjects1.length = 0;
gdjs._52Code.GDPerguntaObjects2.length = 0;
gdjs._52Code.GDPerguntaObjects3.length = 0;
gdjs._52Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._52Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._52Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._52Code.GDbtn_9595erroObjects1.length = 0;
gdjs._52Code.GDbtn_9595erroObjects2.length = 0;
gdjs._52Code.GDbtn_9595erroObjects3.length = 0;
gdjs._52Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._52Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._52Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._52Code.GDbtn_9595erro3Objects1.length = 0;
gdjs._52Code.GDbtn_9595erro3Objects2.length = 0;
gdjs._52Code.GDbtn_9595erro3Objects3.length = 0;

gdjs._52Code.eventsList6(runtimeScene);
gdjs._52Code.GDbg_95951Objects1.length = 0;
gdjs._52Code.GDbg_95951Objects2.length = 0;
gdjs._52Code.GDbg_95951Objects3.length = 0;
gdjs._52Code.GDPersonagem1Objects1.length = 0;
gdjs._52Code.GDPersonagem1Objects2.length = 0;
gdjs._52Code.GDPersonagem1Objects3.length = 0;
gdjs._52Code.GDcursorObjects1.length = 0;
gdjs._52Code.GDcursorObjects2.length = 0;
gdjs._52Code.GDcursorObjects3.length = 0;
gdjs._52Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._52Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._52Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._52Code.GDBlackBackgroundObjects1.length = 0;
gdjs._52Code.GDBlackBackgroundObjects2.length = 0;
gdjs._52Code.GDBlackBackgroundObjects3.length = 0;
gdjs._52Code.GDStarParticleObjects1.length = 0;
gdjs._52Code.GDStarParticleObjects2.length = 0;
gdjs._52Code.GDStarParticleObjects3.length = 0;
gdjs._52Code.GDMesaObjects1.length = 0;
gdjs._52Code.GDMesaObjects2.length = 0;
gdjs._52Code.GDMesaObjects3.length = 0;
gdjs._52Code.GDitensObjects1.length = 0;
gdjs._52Code.GDitensObjects2.length = 0;
gdjs._52Code.GDitensObjects3.length = 0;
gdjs._52Code.GDPerguntaObjects1.length = 0;
gdjs._52Code.GDPerguntaObjects2.length = 0;
gdjs._52Code.GDPerguntaObjects3.length = 0;
gdjs._52Code.GDbtn_9595acertoObjects1.length = 0;
gdjs._52Code.GDbtn_9595acertoObjects2.length = 0;
gdjs._52Code.GDbtn_9595acertoObjects3.length = 0;
gdjs._52Code.GDbtn_9595erroObjects1.length = 0;
gdjs._52Code.GDbtn_9595erroObjects2.length = 0;
gdjs._52Code.GDbtn_9595erroObjects3.length = 0;
gdjs._52Code.GDbtn_9595erro2Objects1.length = 0;
gdjs._52Code.GDbtn_9595erro2Objects2.length = 0;
gdjs._52Code.GDbtn_9595erro2Objects3.length = 0;
gdjs._52Code.GDbtn_9595erro3Objects1.length = 0;
gdjs._52Code.GDbtn_9595erro3Objects2.length = 0;
gdjs._52Code.GDbtn_9595erro3Objects3.length = 0;


return;

}

gdjs['_52Code'] = gdjs._52Code;
