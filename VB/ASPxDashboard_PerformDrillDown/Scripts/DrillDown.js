var dashboardControl;
var viewerApiExtension;

function onBeforeRender(s, e) {
    dashboardControl = s.GetDashboardControl();
    viewerApiExtension = dashboardControl.findExtension('viewerApi');
}

function initializeControls(s, e) {
    $("#buttonContainer").dxButton({
        onClick: performDrillAction,
    });

    $("#selectBox").dxSelectBox({
        dataSource: getDrillDownValues(),
        value: getDrillDownValues()[0]
    });
};

function getDrillDownValues() {
    var drillDownTuples = viewerApiExtension.getAvailableDrillDownValues("gridDashboardItem1"),
        drillDownValues = [];

    if (viewerApiExtension.getAvailableDrillDownValues("gridDashboardItem1") != null) {
        $.each(drillDownTuples, function (index, value) {
            drillDownValues.push(value.getAxisPoint().getValue());
        });
        return drillDownValues;
    }
    else {
        return function () { };
    }
};

function performDrillAction() {
    var tuple = viewerApiExtension.getItemData("gridDashboardItem1").createTuple([{
        AxisName: "Default",
        Value: [$("#selectBox").data("dxSelectBox").option("value")]
    }]);

    if (viewerApiExtension.canPerformDrillDown("gridDashboardItem1")) {
        viewerApiExtension.performDrillDown("gridDashboardItem1", tuple);
    }
    else {
        viewerApiExtension.performDrillUp("gridDashboardItem1");
    };
};

function ActionAvailabilityChanged(s, e) {
    if (viewerApiExtension.canPerformDrillDown("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            disabled: false,
            text: "Perform Drill-Down"
        });
        $("#selectBox").dxSelectBox({
            disabled: false
        });
    }
    if (viewerApiExtension.canPerformDrillUp("gridDashboardItem1")) {
        $("#buttonContainer").dxButton({
            disabled: false,
            text: "Perform Drill-Up"
        });
        $("#selectBox").dxSelectBox({
            disabled: true
        });
    }
};