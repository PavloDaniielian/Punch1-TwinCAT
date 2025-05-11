// MessageBox.js
(function (TcHmi) {
    TcHmi.EventProvider.register("onButtonClick", function () {
        TcHmi.MessageBox.show({
            text: "Do you want to proceed?",
            caption: "Confirmation",
            buttons: TcHmi.MessageBox.Buttons.YesNo,
            icon: TcHmi.MessageBox.Icon.Warning
        }, function (result) {
            if (result === TcHmi.MessageBox.Buttons.Yes) {
                console.log("User clicked Yes");
                // Add your Yes logic here
            } else {
                console.log("User clicked No");
                // Add your No logic here
            }
        });
    });
})(TcHmi);
