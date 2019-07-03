window.onload = function () {
    "use strict";

    //Use module pattern
    var accountInfoList = [];
    var newAccount = (function () {
        // var accountName = document.getElementById("accountName").value;
        // var depositAmount = document.getElementById("depositAmount").value;
        //Constructor Function
        function Account(accountName, depositAmount) {
            this.accountName = accountName;
            this.depositAmount = depositAmount;
            console.log(accountName);
            console.log(depositAmount);
        }
        return {
            createAccount: function () {
                var name = document.getElementById("accountName").value;
                var deposit = document.getElementById("depositAmount").value;

                var account = new Account(name, deposit);
                accountInfoList[accountInfoList.length] = account;
                document.getElementById("textarea").value +=
                    "Account name: " + account.accountName + " Deposit Amount: " + account.depositAmount + "\n";

                //Reset fields
                document.getElementById("accountName").value = "";
                document.getElementById("depositAmount").value = "";
            }
        }
    })();

    document.getElementById("createAccount").addEventListener("click", function(){
        newAccount.createAccount();
    });
};





