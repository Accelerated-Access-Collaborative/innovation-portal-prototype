// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line


// Tell us about your product or service 

// Step one 
router.post('/htc/tell-us/step-one', function (req, res) {

  // Make a variable and give it the value
  var innovationType = req.session.data['innovation-category']

  // Check whether the variable matches a condition
  if (innovationType == "idea-only"){
    // Send user to next page
    res.redirect('/htc/tell-us/step-two')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/tell-us/step-two')
  }

})

// Step two 
router.post('/htc/tell-us/step-two', function (req, res) {

  // Make a variable and give it the value
  var regulationAware = req.session.data['regulation-aware']

  // Check whether the variable matches a condition
  if (regulationAware == "yes"){
    // Send user to next page
    res.redirect('/htc/tell-us/step-three')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/tell-us/step-three')
  }

})

// Step three 
router.post('/htc/tell-us/step-three', function (req, res) {

  // Make a variable and give it the value
  var userTested = req.session.data['user-tested']

  // Check whether the variable matches a condition
  if (userTested == "yes"){
    // Send user to next page
    res.redirect('/htc/tell-us/step-four')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/tell-us/step-four')
  }

})


// Step four 
router.post('/htc/tell-us/step-four', function (req, res) {

  // Make a variable and give it the value
  var evidenceAvailable = req.session.data['evidence-available']

  // Check whether the variable matches a condition
  if (evidenceAvailable == "yes"){
    // Send user to next page
    res.redirect('/htc/tell-us/step-five')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/tell-us/step-five')
  }

})

// Step five 
router.post('/htc/tell-us/step-five', function (req, res) {

  // Make a variable and give it the value
  var revenueModel = req.session.data['cost-savings']

  // Check whether the variable matches a condition
  if (revenueModel == "yes"){
    // Send user to next page
    res.redirect('/htc/tell-us/step-six')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/tell-us/step-six')
  }

})

// Step six 
router.post('/htc/tell-us/step-six', function (req, res) {

  // Make a variable and give it the value
  var revenueModel = req.session.data['care-setting']

  // Check whether the variable matches a condition
  if (revenueModel == "yes"){
    // Send user to next page
    res.redirect('/htc/tell-us/summary')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/tell-us/summary')
  }

})



// Login

router.post('/htc/login', function (req, res) {

  // Make a variable and give it the value
  var loginEmail = req.session.data['email']

  // Check whether the variable matches a condition
  if (loginEmail == "assessor"){
    // Send user to next page
    res.redirect('/htc/account/assessor')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/account/innovator')
  }

})


// Questions

// 1 Product or service details

// Question two
router.post('/htc/account/questions/1-product/two', function (req, res) {

  // Make a variable and give it the value
  var clinicalProduct = req.session.data['clinical-product']

  // Check whether the variable matches a condition
  if (clinicalProduct == "yes"){
    // Send user to next page
    res.redirect('/htc/account/questions/1-product/three')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/account/questions/1-product/three')
  }

})


// Question three 
router.post('/htc/account/questions/1-product/three', function (req, res) {

  // Make a variable and give it the value
  var productPurpose = req.session.data['product-purpose']

  // Check whether the variable matches a condition
  if (productPurpose == "prevent"){
    // Send user to next page
    res.redirect('/htc/account/questions/1-product/four')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/account/questions/1-product/four')
  }

})

// Question four 
router.post('/htc/account/questions/1-product/four', function (req, res) {

  // Make a variable and give it the value
  var alternativeAware = req.session.data['alternative-aware']

  // Check whether the variable matches a condition
  if (alternativeAware == "yes"){
    // Send user to next page
    res.redirect('/htc/account/questions/2-company/one')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/account/questions/2-company/one')
  }

})


// 2 Company or organisation details

// 3 Benefits and evidence

// Question one
router.post('/htc/account/questions/3-benefits/one', function (req, res) {

  // Make a variable and give it the value
  var clinicalBenefits = req.session.data['clinical-benefits']

  // Check whether the variable matches a condition
  if (clinicalBenefits == "yes"){
    // Send user to next page
    res.redirect('/htc/profile-stage-seven')
  }
  else {
    // Send user to ineligible page
    res.redirect('/htc/profile-stage-seven')
  }

})

// Working Product
router.post('/htc/account/questions/1-product/one', function (req, res) {
  var workingProduct = req.session.data['working-product']
  if (workingProduct == "yes"){
    res.redirect('/htc/account/questions/1-product/two')
  }
  else {
    res.redirect('/htc/account/questions/1-product/three')
  }
})

module.exports = router;
