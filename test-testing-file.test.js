"use strict";

const { test, l, Locator, go, resize, click, type, exists, waitForText, sendCharacter, generateRandomValue, scrollToElement, sleep } = require('testim');

Locator.set(require('./locators/locators.js'));

test("Forth test", async () => {
  await go("https://successcraft-2b4-dev-ed.lightning.force.com/");
  await resize({width: 1024, height: 680});
  // Converting a 'marketplace-wrapper' step has to be done manually at this time
  await Testing_Custom_Objects_using_UI();
  await Testing_Custom_Objects_with_Multiply_adding();
  // Converting a 'salesforce-apex-action' step has to be done manually at this time
  // Converting a 'salesforce-apex-action' step has to be done manually at this time
  await Validate_Test_Object();
  // Converting a 'salesforce-apex-action' step has to be done manually at this time
  await Test_search_test_object();
  await Delete_custom_record();
  // Converting a 'salesforce-apex-action' step has to be done manually at this time
  await Checkout();
});

// shared steps \\
async function Test_find_test_objects() {
  await click(l("Home"));
  await click(l("[aria-invalid='false']"));
  await type(l("[aria-invalid='false']"), randomValue);
  await click(l(".slds-p-around_medium_>_lightning-b"));
  //TODO Please add an assertion here
await exists(l("close_Close_List_of_search_test_obj"));
  await waitForText(l("Product_Name"), randomValue);
  await click(l("Cancel"));
}

async function Delete_test_object() {
  await click(l("TestCustomObjects"));
  // Converting a 'drag' step has to be done manually at this time
  await type(l("Search_this_list..."), randomValue);
  await sendCharacter(l("Search_this_list..."), '\r');
  await click(l(".listDisplays_.slds-icon_container_"));
  await click(l("Delete"));
  //TODO Please add an assertion here
await exists(l("Delete_TestCustomObject_Close_this_"));
  await waitForText(l("Are_you_sure_you_want_to_delete_thi"), 'Are you sure you want to delete this TestCustomObject?');
  await click(l("[data-aura-class='uiButton--default"));
}

async function Testing_Custom_Objects_using_UI() {
  await generateRandomValue(12, 'Mixed');
  await click(l(".slds-icon-waffle"));
  await type(l("Search_apps_and_items..."), 'sale');
  await click(l("Sale"));
  await scrollToElement(l("eNMmMht33jIWYqmv"));
  await click(l("Enter_name"));
  await type(l("Enter_name"), randomValue);
  await click(l("Primary_action"));
  await Test_find_test_objects();
  await Delete_test_object();
}

async function Add_custom_objects() {
  await scrollToElement(l("eNMmMht33jIWYqmv"));
  await click(l("Enter_name"));
  await type(l("Enter_name"), '6370ba9e0edf476fbd85268cfd408568');
  await click(l("Primary_action"));
}

async function Delete_test_custom_objects() {
  await type(l("Search_this_list..."), '6370ba9e0edf476fbd85268cfd408568');
  await sendCharacter(l("Search_this_list..."), '\r');
  await click(l(".listDisplays_.slds-icon_container_"));
  await click(l("Delete"));
  //TODO Please add an assertion here
await exists(l("Delete_TestCustomObject_Close_this_"));
  await waitForText(l("Are_you_sure_you_want_to_delete_thi"), 'Are you sure you want to delete this TestCustomObject?');
  await click(l("[data-aura-class='uiButton--default"));
}

async function Testing_Custom_Objects_with_Multiply_adding(param) {
  await click(l("[data-id='0Qk3F0000000tfRSAQ']_.sld"));
  await Add_custom_objects();
  // Converting a 'salesforce-apex-action' step has to be done manually at this time
  await click(l("TestCustomObjects"));
  // Converting a 'drag' step has to be done manually at this time
  await Delete_test_custom_objects();
}

async function Validate_Test_Object(param) {
  if (true) {
    return;
  }
  await click(l(".slds-icon-waffle"));
  await type(l("[aria-invalid='false']"), 'Sa');
  await click(l("Sales"));
  await sleep(5000);
  await click(l("[data-id='0Qk8a000000mtBuCAI']_.sld"));
  await click(l("Search_this_list..."));
  await type(l("Search_this_list..."), '2b0cc84f-1de2-42a6-aef8-8f49fe124d30');
  await sendCharacter(l("Search_this_list..."), '\r');
  await click(l("Test_Custom_Object"));
  await waitForText(l(".slds-form-element_edit_.test-id__f"), '2b0cc84f-1de2-42a6-aef8-8f49fe124d30');
}

async function Test_search_test_object() {
  await click(l("Home"));
  await click(l("[aria-invalid='false']"));
  await type(l("[aria-invalid='false']"), randomValue);
  await click(l(".slds-p-around_medium_>_lightning-b"));
  //TODO Please add an assertion here
  await exists(l("close_Close_List_of_search_test_obj"));
  await waitForText(l("Product_Name"), randomValue);
  await click(l("Cancel"));
}

async function Delete_custom_record() {
  await click(l("TestCustomObjects"));
  // Converting a 'drag' step has to be done manually at this time
  await type(l("Search_this_list..."), randomValue);
  await sendCharacter(l("Search_this_list..."), '\r');
  await click(l(".listDisplays_.slds-icon_container_"));
  await click(l("Delete"));
  //TODO Please add an assertion here
  await exists(l("Delete_TestCustomObject_Close_this_"));
  await waitForText(l("Are_you_sure_you_want_to_delete_thi"), 'Are you sure you want to delete this TestCustomObject?');
  await click(l("[data-aura-class='uiButton--default"));
}

async function Checkout() {
  await click(l("[id='oneHeader']_.uiImage"));
  await click(l("Log_Out"));
}

