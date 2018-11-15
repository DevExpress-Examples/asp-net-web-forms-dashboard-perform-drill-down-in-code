<!-- default file list -->
*Files to look at*:

* [Default.aspx](./CS/ASPxDashboard_PerformDrillDown/Default.aspx) (VB: [Default.aspx](./VB/ASPxDashboard_PerformDrillDown/Default.aspx))
* [Default.aspx.cs](./CS/ASPxDashboard_PerformDrillDown/Default.aspx.cs) (VB: [Default.aspx](./VB/ASPxDashboard_PerformDrillDown/Default.aspx))
* [DrillDown.js](./CS/ASPxDashboard_PerformDrillDown/Scripts/DrillDown.js) (VB: [DrillDown.js](./VB/ASPxDashboard_PerformDrillDown/Scripts/DrillDown.js))
<!-- default file list end -->
# ASPxDashboard - How to perform a drill-down in code


<p>The following example demonstrates how to perform a drill-down in <a href="https://documentation.devexpress.com/#Dashboard/clsDevExpressDashboardWebASPxDashboardtopic">ASPxDashboard</a> on the client side.</p>
<p>In this example, the <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_PerformDrillDowntopic">ASPxClientDashboard.PerformDrillDown</a> method is used to perform a drill-down for a specified row in a <a href="https://documentation.devexpress.com/#Dashboard/CustomDocument117161">Grid</a> dashboard item. The <a href="https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxSelectBox/">dxSelectBox</a> widget contains categories for which a drill-down can be performed. These categories are obtained using the <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_GetAvailableDrillDownValuestopic">ASPxClientDashboard.GetAvailableDrillDownValues</a> method. Select a required category and click the <strong>Perform Drill-Down</strong> button to perform a drill-down by the selected category.</p>
<p>When the Grid displays a list of products (the bottom-most detail level), you can only perform a drill-up action that returns you to the top detail level. The <a href="https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_PerformDrillUptopic">ASPxClientDashboard.PerformDrillUp</a> method is called to do this.</p>

<br/>


