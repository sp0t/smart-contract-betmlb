const BetmlbStore = artifacts.require("BetmlbStore");

contract("BetmlbStore", (accounts) => {
  it("setBetData", async () => {
    const metaCoinInstance = await BetmlbStore.deployed();

    var id = 10;

    await metaCoinInstance.createBetData(id, "2022-10-12", "Football", "England vs France", "OU", "England", 100, 230, 430, 'PENDDING', "https://test", { from: accounts[0] });

    var data = await metaCoinInstance.betDic(id);
    console.log(data);

    await metaCoinInstance.changeBetstatus(id, "W");
    console.log("after modify data");
    data = await metaCoinInstance.betDic(id);
    console.log("satus = ", data.status);
  });
});