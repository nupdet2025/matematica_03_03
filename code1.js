gdjs._50Code = {};
gdjs._50Code.localVariables = [];
gdjs._50Code.GDbg_95951Objects1= [];
gdjs._50Code.GDbg_95951Objects2= [];
gdjs._50Code.GDbg_95951Objects3= [];
gdjs._50Code.GDbg_95951Objects4= [];
gdjs._50Code.GDbg_95951Objects5= [];
gdjs._50Code.GDPersonagem1Objects1= [];
gdjs._50Code.GDPersonagem1Objects2= [];
gdjs._50Code.GDPersonagem1Objects3= [];
gdjs._50Code.GDPersonagem1Objects4= [];
gdjs._50Code.GDPersonagem1Objects5= [];
gdjs._50Code.GDcursorObjects1= [];
gdjs._50Code.GDcursorObjects2= [];
gdjs._50Code.GDcursorObjects3= [];
gdjs._50Code.GDcursorObjects4= [];
gdjs._50Code.GDcursorObjects5= [];
gdjs._50Code.GDbtn_9595avancarObjects1= [];
gdjs._50Code.GDbtn_9595avancarObjects2= [];
gdjs._50Code.GDbtn_9595avancarObjects3= [];
gdjs._50Code.GDbtn_9595avancarObjects4= [];
gdjs._50Code.GDbtn_9595avancarObjects5= [];
gdjs._50Code.GDBlackBackgroundObjects1= [];
gdjs._50Code.GDBlackBackgroundObjects2= [];
gdjs._50Code.GDBlackBackgroundObjects3= [];
gdjs._50Code.GDBlackBackgroundObjects4= [];
gdjs._50Code.GDBlackBackgroundObjects5= [];
gdjs._50Code.GDStarParticleObjects1= [];
gdjs._50Code.GDStarParticleObjects2= [];
gdjs._50Code.GDStarParticleObjects3= [];
gdjs._50Code.GDStarParticleObjects4= [];
gdjs._50Code.GDStarParticleObjects5= [];
gdjs._50Code.GDBrilhoObjects1= [];
gdjs._50Code.GDBrilhoObjects2= [];
gdjs._50Code.GDBrilhoObjects3= [];
gdjs._50Code.GDBrilhoObjects4= [];
gdjs._50Code.GDBrilhoObjects5= [];
gdjs._50Code.GDQuadroObjects1= [];
gdjs._50Code.GDQuadroObjects2= [];
gdjs._50Code.GDQuadroObjects3= [];
gdjs._50Code.GDQuadroObjects4= [];
gdjs._50Code.GDQuadroObjects5= [];
gdjs._50Code.GD_9595opMov01Objects1= [];
gdjs._50Code.GD_9595opMov01Objects2= [];
gdjs._50Code.GD_9595opMov01Objects3= [];
gdjs._50Code.GD_9595opMov01Objects4= [];
gdjs._50Code.GD_9595opMov01Objects5= [];
gdjs._50Code.GD_9595opMov02Objects1= [];
gdjs._50Code.GD_9595opMov02Objects2= [];
gdjs._50Code.GD_9595opMov02Objects3= [];
gdjs._50Code.GD_9595opMov02Objects4= [];
gdjs._50Code.GD_9595opMov02Objects5= [];
gdjs._50Code.GD_9595opMov03Objects1= [];
gdjs._50Code.GD_9595opMov03Objects2= [];
gdjs._50Code.GD_9595opMov03Objects3= [];
gdjs._50Code.GD_9595opMov03Objects4= [];
gdjs._50Code.GD_9595opMov03Objects5= [];
gdjs._50Code.GD_9595opMov04Objects1= [];
gdjs._50Code.GD_9595opMov04Objects2= [];
gdjs._50Code.GD_9595opMov04Objects3= [];
gdjs._50Code.GD_9595opMov04Objects4= [];
gdjs._50Code.GD_9595opMov04Objects5= [];
gdjs._50Code.GDcheckArea1Objects1= [];
gdjs._50Code.GDcheckArea1Objects2= [];
gdjs._50Code.GDcheckArea1Objects3= [];
gdjs._50Code.GDcheckArea1Objects4= [];
gdjs._50Code.GDcheckArea1Objects5= [];
gdjs._50Code.GDcheckArea2Objects1= [];
gdjs._50Code.GDcheckArea2Objects2= [];
gdjs._50Code.GDcheckArea2Objects3= [];
gdjs._50Code.GDcheckArea2Objects4= [];
gdjs._50Code.GDcheckArea2Objects5= [];
gdjs._50Code.GDcheckArea3Objects1= [];
gdjs._50Code.GDcheckArea3Objects2= [];
gdjs._50Code.GDcheckArea3Objects3= [];
gdjs._50Code.GDcheckArea3Objects4= [];
gdjs._50Code.GDcheckArea3Objects5= [];
gdjs._50Code.GDcheckArea4Objects1= [];
gdjs._50Code.GDcheckArea4Objects2= [];
gdjs._50Code.GDcheckArea4Objects3= [];
gdjs._50Code.GDcheckArea4Objects4= [];
gdjs._50Code.GDcheckArea4Objects5= [];


gdjs._50Code.asyncCallback20281108 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("BlackBackground"), gdjs._50Code.GDBlackBackgroundObjects2);
{for(var i = 0, len = gdjs._50Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._50Code.GDBlackBackgroundObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}{for(var i = 0, len = gdjs._50Code.GDBlackBackgroundObjects2.length ;i < len;++i) {
    gdjs._50Code.GDBlackBackgroundObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 1, false);
}
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._50Code.asyncCallback20281108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects = Hashtable.newFrom({"_opMov01": gdjs._50Code.GD_9595opMov01Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects = Hashtable.newFrom({"checkArea1": gdjs._50Code.GDcheckArea1Objects1});
gdjs._50Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20229908);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov01Objects1 */
/* Reuse gdjs._50Code.GDcheckArea1Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 1082, 355, "linear", 0.25, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._50Code.GDcheckArea1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea1Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("01");
}}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects = Hashtable.newFrom({"_opMov01": gdjs._50Code.GD_9595opMov01Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects = Hashtable.newFrom({"checkArea2": gdjs._50Code.GDcheckArea2Objects1});
gdjs._50Code.asyncCallback20236596 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov01Objects1) asyncObjectsList.addObject("_opMov01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20236596(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20234660);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov01Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 781, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects = Hashtable.newFrom({"_opMov01": gdjs._50Code.GD_9595opMov01Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects = Hashtable.newFrom({"checkArea3": gdjs._50Code.GDcheckArea3Objects1});
gdjs._50Code.asyncCallback20240788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov01Objects1) asyncObjectsList.addObject("_opMov01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20240788(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20238852);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov01Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 781, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects = Hashtable.newFrom({"_opMov01": gdjs._50Code.GD_9595opMov01Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects = Hashtable.newFrom({"checkArea4": gdjs._50Code.GDcheckArea4Objects1});
gdjs._50Code.asyncCallback20235140 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov01Objects1) asyncObjectsList.addObject("_opMov01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20235140(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20243044);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov01Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 781, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects = Hashtable.newFrom({"_opMov02": gdjs._50Code.GD_9595opMov02Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects = Hashtable.newFrom({"checkArea2": gdjs._50Code.GDcheckArea2Objects1});
gdjs._50Code.asyncCallback20824124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(2).setString("02");
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.50), (runtimeScene) => (gdjs._50Code.asyncCallback20824124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20821772);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov02Objects1 */
/* Reuse gdjs._50Code.GDcheckArea2Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 1455, 701, "linear", 0.25, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._50Code.GDcheckArea2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea2Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs._50Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects = Hashtable.newFrom({"_opMov02": gdjs._50Code.GD_9595opMov02Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects = Hashtable.newFrom({"checkArea1": gdjs._50Code.GDcheckArea1Objects1});
gdjs._50Code.asyncCallback20828412 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov02Objects1) asyncObjectsList.addObject("_opMov02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20828412(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20826476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov02Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 440, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects = Hashtable.newFrom({"_opMov02": gdjs._50Code.GD_9595opMov02Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects = Hashtable.newFrom({"checkArea3": gdjs._50Code.GDcheckArea3Objects1});
gdjs._50Code.asyncCallback20832636 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov02Objects1) asyncObjectsList.addObject("_opMov02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20832636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20830700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov02Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 440, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects = Hashtable.newFrom({"_opMov02": gdjs._50Code.GD_9595opMov02Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects = Hashtable.newFrom({"checkArea4": gdjs._50Code.GDcheckArea4Objects1});
gdjs._50Code.asyncCallback20836860 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList14 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov02Objects1) asyncObjectsList.addObject("_opMov02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20836860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20834924);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov02Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 440, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects = Hashtable.newFrom({"_opMov03": gdjs._50Code.GD_9595opMov03Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects = Hashtable.newFrom({"checkArea3": gdjs._50Code.GDcheckArea3Objects1});
gdjs._50Code.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20839532);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov03Objects1 */
/* Reuse gdjs._50Code.GDcheckArea3Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 1496, 345, "linear", 0.25, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._50Code.GDcheckArea3Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea3Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("03");
}}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects = Hashtable.newFrom({"_opMov03": gdjs._50Code.GD_9595opMov03Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects = Hashtable.newFrom({"checkArea1": gdjs._50Code.GDcheckArea1Objects1});
gdjs._50Code.asyncCallback20845388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov03Objects1) asyncObjectsList.addObject("_opMov03", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20845388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20843804);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov03Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 668, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects = Hashtable.newFrom({"_opMov03": gdjs._50Code.GD_9595opMov03Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects = Hashtable.newFrom({"checkArea2": gdjs._50Code.GDcheckArea2Objects1});
gdjs._50Code.asyncCallback20849444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList19 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov03Objects1) asyncObjectsList.addObject("_opMov03", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20849444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20847676);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov03Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 668, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects = Hashtable.newFrom({"_opMov03": gdjs._50Code.GD_9595opMov03Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects = Hashtable.newFrom({"checkArea4": gdjs._50Code.GDcheckArea4Objects1});
gdjs._50Code.asyncCallback20853668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov03Objects1) asyncObjectsList.addObject("_opMov03", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20853668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20851732);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov03Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 668, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList21(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects = Hashtable.newFrom({"_opMov04": gdjs._50Code.GD_9595opMov04Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects = Hashtable.newFrom({"checkArea4": gdjs._50Code.GDcheckArea4Objects1});
gdjs._50Code.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20856412);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov04Objects1 */
/* Reuse gdjs._50Code.GDcheckArea4Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 1037, 706, "linear", 0.25, false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_press.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs._50Code.GDcheckArea4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea4Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(4).setString("04");
}}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects = Hashtable.newFrom({"_opMov04": gdjs._50Code.GD_9595opMov04Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects = Hashtable.newFrom({"checkArea1": gdjs._50Code.GDcheckArea1Objects1});
gdjs._50Code.asyncCallback20862268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList24 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov04Objects1) asyncObjectsList.addObject("_opMov04", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20862268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20860684);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov04Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 555, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList24(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects = Hashtable.newFrom({"_opMov04": gdjs._50Code.GD_9595opMov04Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects = Hashtable.newFrom({"checkArea2": gdjs._50Code.GDcheckArea2Objects1});
gdjs._50Code.asyncCallback20866324 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList26 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov04Objects1) asyncObjectsList.addObject("_opMov04", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20866324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20864556);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov04Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 555, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects = Hashtable.newFrom({"_opMov04": gdjs._50Code.GD_9595opMov04Objects1});
gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects = Hashtable.newFrom({"checkArea3": gdjs._50Code.GDcheckArea3Objects1});
gdjs._50Code.asyncCallback20870548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects2);

{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects2.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects2[i].activateBehavior("Draggable", true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList28 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
for (const obj of gdjs._50Code.GD_9595opMov04Objects1) asyncObjectsList.addObject("_opMov04", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20870548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20868612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs._50Code.GD_9595opMov04Objects1 */
{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].activateBehavior("Draggable", false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 50, 50, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].setColor("252;127;122");
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("Tween").addObjectPositionTween2("setting", 238, 555, "linear", 0.25, false);
}
}
{ //Subevents
gdjs._50Code.eventsList28(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.asyncCallback20874548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList30 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2.5), (runtimeScene) => (gdjs._50Code.asyncCallback20874548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback20873948 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sucess.mp3", false, 100, 1);
}
{ //Subevents
gdjs._50Code.eventsList30(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList31 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs._50Code.asyncCallback20873948(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback20873644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
{gdjs.evtTools.camera.showLayer(runtimeScene, "UI");
}
{ //Subevents
gdjs._50Code.eventsList31(runtimeScene, asyncObjectsList);} //End of subevents
gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList32 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs._50Code.asyncCallback20873644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.asyncCallback20875876 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs._50Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "3", false);
}gdjs._50Code.localVariables.length = 0;
}
gdjs._50Code.eventsList33 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs._50Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._50Code.asyncCallback20875876(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._50Code.eventsList34 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsString() == "01");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsString() == "02");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "03");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsString() == "04");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20873388);
}
}
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs._50Code.eventsList32(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_avancar"), gdjs._50Code.GDbtn_9595avancarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "UI");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._50Code.GDbtn_9595avancarObjects1.length;i<l;++i) {
    if ( gdjs._50Code.GDbtn_9595avancarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs._50Code.GDbtn_9595avancarObjects1[k] = gdjs._50Code.GDbtn_9595avancarObjects1[i];
        ++k;
    }
}
gdjs._50Code.GDbtn_9595avancarObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\pop.ogg", false, 100, 1);
}
{ //Subevents
gdjs._50Code.eventsList33(runtimeScene);} //End of subevents
}

}


};gdjs._50Code.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._50Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._50Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._50Code.GDcursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects1);
gdjs.copyArray(runtimeScene.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects1);
gdjs.copyArray(runtimeScene.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects1);
gdjs.copyArray(runtimeScene.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea1"), gdjs._50Code.GDcheckArea1Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea2"), gdjs._50Code.GDcheckArea2Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea3"), gdjs._50Code.GDcheckArea3Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea4"), gdjs._50Code.GDcheckArea4Objects1);
{for(var i = 0, len = gdjs._50Code.GDcheckArea1Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea1Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GDcheckArea2Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea2Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GDcheckArea3Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea3Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GDcheckArea4Objects1.length ;i < len;++i) {
    gdjs._50Code.GDcheckArea4Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov01Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov01Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov02Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov02Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov03Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov03Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs._50Code.GD_9595opMov04Objects1.length ;i < len;++i) {
    gdjs._50Code.GD_9595opMov04Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
{ //Subevents
gdjs._50Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cursor"), gdjs._50Code.GDcursorObjects1);
{for(var i = 0, len = gdjs._50Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._50Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs._50Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs._50Code.GDcursorObjects1[i].hide(false);
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea1"), gdjs._50Code.GDcheckArea1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(2);
}
{ //Subevents
gdjs._50Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea2"), gdjs._50Code.GDcheckArea2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 2);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{ //Subevents
gdjs._50Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea3"), gdjs._50Code.GDcheckArea3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}
{ //Subevents
gdjs._50Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov01"), gdjs._50Code.GD_9595opMov01Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea4"), gdjs._50Code.GDcheckArea4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov01Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() != 3);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(4);
}
{ //Subevents
gdjs._50Code.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea2"), gdjs._50Code.GDcheckArea2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() != 4);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}
{ //Subevents
gdjs._50Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea1"), gdjs._50Code.GDcheckArea1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() != 4);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}
{ //Subevents
gdjs._50Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea3"), gdjs._50Code.GDcheckArea3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != 1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}
{ //Subevents
gdjs._50Code.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov02"), gdjs._50Code.GD_9595opMov02Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea4"), gdjs._50Code.GDcheckArea4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov02Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber() != 3);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(4);
}
{ //Subevents
gdjs._50Code.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea3"), gdjs._50Code.GDcheckArea3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}
{ //Subevents
gdjs._50Code.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea1"), gdjs._50Code.GDcheckArea1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 3);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{ //Subevents
gdjs._50Code.eventsList18(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea2"), gdjs._50Code.GDcheckArea2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 3);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(2);
}
{ //Subevents
gdjs._50Code.eventsList20(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov03"), gdjs._50Code.GD_9595opMov03Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea4"), gdjs._50Code.GDcheckArea4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov03Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() != 3);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(4);
}
{ //Subevents
gdjs._50Code.eventsList22(runtimeScene);} //End of subevents
}

}


{



}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea4"), gdjs._50Code.GDcheckArea4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea4Objects1Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(2);
}
{ //Subevents
gdjs._50Code.eventsList23(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea1"), gdjs._50Code.GDcheckArea1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 3);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}
{ //Subevents
gdjs._50Code.eventsList25(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea2"), gdjs._50Code.GDcheckArea2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 3);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(4);
}
{ //Subevents
gdjs._50Code.eventsList27(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("_opMov04"), gdjs._50Code.GD_9595opMov04Objects1);
gdjs.copyArray(runtimeScene.getObjects("checkArea3"), gdjs._50Code.GDcheckArea3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GD_95959595opMov04Objects1Objects, gdjs._50Code.mapOfGDgdjs_9546_959550Code_9546GDcheckArea3Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() != 4);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(3);
}
{ //Subevents
gdjs._50Code.eventsList29(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs._50Code.eventsList34(runtimeScene);
}


};

gdjs._50Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._50Code.GDbg_95951Objects1.length = 0;
gdjs._50Code.GDbg_95951Objects2.length = 0;
gdjs._50Code.GDbg_95951Objects3.length = 0;
gdjs._50Code.GDbg_95951Objects4.length = 0;
gdjs._50Code.GDbg_95951Objects5.length = 0;
gdjs._50Code.GDPersonagem1Objects1.length = 0;
gdjs._50Code.GDPersonagem1Objects2.length = 0;
gdjs._50Code.GDPersonagem1Objects3.length = 0;
gdjs._50Code.GDPersonagem1Objects4.length = 0;
gdjs._50Code.GDPersonagem1Objects5.length = 0;
gdjs._50Code.GDcursorObjects1.length = 0;
gdjs._50Code.GDcursorObjects2.length = 0;
gdjs._50Code.GDcursorObjects3.length = 0;
gdjs._50Code.GDcursorObjects4.length = 0;
gdjs._50Code.GDcursorObjects5.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects4.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects5.length = 0;
gdjs._50Code.GDBlackBackgroundObjects1.length = 0;
gdjs._50Code.GDBlackBackgroundObjects2.length = 0;
gdjs._50Code.GDBlackBackgroundObjects3.length = 0;
gdjs._50Code.GDBlackBackgroundObjects4.length = 0;
gdjs._50Code.GDBlackBackgroundObjects5.length = 0;
gdjs._50Code.GDStarParticleObjects1.length = 0;
gdjs._50Code.GDStarParticleObjects2.length = 0;
gdjs._50Code.GDStarParticleObjects3.length = 0;
gdjs._50Code.GDStarParticleObjects4.length = 0;
gdjs._50Code.GDStarParticleObjects5.length = 0;
gdjs._50Code.GDBrilhoObjects1.length = 0;
gdjs._50Code.GDBrilhoObjects2.length = 0;
gdjs._50Code.GDBrilhoObjects3.length = 0;
gdjs._50Code.GDBrilhoObjects4.length = 0;
gdjs._50Code.GDBrilhoObjects5.length = 0;
gdjs._50Code.GDQuadroObjects1.length = 0;
gdjs._50Code.GDQuadroObjects2.length = 0;
gdjs._50Code.GDQuadroObjects3.length = 0;
gdjs._50Code.GDQuadroObjects4.length = 0;
gdjs._50Code.GDQuadroObjects5.length = 0;
gdjs._50Code.GD_9595opMov01Objects1.length = 0;
gdjs._50Code.GD_9595opMov01Objects2.length = 0;
gdjs._50Code.GD_9595opMov01Objects3.length = 0;
gdjs._50Code.GD_9595opMov01Objects4.length = 0;
gdjs._50Code.GD_9595opMov01Objects5.length = 0;
gdjs._50Code.GD_9595opMov02Objects1.length = 0;
gdjs._50Code.GD_9595opMov02Objects2.length = 0;
gdjs._50Code.GD_9595opMov02Objects3.length = 0;
gdjs._50Code.GD_9595opMov02Objects4.length = 0;
gdjs._50Code.GD_9595opMov02Objects5.length = 0;
gdjs._50Code.GD_9595opMov03Objects1.length = 0;
gdjs._50Code.GD_9595opMov03Objects2.length = 0;
gdjs._50Code.GD_9595opMov03Objects3.length = 0;
gdjs._50Code.GD_9595opMov03Objects4.length = 0;
gdjs._50Code.GD_9595opMov03Objects5.length = 0;
gdjs._50Code.GD_9595opMov04Objects1.length = 0;
gdjs._50Code.GD_9595opMov04Objects2.length = 0;
gdjs._50Code.GD_9595opMov04Objects3.length = 0;
gdjs._50Code.GD_9595opMov04Objects4.length = 0;
gdjs._50Code.GD_9595opMov04Objects5.length = 0;
gdjs._50Code.GDcheckArea1Objects1.length = 0;
gdjs._50Code.GDcheckArea1Objects2.length = 0;
gdjs._50Code.GDcheckArea1Objects3.length = 0;
gdjs._50Code.GDcheckArea1Objects4.length = 0;
gdjs._50Code.GDcheckArea1Objects5.length = 0;
gdjs._50Code.GDcheckArea2Objects1.length = 0;
gdjs._50Code.GDcheckArea2Objects2.length = 0;
gdjs._50Code.GDcheckArea2Objects3.length = 0;
gdjs._50Code.GDcheckArea2Objects4.length = 0;
gdjs._50Code.GDcheckArea2Objects5.length = 0;
gdjs._50Code.GDcheckArea3Objects1.length = 0;
gdjs._50Code.GDcheckArea3Objects2.length = 0;
gdjs._50Code.GDcheckArea3Objects3.length = 0;
gdjs._50Code.GDcheckArea3Objects4.length = 0;
gdjs._50Code.GDcheckArea3Objects5.length = 0;
gdjs._50Code.GDcheckArea4Objects1.length = 0;
gdjs._50Code.GDcheckArea4Objects2.length = 0;
gdjs._50Code.GDcheckArea4Objects3.length = 0;
gdjs._50Code.GDcheckArea4Objects4.length = 0;
gdjs._50Code.GDcheckArea4Objects5.length = 0;

gdjs._50Code.eventsList35(runtimeScene);
gdjs._50Code.GDbg_95951Objects1.length = 0;
gdjs._50Code.GDbg_95951Objects2.length = 0;
gdjs._50Code.GDbg_95951Objects3.length = 0;
gdjs._50Code.GDbg_95951Objects4.length = 0;
gdjs._50Code.GDbg_95951Objects5.length = 0;
gdjs._50Code.GDPersonagem1Objects1.length = 0;
gdjs._50Code.GDPersonagem1Objects2.length = 0;
gdjs._50Code.GDPersonagem1Objects3.length = 0;
gdjs._50Code.GDPersonagem1Objects4.length = 0;
gdjs._50Code.GDPersonagem1Objects5.length = 0;
gdjs._50Code.GDcursorObjects1.length = 0;
gdjs._50Code.GDcursorObjects2.length = 0;
gdjs._50Code.GDcursorObjects3.length = 0;
gdjs._50Code.GDcursorObjects4.length = 0;
gdjs._50Code.GDcursorObjects5.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects1.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects2.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects3.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects4.length = 0;
gdjs._50Code.GDbtn_9595avancarObjects5.length = 0;
gdjs._50Code.GDBlackBackgroundObjects1.length = 0;
gdjs._50Code.GDBlackBackgroundObjects2.length = 0;
gdjs._50Code.GDBlackBackgroundObjects3.length = 0;
gdjs._50Code.GDBlackBackgroundObjects4.length = 0;
gdjs._50Code.GDBlackBackgroundObjects5.length = 0;
gdjs._50Code.GDStarParticleObjects1.length = 0;
gdjs._50Code.GDStarParticleObjects2.length = 0;
gdjs._50Code.GDStarParticleObjects3.length = 0;
gdjs._50Code.GDStarParticleObjects4.length = 0;
gdjs._50Code.GDStarParticleObjects5.length = 0;
gdjs._50Code.GDBrilhoObjects1.length = 0;
gdjs._50Code.GDBrilhoObjects2.length = 0;
gdjs._50Code.GDBrilhoObjects3.length = 0;
gdjs._50Code.GDBrilhoObjects4.length = 0;
gdjs._50Code.GDBrilhoObjects5.length = 0;
gdjs._50Code.GDQuadroObjects1.length = 0;
gdjs._50Code.GDQuadroObjects2.length = 0;
gdjs._50Code.GDQuadroObjects3.length = 0;
gdjs._50Code.GDQuadroObjects4.length = 0;
gdjs._50Code.GDQuadroObjects5.length = 0;
gdjs._50Code.GD_9595opMov01Objects1.length = 0;
gdjs._50Code.GD_9595opMov01Objects2.length = 0;
gdjs._50Code.GD_9595opMov01Objects3.length = 0;
gdjs._50Code.GD_9595opMov01Objects4.length = 0;
gdjs._50Code.GD_9595opMov01Objects5.length = 0;
gdjs._50Code.GD_9595opMov02Objects1.length = 0;
gdjs._50Code.GD_9595opMov02Objects2.length = 0;
gdjs._50Code.GD_9595opMov02Objects3.length = 0;
gdjs._50Code.GD_9595opMov02Objects4.length = 0;
gdjs._50Code.GD_9595opMov02Objects5.length = 0;
gdjs._50Code.GD_9595opMov03Objects1.length = 0;
gdjs._50Code.GD_9595opMov03Objects2.length = 0;
gdjs._50Code.GD_9595opMov03Objects3.length = 0;
gdjs._50Code.GD_9595opMov03Objects4.length = 0;
gdjs._50Code.GD_9595opMov03Objects5.length = 0;
gdjs._50Code.GD_9595opMov04Objects1.length = 0;
gdjs._50Code.GD_9595opMov04Objects2.length = 0;
gdjs._50Code.GD_9595opMov04Objects3.length = 0;
gdjs._50Code.GD_9595opMov04Objects4.length = 0;
gdjs._50Code.GD_9595opMov04Objects5.length = 0;
gdjs._50Code.GDcheckArea1Objects1.length = 0;
gdjs._50Code.GDcheckArea1Objects2.length = 0;
gdjs._50Code.GDcheckArea1Objects3.length = 0;
gdjs._50Code.GDcheckArea1Objects4.length = 0;
gdjs._50Code.GDcheckArea1Objects5.length = 0;
gdjs._50Code.GDcheckArea2Objects1.length = 0;
gdjs._50Code.GDcheckArea2Objects2.length = 0;
gdjs._50Code.GDcheckArea2Objects3.length = 0;
gdjs._50Code.GDcheckArea2Objects4.length = 0;
gdjs._50Code.GDcheckArea2Objects5.length = 0;
gdjs._50Code.GDcheckArea3Objects1.length = 0;
gdjs._50Code.GDcheckArea3Objects2.length = 0;
gdjs._50Code.GDcheckArea3Objects3.length = 0;
gdjs._50Code.GDcheckArea3Objects4.length = 0;
gdjs._50Code.GDcheckArea3Objects5.length = 0;
gdjs._50Code.GDcheckArea4Objects1.length = 0;
gdjs._50Code.GDcheckArea4Objects2.length = 0;
gdjs._50Code.GDcheckArea4Objects3.length = 0;
gdjs._50Code.GDcheckArea4Objects4.length = 0;
gdjs._50Code.GDcheckArea4Objects5.length = 0;


return;

}

gdjs['_50Code'] = gdjs._50Code;
