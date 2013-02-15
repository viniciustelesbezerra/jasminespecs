describe("CreditCard", function () {
  // Other specs omitted.  
  xit("validates when text field loses focus", function() {
    loadFixtures("order_form.html");
    $("#card_number").validateCreditCardNumber();
    $("#card_number").val("123");
    $("#card_number").blur();
    expect($("#card_number_error")).toHaveText("Invalid credit card number.");

    $("#card_number").val("4111 1111 1111-1111");
    $("#card_number").blur();
    expect($("#card_number_error")).toHaveText("");
  });
});