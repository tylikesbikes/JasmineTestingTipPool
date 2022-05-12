


describe("Servers test (with setup and tear-down)", function() {

  beforeEach(function () {
  
    serverNameInput.value = 'Alice';
  });


  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should create a new row in the body of the servers table', function() {
    submitServerInfo();

    //this runs submitServerInfo() but these two expectations constitute a test of updateServerTable();
    expect(document.querySelector('#serverTable tbody tr td').innerText).toBe('Alice');
    expect(document.querySelectorAll('#serverTable tbody tr td')[1].innerText).toBe('$20.00');
  });

  afterEach(function() {
    // teardown logic
    allServers={};
    serverId=0;
    serverTbody.innerHTML = '';
  });
});
