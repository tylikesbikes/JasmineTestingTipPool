beforeEach(function() {
// allPayments = {};
billAmtInput.value = 100;
tipAmtInput.value = 20;



});

it('should update allPayments', function() {
    submitPaymentInfo();

    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('20');
    expect(allPayments['payment1'].tipPercent).toEqual(20);
});

it('should update paymentTable', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;

    appendPaymentTable(curPayment); // main focus of the test

    let tbl_Info = document.querySelectorAll('#paymentTable tbody tr td');

    expect(tbl_Info[0].innerText).toEqual('$100');
    expect(tbl_Info[1].innerText).toEqual('$20');
    expect(tbl_Info[2].innerText).toEqual('20%');
  });

it('should create a new payment object', function () {
let expectedPayment = {
    billAmt: '100',
    tipAmt: '20',
    tipPercent: 20,
}

expect(createCurPayment()).toEqual(expectedPayment);
});
    

afterEach(function() {
    allPayments = {};
    billAmtInput.value = '';
    tipAmtInput.value = '';

    paymentId = 0;

    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';

    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
});